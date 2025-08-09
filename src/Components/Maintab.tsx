"use client";

import Branding from "./Branding";
import Graphic from "./Graphic";
import { Tabs } from "./ui/tabs";
import Uicontent from "./Uicontent";

export function Maintab() {
  const tabs = [
    {
      title: "Ui Design",
      value: "Ui Design",
      content: <TabPanelui title="Ui Design" />,
    },
    {
      title: "Graphic Design",
      value: "Graphic Design",
      content: <TabPanelgra title="Graphic Design" />,
    },
    {
      title: "Branding",
      value: "Branding",
      content: <TabPanelweb title="Branding" />,
    },
  ];

  return (
    <div className="h-auto relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabPanelui = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-auto relative rounded-2xl p-10 text-lg md:text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
      <p>{title}</p>
      <Uicontent />
    </div>
  );
};
const TabPanelgra = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-auto relative rounded-2xl p-10 text-lg md:text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
      <p>{title}</p>
      <Graphic />
    </div>
  );
};
const TabPanelweb = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-auto relative rounded-2xl p-10 text-lg md:text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
      <p>{title}</p>
      <Branding />
    </div>
  );
};
