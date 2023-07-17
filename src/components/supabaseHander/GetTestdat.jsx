import React, { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdtkatcrobksncwzayvm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkdGthdGNyb2Jrc25jd3pheXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMTYyODAsImV4cCI6MjAwMzY5MjI4MH0.yyCl0nHM1BPry2yA3ABhhCD5gwf2QgSNeoChh5EGmFw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
