import GoogleLoginDemo from "./GoogleLoginDemo";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

// GoogleLoginPage is a server component by default
export default async function GoogleLoginPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log({ user });
  // GoogleLoginDemo is a client component
  return <GoogleLoginDemo user={user} />;
}