import { ReactNode } from "react";

type LineTextProps = {
  children: ReactNode;
};

export const LineText = ({ children }: LineTextProps) => {
  return (
    <span className="relative whitespace-nowrap text-[#009b7d]">
      <span className="relative">{children}</span>
    </span>
  );
};
