import SideNav from "@/components/ui/SideNav";

type Props = {};

export default function ResponsivePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <div className="">
        <SideNav />
      </div>
      <div className="w-full px-5 mt-10">{children}</div>
    </div>
  );
}
