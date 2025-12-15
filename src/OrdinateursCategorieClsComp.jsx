import React, { Component } from "react";
import CatalogueComp from "./CatalogueComp";

export default class OrdinateursCategorieClsComp extends Component {
  constructor(props) {
    super(props);
    this.state = { mot: "" };
    this.handelChange = this.handelChange.bind(this);
    this.rechercherProduits = props.fctRecherche;
  }
  handelChange(e) {
    this.setState({ mot: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // passer mot à App
    this.rechercherProduits(this.state.mot);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">Categorie:</label>
          <input type="text" placeholder="categorie à chercher" value={this.state.mot} onChange={(e) => this.handelChange(e)} />
          <select name="" id="" onChange={(e) => this.handelChange(e)}>
            <option value="sport">Sport</option>
            <option value="ordinateur">Ordinateur</option>
          </select>
          <input type="submit" value="afficher produits" />
        </form>
        <div></div>
      </div>
    );
  }
}
