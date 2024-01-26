import { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      Questa pagina non esiste, <a href="/">torna alla home</a>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Pagina non trovata</title>;
