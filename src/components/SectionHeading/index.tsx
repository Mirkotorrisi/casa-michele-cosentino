import { useVocabulary } from "context/Vocabulary";
import React from "react";

type Title = {
  tag?: "h1" | "h2" | "h3";
  className?: string;
  text: string;
};
type Props = {
  title?: Title;
  subtitle?: Title;
  cta?: {
    href: string;
    label: string;
  };
};
const SectionHeadings = ({ title, subtitle, cta }: Props) => {
  const { translate } = useVocabulary();

  const TitleTag = title?.tag || "p";
  const SubtitleTag = subtitle?.tag || "p";

  return (
    <>
      {title && (
        <TitleTag className={title.className}>{translate(title.text)}</TitleTag>
      )}
      {subtitle && (
        <SubtitleTag className={subtitle.className}>
          {translate(subtitle.text)}
        </SubtitleTag>
      )}
      {cta && (
        <a className="cta" href={cta.href}>
          {translate(cta.label)}
        </a>
      )}
    </>
  );
};

export default SectionHeadings;
