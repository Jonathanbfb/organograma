import React from "react";
import styles from "./organogramaStyles";

type ButtonProps = {
  labelHeading: string;
  labelSubheading: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ labelHeading, labelSubheading, onClick }) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.botaoHover.backgroundColor!;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.botao.backgroundColor!;
  };

  return (
    <button
      style={styles.botao}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <div style={{ textAlign: "center", lineHeight: "1.2" }}>
        <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
          {labelHeading}
        </h3>
        <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
          {labelSubheading}
        </h4>
      </div>
    </button>
  );
};

export default Button;