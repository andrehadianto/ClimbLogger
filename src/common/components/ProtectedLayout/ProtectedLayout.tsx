import { useRouter } from "next/router";
import { useEffect, type PropsWithChildren } from "react";

interface ProtectedLayoutProps {
  user: boolean;
  redirectPath?: string;
}

export const ProtectedLayout = ({
  user,
  redirectPath = "/",
  children,
}: PropsWithChildren<ProtectedLayoutProps>) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace(redirectPath);
    }
  }, [user, redirectPath, router]);

  return <>{children}</>;
};
