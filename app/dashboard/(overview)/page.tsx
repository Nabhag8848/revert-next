import DashboardHeader from "@revertdotdev/components/ui/DashboardHeader";
import { Badge } from "@revertdotdev/components/ui/dashboard/bagde";
import CardWrapper from "@revertdotdev/components/ui/dashboard/cards";
import ApiRequestChart from "@revertdotdev/components/ui/dashboard/chart";

export default async function Page() {
  return (
    <main>
      <DashboardHeader
        title="Dashboard"
        description="Check how your integrations are performing"
      />
      <div className="grid gap-6 grid-cols-3 mb-8">
        <CardWrapper />
      </div>
      <div className="flex">
        <ApiRequestChart />
        <div className="border border-gray-25 rounded-xl p-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-1">Recent Api Calls</h2>
            <p className="text-sm">
              Includes outbound requests made to API Providers to retrieve and
              send data
            </p>
          </div>

          <div className="grid grid-cols-2 text-xs">
            <div>
              <h3 className="uppercase text-gray-50/70 font-bold">endpoint</h3>
              <Badge variant="get"> GET </Badge>
              <Badge variant="post"> POST </Badge>
              <Badge variant="put"> PUT </Badge>
            </div>
            <div className="justify-self-end">
              <h3 className="uppercase text-gray-50/70 font-bold">enabled</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
