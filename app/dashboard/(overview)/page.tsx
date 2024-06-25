import { inter } from "@revertdotdev/components/fonts";
import DashboardHeader from "@revertdotdev/components/ui/DashboardHeader";

export default async function Page() {
  return (
    <main>
      <DashboardHeader
        title="Dashboard"
        description="Check how your integrations are performing"
      />
    </main>
  );
}
