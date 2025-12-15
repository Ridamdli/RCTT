import React, { Component } from "react";

class ArticleCompCls extends Component {
  constructor(props) {
    super(props);
    //initialiser l'etat
    const objRecu = props.donnees;

    this.state = objRecu; //{ code: objRecu.code, nom: "", categorie: "", prixU: "" };
  }

  //methodes

  //methodes héritées
  componentDidMount() {
    console.log("composant monté");
  }
  componentDidUpdate() {
    console.log("composant modifié");
  }
  componentWillUnmount() {
    console.log("composant demonté");
  }

  render() {
    return (
      <p>
        code:{this.state.code}
        <br></br>
        nom:{this.state.nom}
        <br></br>
        categorie:{this.state.categorie}
        <br></br>
        prix:{this.state.prixU}
        <br></br>
      </p>
    );
  }
}

export default ArticleCompCls;
