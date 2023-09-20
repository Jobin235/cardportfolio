import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  bgColor?: "red" | "green" | "yellow" | "black";
  padding?: string;
  fullHeight?: boolean;
};

export default function Card({
  children,
  bgColor = "black",
  padding,
  fullHeight = false,
}: CardProps) {
  const colorVariants = {
    black: "bg-cool-black",
    red: "bg-cool-red",
    green: "bg-cool-green",
    yellow: "bg-cool-yellow",
  };
  return (
    <section
      className={classNames(
        "mx-1 rounded-2xl",
        { "p-8": padding === undefined },
        { "h-full": fullHeight === true },
        `${padding ? padding : ""}`,
        `${colorVariants[bgColor]}`,
      )}
    >
      {children}
    </section>
  );
}
