import logo from './logo.svg';
import './App.css';
import ArticleComp from './ArticleComp';
import ArticleComp1 from './ArticleComp1';
import ArticleComp2 from './ArticleComp2';
import ArticleCompCls from './ArticleCompCls';
import CatalogueComp from './CatalogueComp';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import OrdinateursCategorieClsComp from './OrdinateursCategorieClsComp';
import AjouterProduit from './AjouterProduit';
import SupprimerProduit from './SupprimerProduit';
import ArticleCompBis from './ArticleCompBis';
import CatalogueCompBis from './CatalogueCompBis';
import OrdinateursCategorieClsCompBis from './OrdinateursCategorieClsCompBis';
import ModifierProduit from './ModifierProduit';

function App() {

  const initialCatalogue = [
    { code: 'D300', nom: 'DellInspiron300', categorie: 'Ordinateur', prixU: 11000 },
    { code: 'BA25', nom: 'BallonAdidas25ml', categorie: 'Sport', prixU: 600 },
    { code: 'RQT', nom: 'Raquette', categorie: 'Sport', prixU: 260 },
  ];

  const [categorie, setCategorie] = useState();
  const [catalogue, setCatalogue] = useState(initialCatalogue);
  const [resultat, setResultat] = useState(initialCatalogue);
//Les Actions sur catalogue
//rechercher par categorie (filtrer par categorie)
function rechercheparCategorie(cat){
  if(cat===""){
    setResultat(catalogue)
    
  }else{
  setCategorie(cat)
const prdsCat = catalogue.filter((prd)=>prd.categorie.toLowerCase() ===cat.toLowerCase() )
setResultat(prdsCat)
  }
}
//Ajouter un produit
function ajouterProduit(prd){
  setCatalogue((prev) => [prd, ...prev]);
  setResultat((prev) => [prd, ...prev]);
  }
//Supprimer un produit
function supprimerProduit(code){
  // remove from both catalogue and current result list
  const prdsFltres = catalogue.filter((prd) => prd.code.toLowerCase() !== code.toLowerCase());
  setCatalogue(prdsFltres);
  setResultat((prev) => prev.filter((prd) => prd.code.toLowerCase() !== code.toLowerCase()));

  }
  //Modifier un produit
  function updateProduit(prd){
    // Support two call signatures: updateProduit(oldCode, newProd) or updateProduit(newProd)
    let oldCode;
    let newProd;
    if (arguments.length === 2) {
      oldCode = arguments[0];
      newProd = arguments[1];
    } else {
      newProd = prd;
      oldCode = prd.code;
    }

    const updatedCatalogue = catalogue.map((p) =>
      p.code.toLowerCase() === oldCode.toLowerCase() ? newProd : p
    );
    setCatalogue(updatedCatalogue);
    // update the currently displayed result list when applicable
    setResultat((prev) => prev.map((p) => (p.code.toLowerCase() === oldCode.toLowerCase() ? newProd : p)));

  }

//
  return (
    <div className="App">
      <header className="App-header">
      <h1>cc1 front end 2024</h1>
 </header>
 
      {/* <OrdinateursCategorieClsComp  fctRecherche={rechercheparCategorie}/>
      <hr></hr>
       
      */}
      <OrdinateursCategorieClsCompBis fonctRech={rechercheparCategorie} />
      <hr></hr>
      <AjouterProduit fctAddPrd={ajouterProduit}/>
      <hr></hr>
       <SupprimerProduit fctDelPrd={supprimerProduit}/>
       <hr></hr>
       <ModifierProduit fctUpdPrd={updateProduit}/>
       <hr></hr>
      <CatalogueCompBis cata={resultat} onDelete={supprimerProduit} onUpdate={updateProduit} />
      {/* <div>
         <ArticleComp  code='D300' nom='DellInspiron300' categorie = 'Ordinateur'prixU ='11000'/>
         <hr></hr> 
        <ArticleComp1  donnees={catalogue[0]}/>
        <hr></hr>
        
         <ArticleComp2  code='D300' nom='DellInspiron300' categorie = 'Ordinateur'prixU ='11000'/>
{
(catalogue.length>0)?<ArticleCompCls donnees={catalogue[0]}/>:null

} */}
         
        
        {/* <hr></hr>
         <ArticleComp1  donnees={obj0}/> */}
        <hr></hr>
        {/* <CatalogueComp cata={resultat}/> */}
      </div>
    // </div>
  );
}

export default App;
