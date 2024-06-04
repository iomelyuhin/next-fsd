"use client";

interface Props {
  className: string;
  children: React.ReactNode;
}

export const GlobalLayout = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};
