import EmailPasswordDemo from "./EmailPasswordDemo";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

// EmailPasswordPage is a server component by default
export default async function EmailPasswordPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log({ user });
  // EmailPasswordDemo is a client component
  return <EmailPasswordDemo user={user} />;
}