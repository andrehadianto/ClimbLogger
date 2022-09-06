import { PageHead } from "@/common/components/PageHead";

import { UserView } from "@/modules/UserView";

const User = () => {
  return (
    <div className="h-full px-5 py-12">
      <PageHead name="User Profile" />
      <UserView />
    </div>
  );
};

export default User;
