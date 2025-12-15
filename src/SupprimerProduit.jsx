import React, { useState } from "react";

function SupprimerProduit(props) {
  const [code, setCode] = useState("");
  const delProduits = props.fctDelPrd;

  function handelChange(e) {
    setCode(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const unProduit = produit;
  
    delProduits(code);
  }

  return (
    <>
      <h1>Supprimer un produit</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">Code:</label>
          <input type="text" name="code" value={code} onChange={(e) => handelChange(e)} />
        </div>

        <input type="submit" value="Supprimer produit" />
      </form>
      <div></div>
    </>
  );
}

export default SupprimerProduit;
