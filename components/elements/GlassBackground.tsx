import { IGlassBackground } from "./types";

const GlassBackground = ({ children, height }: IGlassBackground) => {
  return (
    <div
      className={`bg-[rgba(255, 255, 255, 0.15)] flex flex-col rounded-md items-center ${height} w-[95%] glass`}
    >
      {children}
    </div>
  );
};

export default GlassBackground;
