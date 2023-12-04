import React, { useState } from "react";
export default function ProduitAdd() {
    return (
        <>
        <h1 className={"hover-effect"}>Ajouter un produit</h1>
    <div className="card">
        <div className="produit-add">
            <div>
                <form>
                    <input type="text" placeholder={"Nom du produit"} name={"pro-nom"} id={"pro-nom"} />
                    <br/>
                    <textarea type="text" placeholder={"Description du produit"} name={"pro-desc"} id={"pro-desc"} />
                    <br/>
                    <input type="number" placeholder={"Stock "} name={"pro-stock"} id={"pro-stock"} />
                    <br/>
                    <input type="number" placeholder={"Prix d'achat en €"} name={"prix-achat"} id={"prix-achat"} />
                    <br/>
                    <input type="number" placeholder={"Prix vente en €"} name={"prix-vente"} id={"prix-vente"} />
                    <br/>
                    <input type="file" name={"pro-img"} id={"pro-img"}/>
                    <br/>
                    <input className={"button"} type="submit" value={"Ajouter Produit"} />
                </form>
            </div>
        </div>
        </div>
        </>

    )
}