import Card from "./components/Card/Card";
import ClickCard from "./components/ClickCard/ClickCard";
import DetailCard from "./components/DetailCard/DetailCard";
import ContactCard from "./components/ContactCard/ContactCard";
import { contactData } from "./data/Contact";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Status Containers */}
      <div className="flex justify-between">
        <Link href={"/experience"}>
          <Card bgColor="green">
            <div className="flex flex-col text-center">
              <h2 className="font-bold text-4xl">4+</h2>
              <h3 className="font-bold">Years of Experience</h3>
            </div>
          </Card>
        </Link>
        <Link href={"/portfolio"}>
          <Card bgColor="yellow">
            <div className="flex flex-col text-center text-black">
              <h2 className="font-bold text-4xl">14+</h2>
              <h3 className="font-bold">Projects Completed</h3>
            </div>
          </Card>
        </Link>
        <Link href={"/clients"}>
          <Card bgColor="red">
            <div className="flex flex-col text-center">
              <h2 className="font-bold text-4xl">5+</h2>
              <h3 className="font-bold">Happy Clients</h3>
            </div>
          </Card>
        </Link>
      </div>

      {/* Clickable Cards - About */}
      <ClickCard
        title="About"
        clickTitle="Resume"
        clickType="download"
        path="/files/Jobin_Joy_Resume.pdf"
      >
        <article className="text-justify">
          <p className="pt-4 text-gray-400">
            I'm an engineering graduate who has been working as a full stack web
            developer since 2019. I enjoy tackling complex problems with
            innovative solutions. With my proven remote work experience and
            international client collaborations, I am confident in my ability to
            deliver high-quality code that meets and exceeds project
            requirements.
          </p>
          <p className="pt-4 text-gray-400">
            My repertoire includes Javascript and tools such as ReactJS, NextJS,
            Express, NodeJS, MongoDB and more.
          </p>
        </article>
      </ClickCard>

      {/* Clickable Cards - Portfolio */}
      <ClickCard
        title="Portfolio"
        clickTitle="View All"
        clickType="redirect"
        path="/portfolio"
      >
        <p>Protfolio here</p>
      </ClickCard>

      {/* Detail Cards */}
      <DetailCard title="Name" detail="Jobin Joy" />
      <DetailCard title="Based in" detail="India" />

      {/* Header Card */}
      <Card bgColor="black">
        <h1 className="capitalize text-6xl font-bold text-center">
          Creative Full-Stack Developer
        </h1>
      </Card>

      {/* Name Card */}
      <Card bgColor="black">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Jobin Joy</h2>
          <h2 className="text-xl font-bold">Full Stack Developer</h2>
        </div>
      </Card>

      {/* Contact Card */}
      <ContactCard data={contactData} />

      {/* Image Card */}
    </>
  );
}
