import { serve } from "std/http/server.ts";

serve((req: Request) => new Response("Import maps work!"));
