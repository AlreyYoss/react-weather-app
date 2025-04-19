import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = ({
  id,
  name,
  type,
  className,
  value,
  onChange,
  placeHolder,
  label,
  onClick,
}) => {
  return (
    <div className="flex items-center gap-2 h-[39px]">
      <div className="relative flex-1">
        {label && (
          <label className="absolute top-0 left-2 text-[12px] z-10 opacity-50 px-3 pointer-events-none">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={id}
          className={`
            w-full
            bg-white/20 
            backdrop-blur-md 
            rounded-lg 
            px-5
            text-[13px]
            shadow-md 
            bg-transparent 
            text-white 
            placeholder-white 
            focus:outline-none 
            pt-4
            pb-1
            ${className}
          `}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </div>

      <button
        type="button"
        className="z-20 flex-shrink-0 w-[39px] h-[39px] flex items-center justify-center bg-[#8a2be2] rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <IoMdSearch className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchInput;