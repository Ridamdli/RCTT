import React from "react";

function ArticleComp2({code, nom, categorie, prixU }) {
   return (
    <p>
      code:{code}
      <br></br>
      nom:{nom}
      <br></br>
      categorie:{categorie}
      <br></br>
      prix:{prixU}
      <br></br>
    </p>
  );
}

export default ArticleComp2;
