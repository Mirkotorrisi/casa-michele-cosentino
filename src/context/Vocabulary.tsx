import React, { ReactNode, createContext, useContext } from "react";
import { Terms } from "types/home";

const VocabularyContext = createContext<{
  translate: (k: string) => string;
}>({ translate: (k: string) => k });

type Props = {
  children: ReactNode;
  terms: Terms[];
};
export const Vocabulary = ({ children, terms = [] }: Props) => {
  console.log("🚀 ~ file: Vocabulary.tsx:13 ~ Vocabulary ~ terms:", terms);
  const translate = (searchKey: string = "") =>
    terms.find(({ key }: Terms) => key.trim().toLowerCase() === searchKey)
      ?.label ?? searchKey;
  return (
    <VocabularyContext.Provider value={{ translate }}>
      {children}
    </VocabularyContext.Provider>
  );
};

export const useVocabulary = () => useContext(VocabularyContext);
