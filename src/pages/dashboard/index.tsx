import { PageHead } from "@/common/components/PageHead";

import { DashboardView } from "@/modules/DashboardView";

const Dashboard = () => {
  return (
    <div className="h-full">
      <PageHead description="Logs" name="Logs" />
      <DashboardView />
    </div>
  );
};

export default Dashboard;
