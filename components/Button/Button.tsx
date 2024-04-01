'use client';

const Button = ({ children, onClick, disabled, className }: any) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`${className} bg-black px-12 py-4 rounded-3xl inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-50 shadow-2xl transition-colors disabled:pointer-events-none disabled:opacity-50`}
  >
    {children}
  </button>
);

export default Button;
