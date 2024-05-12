import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mourvplshxphnerbdaze.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdXJ2cGxzaHhwaG5lcmJkYXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMTExOTMsImV4cCI6MjAzMDU4NzE5M30.fDPqYqOiflQPEFyrPzUxxZqHm3qlOPYlckD8mkF4qeE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;