import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
