import { VStack } from "@chakra-ui/react";

import { PageHead } from "@/common/components/PageHead";

import { LoginView } from "@/modules/LoginView";

const LoginPage = () => {
  return (
    <div className="h-full p-4 xs:py-[50px]">
      <PageHead append={false} description="User Auth" name="User Auth" />
      <LoginView />
    </div>
  );
};

export default LoginPage;
