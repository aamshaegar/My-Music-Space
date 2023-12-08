interface Props {
  children: string;
  color?: string; // ? indica opzionale
  onClick: () => void;
}

const Button = ({ children, color = "secondary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
