import React, { Component } from "react";
import CatalogueComp from "./CatalogueComp";

export default class OrdinateursCategorieClsCompBis extends Component {
  constructor(props) {
    super(props);
    this.state = { mot: "" };

    this.handelChange = this.handelChange.bind(this);
    this.rechercherProduits = props.fonctRech;
    this.handelChangeCheck = this.handelChangeCheck.bind(this);
  }
  handelChange(e) {
    this.setState({ ...this.state, mot: e.target.value });
  }
  handelChangeCheck(e) {
    // if (e.target.checked) {
    //   this.setState({ ...this.state, mot: "" });
    // }
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
          {/* <input type="submit" value="afficher produits" disabled={this.state.mot===""} /> */}
          <input type="submit" value="afficher produits" />
          <input type="checkbox" name="" id="" onChange={(e) => this.handelChangeCheck(e)} />
          Afficher Tout
        </form>
        <div></div>
      </div>
    );
  }
}
