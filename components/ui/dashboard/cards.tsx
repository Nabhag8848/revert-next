import { Icons } from "@revertdotdev/components/icons";
type CardProps = {
  title: string;
  value: string;
  children: React.ReactElement;
};

export default function CardWrapper() {
  return (
    <>
      <Card title="Total Connections" value="53">
        <Icons.connection />
      </Card>
      <Card title="Total Api Requests" value="34,875">
        <Icons.request />
      </Card>
      <Card title="Connected Integrations" value="8">
        <Icons.ConnectedApp />
      </Card>
    </>
  );
}

export function Card({ title, value, children }: CardProps) {
  return (
    <div className="rounded-xl p-2 shadow-sm border border-gray-50/15">
      <div className="flex p-3">
        <div className="bg-shade-800 rounded-xl shadow-sm p-6 my-auto">
          {children}
        </div>
        <div className="px-4">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className={`truncate text-4xl font-bold`}>{value}</p>
        </div>
      </div>
    </div>
  );
}
