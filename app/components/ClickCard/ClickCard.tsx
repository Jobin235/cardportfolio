import React, { Children } from "react";
import Card from "../Card/Card";
import Link from "next/link";

type ClickCard = {
  children: React.ReactNode;
  title: string;
  clickTitle: string;
  clickType: "download" | "redirect";
  path: string
};

export default function ClickCard({
  title,
  clickTitle,
  clickType,
  path,
  children,
}: ClickCard) {
  return (
    <Card bgColor="black">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        {clickType === "download" ? (
          <a href={path} target="_blank" download>
            <h2 className="text-2xl text-gray-400 hover:text-white">
              {clickTitle}
            </h2>
          </a>
        ) : (
          <Link href={path}>
            <h2 className="text-2xl text-gray-400 hover:text-white">
              {clickTitle}
            </h2>
          </Link>
        )}
      </div>
      {children}
    </Card>
  );
}
