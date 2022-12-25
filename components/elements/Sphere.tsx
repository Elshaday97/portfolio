export const HeaderSphere = () => {
  return (
    <>
      <div
        className="transition-all absolute rounded-[50%] h-[300px] w-[300px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[350px] lg:h-[350px] lg:w-[400px] top-[-20px] sm:top-[-125] right-[-93px]"
        style={{
          background:
            "linear-gradient(259.71deg, #9AE8C7 61.25%, #177E89 92.3%)",
          filter: "blur(50px)",
          zIndex: -10,
        }}
      />
      <div
        className="absolute rounded-[50%] h-[60vh] w-[450px] md:h-[450px] md:w-[550px] top-[-80px] right-[50px] md:right-[100px] lg:w-[55vw] lg:h-[630px] lg:top-[-90px]"
        style={{
          background: "rgba(23, 126, 137, 0.78)",
          filter: "blur(50px)",
          zIndex: -10,
        }}
      />

      <div
        className="hidden sm:block absolute rounded-[50%] h-[200px] w-[200px] top-[65vh] sm:top-[60vh] left-[5%]"
        style={{
          background: "#9AE8C7",
          filter: "blur(15px)",
          zIndex: -10,
        }}
      />

      <div
        className="absolute rounded-[50%] bottom-0 right-[3%] w-[100px] h-[200px] sm:w-[330px] sm:h-[325px]"
        style={{
          background: "rgba(23, 126, 137, 0.54)",
          filter: "blur(10px)",
          zIndex: -10,
        }}
      />
    </>
  );
};

export const FooterShere = () => {};
