import { useState } from "react";

const SwapCard = ({
  title,
  tokenIcon,
  tokenSymbol,
  bottomLeftValue,
  bottomRightValue,
  // onMaxClick,
  className
}) => {
  const [value, setValue] = useState(bottomLeftValue)
  const [open, setOpen] = useState(false);
  const tokens = [
    { symbol: "USDT", icon: tokenIcon },
    { symbol: "ETH", icon: tokenIcon },
    { symbol: "BTC", icon: tokenIcon }
  ];
  const [selectedToken, setSelectedToken] = useState(tokens[0]);

  function onMaxClick() {
    setValue(bottomRightValue)
  }
  return (
    <div className={`border border-[#f6f8fa47] rounded-xl p-4 sm:p-6 text-white w-full w-full max-w-[20rem] sm:max-w-[28rem] lg:max-w-[36rem] mx-auto mt-4 ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm sm:text-base md:text-lg">{title}</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-[450] mt-1">{value}</p>
        </div>
        <div className="relative select-none">
          {/* dropdown */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-[#1F2130] px-2 sm:px-3 py-1 sm:py-2 
                   rounded-lg border border-[#333] cursor-pointer"
          >
            <img
              src={selectedToken.icon}
              alt={selectedToken.symbol}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />

            <span className="font-medium text-sm sm:text-base">
              {selectedToken.symbol}
            </span>

            <span className="text-gray-400 text-sm">
              {open ? "▲" : "▼"}
            </span>
          </div>

          {/* menu */}
          {open && (
            <div className="absolute mt-2 bg-[#1F2130] border border-[#333] 
                        rounded-lg shadow-lg z-20 w-full">
              {tokens.map((t) => (
                <div
                  key={t.symbol}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#2A2C3A] cursor-pointer"
                  onClick={() => {
                    setSelectedToken(t);
                    setOpen(false);
                  }}
                >
                  <img src={t.icon} alt={t.symbol} className="w-5 h-5" />
                  <span>{t.symbol}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 sm:mt-7 mb-2 sm:mb-4 border-t border-[#333]"></div>

      <div className="flex justify-between items-center text-sm sm:text-base z-50">
        <span className="text-gray-400">{value}</span>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-gray-300">
            {bottomRightValue} {tokenSymbol}
          </span>
          {onMaxClick && (
            <button
              onClick={onMaxClick}
              className="text-blue-400 font-semibold hover:underline text-xs sm:text-sm z-100"
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

