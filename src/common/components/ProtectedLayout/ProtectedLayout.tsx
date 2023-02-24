import { useRouter } from "next/router";
import { useEffect, type PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import { TelegramUser } from "@/modules/LoginView/TelegramLogin";

import { CoreLayout } from "../CoreLayout";

import { selectUser } from "@/store/userSlice";

interface ProtectedLayoutProps {
  redirectPath?: string;
}

export const ProtectedLayout = ({
  redirectPath = "/login",
  children,
}: PropsWithChildren<ProtectedLayoutProps>) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (user && user.auth_date === 0) {
      router.replace(redirectPath);
    }
  }, [user, redirectPath, router]);

  return <CoreLayout>{children}</CoreLayout>;
};
