import React from "react";
import ArticleComp from "./ArticleComp";
import ArticleComp1 from "./ArticleComp1";
import ArticleCompBis from "./ArticleCompBis";

function CatalogueCompBis(props) {
  const tab = props.cata;
  return (
    <div>
      <h1>CATALOGUE DES PRODUITS:</h1>
      <table className="table table-bordered border-danger">
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Categorie</th>
            <th>Prix U</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tab.map((prod, index) => (
            <ArticleCompBis
              key={index}
              donnees={prod}
              onDelete={props.onDelete}
              onUpdate={props.onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CatalogueCompBis;
