import React from 'react';

interface ButtonProps {
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray';
  text: string;
  onClick?: () => void;
}

// Map colors to actual Tailwind classes
const colorClassMap: Record<string, string> = {
  blue: 'bg-[#5CD6FF] hover:bg-blue-600',
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
  yellow: 'bg-yellow-500 hover:bg-yellow-600',
  gray: 'bg-gray-500 hover:bg-gray-600',
};

const Button: React.FC<ButtonProps> = ({ color = 'blue', text, onClick }) => {
  const colorClass = colorClassMap[color] || colorClassMap.blue;

  return (
    <button
      className={`text-black font-manrope font-medium text-base leading-none tracking-norma py-2 px-4 rounded-full ${colorClass} transition duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
