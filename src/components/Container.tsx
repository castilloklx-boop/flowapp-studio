export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24 ${className}`}
    >
      {children}
    </div>
  );
}
