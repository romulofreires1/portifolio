interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-5xl mb-16 md:text-7xl font-bold text-center text-neon-spring">
      {text}
    </h1>
  );
};

export default Title;
