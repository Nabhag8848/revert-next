import DashboardHeader from "@revertdotdev/components/ui/DashboardHeader";
import CardWrapper from "@revertdotdev/components/ui/dashboard/cards";

export default async function Page() {
  return (
    <main>
      <DashboardHeader
        title="Dashboard"
        description="Check how your integrations are performing"
      />
      <div className="grid gap-6 grid-cols-3">
        <CardWrapper />
      </div>
    </main>
  );
}
