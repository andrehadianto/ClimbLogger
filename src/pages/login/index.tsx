import { AuthLayout } from "@/common/components/AuthLayout";
import { PageHead } from "@/common/components/PageHead";

import { LoginView } from "@/modules/LoginView";

const LoginPage = () => {
  return (
    <div className="h-full px-12 py-20">
      <PageHead description="Login" name="Login" />
      <LoginView />
    </div>
  );
};

LoginPage.layout = AuthLayout;

export default LoginPage;
