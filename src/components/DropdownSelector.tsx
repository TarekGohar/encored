"use client";

import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";

interface DropdownSelectorProps {
  name: string;
  placeholder: string;
  options: string[];
  onChange?: Dispatch<SetStateAction<string>>; // Callback function to notify parent component of state change
}

export default function DropdownSelector({
  name,
  placeholder,
  options,
  onChange,
}: DropdownSelectorProps) {
  const [isOpen, setIsOpen] = useState(false); // To track if the menu is open
  const [selectedValue, setSelectedValue] = useState(placeholder);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (!options || options.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input type="hidden" value={selectedValue} name={name} />
      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown open/closed
        className={`w-full px-4 py-3 bg-white border-b-2 border-l-2 font-medium duration-200 ${
          isOpen ? "border-neutral-400" : "border-neutral-300"
        }`}
      >
        <div className="flex items-center justify-between space-x-2">
          <h2 className="text-neutral-600">{selectedValue}</h2>
          <svg
            className={`w-5 h-5 text-neutral-600 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu: Positioned absolutely, shown only when isOpen is true */}
      {isOpen && (
        <div
          className={
            `absolute mt-2 z-10 w-full bg-white border-l-2 border-b-2 border-neutral-400  shadow-lg overflow-hidden overflow-y-auto` +
            (options.length > 4 ? " h-44" : "")
          }
        >
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setSelectedValue(option);
                if (onChange) {
                  onChange(option); // Notify parent component of the change
                }
                setIsOpen(false); // Close the dropdown after selection
              }}
              className={`block w-full px-4 py-3 text-left text-neutral-500 hover:bg-neutral-50 active:bg-neutral-100 transition ease-in duration-150`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
