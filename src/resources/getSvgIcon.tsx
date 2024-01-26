import Activities from "images/activities.svg";
import Address from "images/address.svg";
import ArrowDown from "images/arrow-down.svg";
import Arrow from "images/arrow.svg";
import BookBlue from "images/book-blue.svg";
import DailyBlue from "images/daily-blue.svg";
import Daily from "images/daily.svg";
import DietBlue from "images/diet-blue.svg";
import Diet from "images/diet.svg";
import Email from "images/email.svg";
import MedicalBlue from "images/medical-blue.svg";
import Medical from "images/medical.svg";
import Nursing from "images/nursing.svg";
import Phone from "images/phone.svg";
import Rehabilitation from "images/rehabilitation.svg";
import SmileBlue from "images/smile-blue.svg";
import SpiritualBlue from "images/spiritual-blue.svg";
import Treatment from "images/treatment.svg";
import WhiteEmail from "images/white-email.svg";
import React from "react";

export const getSvgIcon = (key: string) => {
  switch (key) {
    case "medical":
      return <Medical />;
    case "diet":
      return <Diet />;
    case "treatment":
      return <Treatment />;
    case "activities":
      return <Activities />;
    case "nursing":
      return <Nursing />;
    case "daily":
      return <Daily />;
    case "rehabilitation":
      return <Rehabilitation />;
    case "email":
      return <Email />;
    case "address":
      return <Address />;
    case "phone":
      return <Phone />;
    case "arrow-left":
      return <Arrow />;
    case "arrow-right":
      return <Arrow style={{ rotate: "180deg" }} />;
    case "arrow-down":
      return <ArrowDown />;
    case "white-email":
      return <WhiteEmail />;
    case "diet-blue":
      return <DietBlue />;
    case "book-blue":
      return <BookBlue />;
    case "daily-blue":
      return <DailyBlue />;
    case "medical-blue":
      return <MedicalBlue />;
    case "smile-blue":
      return <SmileBlue />;
    case "spiritual-blue":
      return <SpiritualBlue />;
    default:
      return <Email />;
  }
};
