import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  bgColor: "red" | "green" | "yellow" | "black";
  padding?: string 
}

export default function Card({ children, bgColor, padding }: CardProps) {
  const colorVariants = {
    black: "bg-cool-black",
    red: "bg-cool-red",
    green: "bg-cool-green",
    yellow: "bg-cool-yellow",
  };
  return (
    <section
      className={classNames(
        "rounded-2xl mb-4 mx-1",
        {"p-8": padding === undefined},
        `${padding}`,
        `${colorVariants[bgColor]}`
      )}
    >
      {children}
    </section>
  );
}
