import Email from "images/email.svg";
import Address from "images/address.svg";
import Phone from "images/phone.svg";
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
    case "Email":
      return <Email />;
    case "Indirizzo":
      return <Address />;
    case "Telefono":
      return <Phone />;
    default:
      return <Email />;
  }
};
