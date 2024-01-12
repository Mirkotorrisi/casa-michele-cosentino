import Email from "images/email.svg";
import React from "react";

export const getSvgIcon = (key: string) => {
  switch (key) {
    case "Medica":
      return <Email />;
    case "Alimentazione":
      return <Email />;
    case "Cura Personale":
      return <Email />;
    case "Attività":
      return <Email />;
    case "Infermieristica":
      return <Email />;
    case "Quotidiana":
      return <Email />;
    case "Riabilitativa":
      return <Email />;
    default:
      return <Email />;
  }
};
