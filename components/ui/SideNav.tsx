import Link from "next/link";
import NavLinks from "@revertdotdev/components/ui/NavLinks";
import ClerkButton from "./ClerkButton";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary-950 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">Logo</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <p className="uppercase text-xs font-bold text-gray-50/70 mb-2">
          Overview
        </p>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <ClerkButton />
      </div>
    </div>
  );
}
