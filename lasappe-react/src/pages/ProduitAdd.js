import React, { useState } from "react";
export default function ProduitAdd() {
    return (
        <div className="produit-add">
            <h1 className={"h1pro"}>Produits</h1>
            <div>
                <form>
                    <label htmlFor={"pro-nom"}>Nom :</label>
                    <br/>
                    <input type="text" placeholder={"Nom du produit"} name={"pro-nom"} id={"pro-nom"} />
                    <br/>
                    <label htmlFor={"pro-desc"}>Description :</label>
                    <br/>
                    <input type="text" placeholder={"Description du produit"} name={"pro-desc"} id={"pro-desc"} />
                    <br/>
                    <label htmlFor={"pro-img"}>Image produit:</label>
                    <br/>
                    <input type="file" name={"pro-img"} id={"pro-img"}/>
                    <br/>
                    <label htmlFor={"pro-stock"}>Stock produit :</label>
                    <br/>
                    <input type="text" placeholder={"Stock du produit"} name={"pro-stock"} id={"pro-stock"} />
                    <br/>
                    <label htmlFor={"prix-achat"}>Prix d'achat du produit :</label>
                    <br/>
                    <input type="text" placeholder={"Prix d'achat du produit"} name={"prix-achat"} id={"prix-achat"} />
                    <br/>
                    <label htmlFor={"prix-vente"}>Prix d'achat du produit :</label>
                    <br/>
                    <input type="text" placeholder={"Prix vente du produit"} name={"prix-vente"} id={"prix-vente"} />
                    <br/>
                    <input type="submit" value={"Ajouter Catégorie"} />
                </form>
            </div>
        </div>
    )
}