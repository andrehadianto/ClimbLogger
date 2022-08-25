import { PageHead } from "@/common/components/PageHead";

const Create = () => {
  return (
    <div className="h-full">
      <PageHead
        append={false}
        description="Home page description"
        name="Home"
      />
      <section className="grid place-content-center h-full">
        <span>Hello create</span>
      </section>
    </div>
  );
};

export default Create;
