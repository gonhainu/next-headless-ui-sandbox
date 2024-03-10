"use client";

import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";
import { useRouter } from "next/navigation";
import React from "react";
import { usePathname } from "next/navigation";

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = React.useState("foo");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`/tabs/${value}`);
  };

  React.useEffect(() => {
    if (pathname === "/tabs") {
      router.replace("/tabs/foo");
    }
    if (pathname === "/tabs/foo") {
      setActiveTab("foo");
    } else if (pathname === "/tabs/bar") {
      setActiveTab("bar");
    }
  }, [pathname, router]);

  return (
    <section>
      <Tabs.Root
        className="TabsRoot"
        value={activeTab}
        onValueChange={handleTabChange}
        defaultValue="foo"
      >
        <Tabs.List className="TabsList" aria-label="Switch Page">
          <Tabs.Trigger className="TabsTrigger" value="foo">
            Foo
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="bar">
            Bar
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      {children}
    </section>
  );
}
