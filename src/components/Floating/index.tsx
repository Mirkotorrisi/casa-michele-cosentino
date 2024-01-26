import useScrollPosition from "hooks/useScrollPosition";
import CircleStroke from "images/circle-stroke.svg";
import Circle from "images/circle.svg";
import SquareStroke from "images/square-stroke.svg";
import Square from "images/square.svg";
import TriangleStroke from "images/triangle-stroke.svg";
import Triangle from "images/triangle.svg";
import React from "react";
import "./index.scss";

type Props = {
  keyName: string;
  style?: Record<string, string | number | undefined>;
};

const Floating = ({ keyName, style = {} }: Props) => {
  const className = "floating ease-out";
  const { scrollPosition, ref } = useScrollPosition();
  const props = {
    className,
    style: {
      ...style,
      transform: `translateY(${scrollPosition * 0.4}%)`,
    },
  };
  return (
    <>
      <div className="floating" style={style} ref={ref} />
      {{
        square: <Square {...props} />,
        "square-stroke": <SquareStroke {...props} />,
        circle: <Circle {...props} />,
        "circle-stroke": <CircleStroke {...props} />,
        triangle: <Triangle {...props} />,
        "triangle-stroke": <TriangleStroke {...props} />,
      }[keyName] || <></>}
    </>
  );
};

export default Floating;
