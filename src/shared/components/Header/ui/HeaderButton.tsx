interface HeaderButtonProps {
  name: string;
  isActive?: boolean;
}

const HeaderButton = ({ name, isActive }: HeaderButtonProps) => {
  const activeClasses = isActive ? "bg-gray-700" : "hover:bg-gray-600";
  return (
    <button
      className={`text-white p-2 text-xl font-bold ${activeClasses} hover:rounded-md duration-200 transition-colors ease-in-out cursor-pointer w-full text-left`} //
      type="button"
    >
      {name}
    </button>
  );
};

export default HeaderButton;
