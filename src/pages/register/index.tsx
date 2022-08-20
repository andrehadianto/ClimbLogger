import { PageHead } from "@/common/components/PageHead";

import { RegisterView } from "@/modules/RegisterView";

const RegisterPage = () => {
  return (
    <div className="h-full px-12 py-20">
      <PageHead description="Register" name="Register" />
      <RegisterView />
    </div>
  );
};

export default RegisterPage;