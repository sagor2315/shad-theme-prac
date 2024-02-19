"use client";
import { useState } from "react";
import { Nav } from "./nav";
import {
  LayoutDashboard,
  UsersRound,
  ShoppingCart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "./button";

type Props = {};

export default function SideNav({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapsedFunc = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="relative px-3 pt-20 pb-5 border-r h-full lg:min-w-[80px]">
      <div className="absolute -right-5 top-5">
        <Button
          onClick={collapsedFunc}
          variant="secondary"
          className="rounded-full p-2 "
        >
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/responsive",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/responsive/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Ordrs",
            href: "/responsive/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/responsive/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
