import { login, logout } from "@/app/auth/actions";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { SignInButton } from "./SignInButton";
import { Button } from "./ui/button";

export default async function HeaderUser() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <>
          {user.user_metadata.avatar_url && (
            <Image
              width={100}
              height={100}
              src={user.user_metadata.avatar_url}
              alt="User avatar"
              className="size-10 rounded-full"
            />
          )}
          <form action={logout}>
            <Button>Sign Out</Button>
          </form>
        </>
      ) : (
        <form action={login}>
          <SignInButton />
        </form>
      )}
    </div>
  );
}