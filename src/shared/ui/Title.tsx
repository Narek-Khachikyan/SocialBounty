interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  <h2 className="text-2xl font-bold mb-5">{title}</h2>;
};

export default Title;
