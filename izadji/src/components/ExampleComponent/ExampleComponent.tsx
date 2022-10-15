type ExampleComponentProps = {
  text: string;
};

const ExampleComponent = ({ text }: ExampleComponentProps) : JSX.Element => <p>{text}</p>;

export default ExampleComponent;
