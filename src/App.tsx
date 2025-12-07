import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy load non-critical pages for better performance
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const ServicesDetail = lazy(() => import("./pages/ServicesDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const Booking = lazy(() => import("./pages/Booking"));
const BookingConfirmed = lazy(() => import("./pages/BookingConfirmed"));
const PraxisVernetzen = lazy(() => import("./pages/PraxisVernetzen"));
const Handwerker = lazy(() => import("./pages/Handwerker"));
const Investors = lazy(() => import("./pages/Investors"));
const Einzelhandel = lazy(() => import("./pages/Einzelhandel"));
const Pflege = lazy(() => import("./pages/Pflege"));
const Logistik = lazy(() => import("./pages/Logistik"));
const Gastronomie = lazy(() => import("./pages/Gastronomie"));

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-primary text-xl">Laden...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/process" element={<Process />} />
              <Route path="/services/:serviceId" element={<ServicesDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/confirmed" element={<BookingConfirmed />} />
              <Route path="/praxis-vernetzen" element={<PraxisVernetzen />} />
              <Route path="/handwerker" element={<Handwerker />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/einzelhandel" element={<Einzelhandel />} />
              <Route path="/pflege" element={<Pflege />} />
              <Route path="/logistik" element={<Logistik />} />
              <Route path="/gastronomie" element={<Gastronomie />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
