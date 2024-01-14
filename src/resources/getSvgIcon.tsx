import Email from "images/email.svg";
import Address from "images/address.svg";
import Phone from "images/phone.svg";
import Arrow from "images/arrow.svg";
import Medical from "images/medical.svg";
import Diet from "images/diet.svg";
import Nursing from "images/nursing.svg";
import Daily from "images/daily.svg";
import Rehabilitation from "images/rehabilitation.svg";
import Activities from "images/activities.svg";
import Treatment from "images/treatment.svg";
import ArrowDown from "images/arrow-down.svg";
import React from "react";

export const getSvgIcon = (key: string) => {
  switch (key) {
    case "Medica":
      return <Medical />;
    case "Alimentazione":
      return <Diet />;
    case "Cura personale":
      return <Treatment />;
    case "Attività":
      return <Activities />;
    case "Infermieristica":
      return <Nursing />;
    case "Quotidiana":
      return <Daily />;
    case "Riabilitativa":
      return <Rehabilitation />;
    case "Email":
      return <Email />;
    case "Indirizzo":
      return <Address />;
    case "Telefono":
      return <Phone />;
    case "arrow-left":
      return <Arrow />;
    case "arrow-right":
      return <Arrow style={{ rotate: "180deg" }} />;
    case "arrow-down":
      return <ArrowDown />;
    default:
      return <Email />;
  }
};
