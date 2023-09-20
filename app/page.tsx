import Card from "./components/Card/Card";
import ClickCard from "./components/ClickCard/ClickCard";
import DetailCard from "./components/DetailCard/DetailCard";
import ContactCard from "./components/ContactCard/ContactCard";
import { contactData } from "./data/Contact";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid-rows-10 grid gap-2">
        <div className="row-end-8 row-start-1 grid grid-cols-8 gap-2">
          <div className="col-start-1 col-end-9 grid w-full grid-rows-6 xl:col-end-4 2xl:col-end-5">
            <div className="row-start-1 row-end-5">
              {/* Header Card */}
              <Card fullHeight>
                <h1 className="flex h-full items-center text-center text-6xl font-bold capitalize">
                  Creative Full-Stack Developer
                </h1>
              </Card>
            </div>

            {/* Status Containers */}
            <div className="row-start-5 row-end-7 mt-4 flex justify-between gap-2">
              <Link href={"/experience"} className="flex-basis-0 flex-1">
                <Card bgColor="green" padding="p-4 2xl:p-8" fullHeight={true}>
                  <div className="flex h-full flex-col justify-center text-center">
                    <h2 className="text-2xl font-bold sm:text-4xl">4+</h2>
                    <h3 className="font-bold">Years of Experience</h3>
                  </div>
                </Card>
              </Link>
              <Link href={"/portfolio"} className="flex-basis-0 flex-1">
                <Card bgColor="yellow" padding="p-4 2xl:p-8" fullHeight={true}>
                  <div className="flex h-full flex-col justify-center text-center text-black">
                    <h2 className="text-2xl font-bold sm:text-4xl">14+</h2>
                    <h3 className="font-bold">Projects Completed</h3>
                  </div>
                </Card>
              </Link>
              <Link href={"/clients"} className="flex-basis-0 flex-1">
                <Card bgColor="red" padding="p-4 2xl:p-8" fullHeight={true}>
                  <div className="flex h-full flex-col justify-center text-center">
                    <h2 className="text-2xl font-bold sm:text-4xl">5+</h2>
                    <h3 className="font-bold">Happy Clients</h3>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="grid-rows-10 col-start-1 col-end-9 mt-2 grid w-full grid-cols-2 gap-2 sm:grid-rows-6 xl:col-start-4 xl:mt-0 2xl:col-start-5">
            <div className="col-span-full self-center xl:self-start">
              {/* Name Card */}
              <Card>
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">Jobin Joy</h2>
                  <h2 className="text-xl font-bold">Full Stack Developer</h2>
                </div>
              </Card>
            </div>
            <div className="col-span-full row-start-2 row-end-6 mx-1 mt-2 flex rounded-2xl bg-violet-700 sm:col-start-1 sm:col-end-2  sm:row-end-7 sm:mt-0">
              <Image
                height={100}
                width={100}
                layout="responsive"
                className="grayscale"
                src="/images/hero.png"
                alt="profileImage"
              ></Image>
            </div>
            <div className="col-span-full row-start-6 row-end-7 mt-2 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:mt-0">
              <DetailCard title="Name" detail="Jobin Joy" />
            </div>
            <div className="row-end-8 col-span-full row-start-7 mt-2 self-center sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4">
              <DetailCard title="Based in" detail="India" />
            </div>

            <div className="row-start-8 row-end-9 col-span-full mt-2 self-center sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5">
              <DetailCard title="Skills" detail="Click Here" rtl />
            </div>

            <div className="row-start-9 row-end-10 col-span-full mt-2 self-center sm:col-start-2 sm:col-end-3 sm:row-start-5 sm:row-end-6">
              <DetailCard title="Education" detail="Click Here" rtl />
            </div>

            <div className="row-start-10 row-end-11 col-span-full mt-2 self-end sm:col-start-2 sm:col-end-3 sm:row-start-6 sm:row-end-7">
              {/* Contact Card */}
              <ContactCard data={contactData} />
            </div>
          </div>
        </div>

        <div className="row-start-8 row-end-11 mt-2 grid gap-4 xl:flex xl:justify-between xl:gap-2">
          <div className="order-last basis-2/4 xl:order-first">
            <ClickCard
              fullHeight
              title="Portfolio"
              clickTitle="View All"
              clickType="redirect"
              path="/portfolio"
            >
              <div
                className="mt-6 flex items-center gap-3	"
                style={{ height: "calc(100% - 3.5rem)" }}
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    height={100}
                    width={100}
                    layout="responsive"
                    src="/images/screens/skillojo_screen.png"
                    alt="profileImage"
                  ></Image>
                </div>
                <div>
                  <Image
                    className="rounded-2xl"
                    height={100}
                    width={100}
                    layout="responsive"
                    src="/images/screens/skillojo_screen.png"
                    alt="profileImage"
                  ></Image>
                </div>
                <div>
                  <Image
                    className="rounded-2xl"
                    height={100}
                    width={100}
                    layout="responsive"
                    src="/images/screens/skillojo_screen.png"
                    alt="profileImage"
                  ></Image>
                </div>
              </div>
            </ClickCard>
          </div>
          <div className="mt-3 basis-2/4 xl:mt-0">
            <ClickCard
              fullHeight
              title="About"
              clickTitle="Resume"
              clickType="download"
              path="/files/Jobin_Joy_Resume.pdf"
            >
              <article className="text-justify">
                <p className="pt-4 text-gray-400">
                  I&apos;m an engineering graduate who has been working as a
                  full stack web developer since 2019. I enjoy tackling complex
                  problems with innovative solutions. With my proven remote work
                  experience and international client collaborations, I am
                  confident in my ability to deliver high-quality code that
                  meets and exceeds project requirements.
                </p>
                <p className="pt-4 text-gray-400">
                  My repertoire includes Javascript and tools such as ReactJS,
                  NextJS, Express, NodeJS, MongoDB and more.
                </p>
              </article>
            </ClickCard>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="flex justify-between">
//   <Link href={"/experience"}>
//     <Card bgColor="green">
//       <div className="flex flex-col text-center">
//         <h2 className="font-bold text-4xl">4+</h2>
//         <h3 className="font-bold">Years of Experience</h3>
//       </div>
//     </Card>
//   </Link>
//   <Link href={"/portfolio"}>
//     <Card bgColor="yellow">
//       <div className="flex flex-col text-center text-black">
//         <h2 className="font-bold text-4xl">14+</h2>
//         <h3 className="font-bold">Projects Completed</h3>
//       </div>
//     </Card>
//   </Link>
//   <Link href={"/clients"}>
//     <Card bgColor="red">
//       <div className="flex flex-col text-center">
//         <h2 className="font-bold text-4xl">5+</h2>
//         <h3 className="font-bold">Happy Clients</h3>
//       </div>
//     </Card>
//   </Link>
// </div>

// <ClickCard
//   title="About"
//   clickTitle="Resume"
//   clickType="download"
//   path="/files/Jobin_Joy_Resume.pdf"
// >
//   <article className="text-justify">
//     <p className="pt-4 text-gray-400">
//       I&apos;m an engineering graduate who has been working as a full stack web
//       developer since 2019. I enjoy tackling complex problems with
//       innovative solutions. With my proven remote work experience and
//       international client collaborations, I am confident in my ability to
//       deliver high-quality code that meets and exceeds project
//       requirements.
//     </p>
//     <p className="pt-4 text-gray-400">
//       My repertoire includes Javascript and tools such as ReactJS, NextJS,
//       Express, NodeJS, MongoDB and more.
//     </p>
//   </article>
// </ClickCard>

// <ClickCard
//   title="Portfolio"
//   clickTitle="View All"
//   clickType="redirect"
//   path="/portfolio"
// >
//   <p>Protfolio here</p>
// </ClickCard>

// <DetailCard title="Name" detail="Jobin Joy" />
// <DetailCard title="Based in" detail="India" />

// <Card>
//   <h1 className="capitalize text-6xl font-bold text-center">
//     Creative Full-Stack Developer
//   </h1>
// </Card>

// <Card>
//   <div className="flex justify-between">
//     <h2 className="text-xl font-bold">Jobin Joy</h2>
//     <h2 className="text-xl font-bold">Full Stack Developer</h2>
//   </div>
// </Card>

// <ContactCard data={contactData} />
