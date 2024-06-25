import { inter } from "@revertdotdev/components/fonts";

type DashboardProps = {
  title: string;
  description: string;
};

function DashboardHeader({ title, description }: DashboardProps) {
  return (
    <>
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl font-bold`}>
        {title}
      </h1>
      <p>{description}</p>
    </>
  );
}

export default DashboardHeader;
