// const SwapCard = ({
//   title,
//   amount,
//   tokenIcon,
//   tokenSymbol,
//   bottomLeftValue,
//   bottomRightValue,
//   onMaxClick,
//   className
// }) => {
//   return (
//     <div className={`border border-[#f6f8fa47] rounded-xl p-6 text-white w-full max-w-[36rem] mx-auto mt-[1%]  ${className}`} >
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="text-[19px]">{title}</p>
//           <p className="text-[32px] font-[450] mt-1">${amount}</p>
//         </div>
//         <div className="flex items-center gap-2 bg-[#1F2130] px-3 py-2 rounded-lg border border-[#333] cursor-pointer">
//           <img src={tokenIcon} alt={tokenSymbol} className="w-6 h-6" />
//           <span className="font-medium">{tokenSymbol}</span>
//           <span className="text-gray-400">▼</span>
//         </div>
//       </div>
//       <div className="mt-7 mb-4 border-t border-[#333]"></div>
//       <div className="flex justify-between items-center text-sm">
//         <span className="text-gray-400 text-[19px]">{bottomLeftValue}</span>

//         <div className="flex items-center gap-3">
//           <span className="text-gray-300 text-[19px]">
//             {bottomRightValue} {tokenSymbol}
//           </span>
//           {onMaxClick && (
//             <button
//               onClick={onMaxClick}
//               className="text-blue-400 font-semibold hover:underline text-[17px]"
//             >
//               MAX
//             </button>
//           )}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default SwapCard;

const SwapCard = ({
  title,
  amount,
  tokenIcon,
  tokenSymbol,
  bottomLeftValue,
  bottomRightValue,
  onMaxClick,
  className
}) => {
  return (
    <div className={`border border-[#f6f8fa47] rounded-xl p-4 sm:p-6 text-white w-full w-full max-w-[20rem] sm:max-w-[28rem] lg:max-w-[36rem] mx-auto mt-4 ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm sm:text-base md:text-lg">{title}</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-[450] mt-1">${amount}</p>
        </div>

        <div className="flex items-center gap-2 bg-[#1F2130] px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-[#333] cursor-pointer">
          <img src={tokenIcon} alt={tokenSymbol} className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-medium text-sm sm:text-base">{tokenSymbol}</span>
          <span className="text-gray-400 text-sm">▼</span>
        </div>
      </div>

      <div className="mt-4 sm:mt-7 mb-2 sm:mb-4 border-t border-[#333]"></div>

      <div className="flex justify-between items-center text-sm sm:text-base">
        <span className="text-gray-400">{bottomLeftValue}</span>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-gray-300">
            {bottomRightValue} {tokenSymbol}
          </span>
          {onMaxClick && (
            <button
              onClick={onMaxClick}
              className="text-blue-400 font-semibold hover:underline text-xs sm:text-sm"
            >
              MAX
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwapCard;

