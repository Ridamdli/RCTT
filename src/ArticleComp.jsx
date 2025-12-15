import React from "react";

function ArticleComp(props) {
  const { code, nom, categorie, prixU } = props;

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

export default ArticleComp;
