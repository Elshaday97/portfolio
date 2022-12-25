import { IGlassBackground } from "./types";

const GlassBackground = ({ children, height, width }: IGlassBackground) => {
  return (
    <div
      className={`bg-[rgba(255, 255, 255, 0.15)] flex flex-col rounded-md items-center ${height} ${
        width || "w-[95%]"
      } glass`}
    >
      <div className="h-full w-full ">{children}</div>
    </div>
  );
};

export default GlassBackground;
