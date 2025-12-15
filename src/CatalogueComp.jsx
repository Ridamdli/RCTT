import React from "react";
import ArticleComp from "./ArticleComp";
import ArticleComp1 from "./ArticleComp1";

function CatalogueComp(props) {
  const tab = props.cata;
  return (
    <div>
      <h1>CATALOGUE DES PRODUITS:</h1>
     
      {tab.map((prod, index) => (
        <ArticleComp1 key={index} donnees={prod} />
      ))}
    </div>
  );
}

export default CatalogueComp;
