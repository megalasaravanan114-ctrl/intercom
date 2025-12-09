export default function DropDown({
  value,
  options,
  onChange,
  className = ""
}) {
  return (
    <div className={`flex flex-col ${className}`}>

      <select
        className="bg-[#00031E] border border-gray-700 text-white rounded-lg px-5 gap-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
