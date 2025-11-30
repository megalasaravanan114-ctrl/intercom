import bg from "../../assets/bgBlur/Linear Border.png"

const GradientCard = ({ children }) => {
  return (
    <div className="
      w-full relative">
      <img src={bg} alt="" className="absolute w-[100%] h-[100%] rounded-xl" />
    <div className="
      w-[99.8%] h-[99.8%] m-auto
      bg-[#0A0F2B] 
      rounded-xl 
      md:pl-10 md:pr-10 md:pt-10  pt-2 pr-2 pl-2
      shadow-[0_0_20px_rgba(60,60,255,0.10)]
      backdrop-blur-xl
      transition inset_border_color gradient-multi-border
    ">
      <div className="bottom-border"></div>
      <div className="left-border"></div>
      {children}
    </div>
    </div>
  );
};

export default GradientCard;
    //   hover:shadow-[0_0_25px_rgba(120,80,255,0.25)] 
    //   hover:border-[#4F1AD6]
    //   border border-[#1A234A]
