import Card from "../Card/Card";
import Link from "next/link";

type DetailProps = {
  title: string;
  detail: string;
  rtl?: boolean;
  path?: string;
};

export default function DetailCard({
  title,
  detail,
  path,
  rtl = false,
}: DetailProps) {
  return (
    <Card bgColor="black">
      {rtl == false ? (
        <div className="flex justify-between">
          <h2 className="text-base text-gray-400 sm:text-xl">{title} :</h2>
          <h2 className="text-base font-bold sm:text-xl">{detail}</h2>
        </div>
      ) : (
        <div className="flex justify-between">
          <h2 className="text-base font-bold sm:text-xl">{title} :</h2>
          <Link href={""}>
            <h2 className="text-base text-gray-400 hover:text-white sm:text-xl">
              {detail}
            </h2>
          </Link>
        </div>
      )}
    </Card>
  );
}
