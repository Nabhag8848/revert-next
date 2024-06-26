import DashboardHeader from "@revertdotdev/components/ui/DashboardHeader";
import Clipboard from "@revertdotdev/components/ui/common/Clipboard";

export default async function Page() {
  return (
    <main>
      <DashboardHeader
        title="API Keys"
        description="Manage your Revert Api Keys here."
      />
      <Clipboard />
    </main>
  );
}
