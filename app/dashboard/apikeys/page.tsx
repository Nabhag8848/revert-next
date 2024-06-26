import DashboardHeader from "@revertdotdev/components/ui/DashboardHeader";
import Clipboard from "@revertdotdev/components/ui/common/Clipboard";

export default async function Page() {
  return (
    <main>
      <DashboardHeader
        title="API Keys"
        description="Manage your Revert API Keys here."
      />
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-1">Publishable key</h2>
        <p className="text-sm text-gray-50/70 mb-2">
          This key should be used in your frontend code, can be safely shared
          and does not need to be kept secret
        </p>
        <Clipboard value="pk_test_76e7a80c-4428-4ad3-9d41-d1d05265c310" />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-1">Secret key</h2>
        <p className="text-sm text-gray-50/70 mb-2">
          This are the secret keys to be used from your backend code.They are
          sensitive and should be deleted if leaked
        </p>
        <Clipboard value="sk_test_c78489a6-a5b9-4e9b-b028-585082f8a219" />
      </div>
    </main>
  );
}
