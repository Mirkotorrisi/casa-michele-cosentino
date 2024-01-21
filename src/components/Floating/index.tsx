import "./index.scss";
import React from "react";
import SquareStroke from "images/square-stroke.svg";
import Square from "images/square.svg";
import Circle from "images/circle.svg";
import CircleStroke from "images/circle-stroke.svg";
import Triangle from "images/triangle.svg";
import TriangleStroke from "images/triangle-stroke.svg";

type Props = {
  keyName: string;
  style?: Record<string, string | number | undefined>;
};

const Floating = ({ keyName, style = {} }: Props) => {
  switch (keyName) {
    case "square":
      return <Square className="floating" style={style} />;
    case "square-stroke":
      return <SquareStroke className="floating" style={style} />;
    case "circle":
      return <Circle className="floating" style={style} />;
    case "circle-stroke":
      return <CircleStroke className="floating" style={style} />;
    case "triangle":
      return <Triangle className="floating" style={style} />;
    case "triangle-stroke":
      return <TriangleStroke className="floating" style={style} />;
      break;
    default:
      return <></>;
  }
};

export default Floating;
