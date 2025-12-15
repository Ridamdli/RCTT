import React from "react";

function ArticleCompBis(props) {
  const { code, nom, categorie, prixU } = props.donnees;

  return (
    <tr>
      <td>{code}</td>
      <td>{nom}</td>
      <td>{categorie}</td>
      <td>{prixU}</td>
       <td><button>supp</button></td>
    </tr>
  );
}

export default ArticleCompBis;
