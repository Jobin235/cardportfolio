import Card from "../Card/Card";

type DetailProps = {
  title: string;
  detail: string;
};

export default function DetailCard({ title, detail }: DetailProps) {
  return (
    <Card bgColor="black">
      <div className="flex justify-between">
        <h2 className="text-xl text-gray-400">{title} :</h2>
        <h2 className="text-xl font-bold">{detail}</h2>
      </div>
    </Card>
  );
}
