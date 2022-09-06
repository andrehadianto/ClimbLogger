import { TabsNavigation } from "../TabsNavigation";

export const CoreLayout = ({ children }) => {
  return (
    <div className="min-h-full h-full relative pb-16">
      {children}
      <TabsNavigation />
    </div>
  );
};
