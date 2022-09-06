import { PageHead } from "@/common/components/PageHead";

const Dashboard = () => {
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Home page description"
        name="Home"
      />
      <section className="grid place-content-center h-full">
        <span>Hello dashboard</span>
      </section>
    </div>
  );
};

export default Dashboard;
