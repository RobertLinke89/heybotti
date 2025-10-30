-- Create enum for request status tracking
CREATE TYPE public.request_status AS ENUM ('new', 'contacted', 'in_progress', 'completed', 'declined');

-- Create project_requests table with scalable design
CREATE TABLE public.project_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  budget INTEGER NOT NULL,
  revenue INTEGER NOT NULL,
  status request_status NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  notes TEXT,
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create indexes for common queries and performance
CREATE INDEX idx_project_requests_email ON public.project_requests(email);
CREATE INDEX idx_project_requests_status ON public.project_requests(status);
CREATE INDEX idx_project_requests_created_at ON public.project_requests(created_at DESC);
CREATE INDEX idx_project_requests_budget ON public.project_requests(budget);

-- Enable Row Level Security
ALTER TABLE public.project_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submission)
CREATE POLICY "Anyone can submit project requests"
ON public.project_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view requests
CREATE POLICY "Authenticated users can view all requests"
ON public.project_requests
FOR SELECT
TO authenticated
USING (true);

-- Only authenticated users can update requests
CREATE POLICY "Authenticated users can update requests"
ON public.project_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_project_request_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_project_requests_updated_at
BEFORE UPDATE ON public.project_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_project_request_updated_at();