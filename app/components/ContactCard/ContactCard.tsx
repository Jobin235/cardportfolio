import React from "react";
import Link from "next/link";
import Card from "../Card/Card";
import Image from "next/image";
import classNames from "classnames";

type ContactCardProps = {
  data: {
    logo: string;
    alt: string;
    link?: string;
    type: string;
    detail: string;
  }[];
};

export default function ContactCard({ data }: ContactCardProps) {
  return (
    <Card bgColor="black" padding="p-4">
      <div className="flex justify-between">
        {data &&
          data.map((contact) => {
            return (
              <React.Fragment key={contact.type}>
                {contact.link ? (
                  <Link href={contact.link ? contact.link : ""}>
                    <div className="h-14 w-14">
                      <Image
                        width="100"
                        height="100"
                        className={classNames("hover:grayscale-0", {
                          grayscale: contact.type !== "Linkedin",
                        })}
                        src={contact.logo}
                        alt={contact.alt}
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative flex flex-col">
                    <div className="peer relative h-14 w-14">
                      <Image
                        width="100"
                        height="100"
                        className="grayscale hover:grayscale-0"
                        src={contact.logo}
                        alt={contact.alt}
                      />
                    </div>
                    <p className="pointer-events-none absolute right-0 top-1/4 z-10 hidden whitespace-nowrap rounded-full bg-cool-red px-3 py-1 font-bold peer-hover:block">
                      {contact.detail}
                    </p>
                  </div>
                )}
              </React.Fragment>
            );
          })}
      </div>
    </Card>
  );
}
