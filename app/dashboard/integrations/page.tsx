import { inter } from "@revertdotdev/components/fonts";

export default async function Page() {
  return (
    <main>
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
        Integrations
      </h1>
      <div>Integrations Body</div>
    </main>
  );
}
