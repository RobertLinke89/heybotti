import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Loader2, Mail, Phone, Building, DollarSign, TrendingUp } from "lucide-react";
import { User, Session } from "@supabase/supabase-js";

interface ProjectRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  budget: number;
  revenue: number;
  status: string;
  created_at: string;
  notes: string | null;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [requests, setRequests] = useState<ProjectRequest[]>([]);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      checkAdminRole();
    } else {
      navigate("/auth");
    }
  }, [user, navigate]);

  const checkAdminRole = async () => {
    try {
      const { data, error } = await supabase.rpc('has_role', {
        _user_id: user!.id,
        _role: 'admin'
      });

      if (error) {
        console.error("Error checking admin role:", error);
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges. Please contact an administrator.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      if (data === true) {
        setIsAdmin(true);
        fetchProjectRequests();
      } else {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges. Please contact an administrator.",
          variant: "destructive",
        });
        navigate("/");
      }
    } catch (error: any) {
      console.error("Error in admin check:", error);
      toast({
        title: "Error",
        description: "Failed to verify admin status.",
        variant: "destructive",
      });
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchProjectRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('project_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setRequests(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load project requests.",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate("/auth");
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome, {user?.email}
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <div className="space-y-4">
          {requests.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No project requests yet.
              </CardContent>
            </Card>
          ) : (
            requests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{request.name}</CardTitle>
                      <CardDescription className="mt-1">
                        Submitted {formatDate(request.created_at)}
                      </CardDescription>
                    </div>
                    <Badge variant={request.status === 'new' ? 'default' : 'secondary'}>
                      {request.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{request.email}</span>
                    </div>
                    {request.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{request.phone}</span>
                      </div>
                    )}
                    {request.company && (
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{request.company}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Budget: {formatCurrency(request.budget)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Revenue: {formatCurrency(request.revenue)}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium mb-2">Message:</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {request.message}
                    </p>
                  </div>

                  {request.notes && (
                    <div className="pt-2 border-t">
                      <p className="text-sm font-medium mb-2">Internal Notes:</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {request.notes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
