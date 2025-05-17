interface HeaderButtonProps {
  name: string;
}

const HeaderButton = ({ name }: HeaderButtonProps) => {
  return (
    <button className="text-white p-2 text-xl font-bold hover:bg-gray-600 hover:rounded-md duration-200 transition-colors ease-in-out cursor-pointer ">
      {name}
    </button>
  );
};

export default HeaderButton;
