export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      role="button"
      className="bg-primaryColor hover:bg-primaryColor/80 rounded-lg px-6 cusor-pointer py-3.5 text-white"
    >
      {children}
    </div>
  );
}
