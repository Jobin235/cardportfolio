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
                    <div className="w-14 h-14">
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
                  <div className="flex flex-col relative">
                    <div className="peer w-14 h-14 relative">
                      <Image
                        width="100"
                        height="100"
                        className="grayscale hover:grayscale-0"
                        src={contact.logo}
                        alt={contact.alt}
                      />
                    </div>
                    <p className="z-10 right-0 top-1/4 font-bold absolute bg-cool-red py-1 px-3 whitespace-nowrap rounded-full pointer-events-none hidden peer-hover:block">
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
