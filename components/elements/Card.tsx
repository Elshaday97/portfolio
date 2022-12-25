interface CardProps {
  variant: "horizontal" | "vertical";
  img: string;
  title: string;
  description: string;
  action: string;
  link: string;
}

const Card = ({ variant }: CardProps) => {
  return variant === "vertical" ? (
    <div className="flex flex-col items-center bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl w-full h-[300px] sm:h-[450px]">.</div>
  ) : (
    <div className="flex flex-col items-center bg-white rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl w-full h-[350px]">.</div>
  );
};
export default Card;
