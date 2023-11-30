import React, { useState } from "react";
export default function CategorieAdd() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="categorie-add">
            <h1 className={"h1cat"}>Catégories</h1>
            <div>
                <form>
                    <label htmlFor={"cat-nom"}>Nom :</label>
                    <br/>
                    <input type="text" placeholder={"Nom de la catégorie"} name={"cat-nom"} id={"cat-nom"} />
                    <br/>
                    <label htmlFor={"cat-parent"}>Catégorie parent :</label>
                    <br/>
                    <select name={"cat-parent"} id={"cat-parent"}>
                        <option value={""}>Sélectionner une catégorie</option>
                        <option value={"Homme"}>Homme</option>
                        <option value={"Femme"}>Femme</option>
                    </select>
                    <br/>
                    <label htmlFor={"cat-desc"}>Description :</label>
                    <br/>
                    <input type="text" placeholder={"Description de la catégorie"} name={"cat-desc"} id={"cat-desc"} />
                    <br/>
                    <label htmlFor={"cat-img"}>Image catégorie:</label>
                    <br/>
                    <input type="file" name={"cat-img"} id={"cat-img"}/>
                    <img src={file} />
                    <br/>
                    <input type="submit" value={"Ajouter Catégorie"} />
                </form>
            </div>
        </div>
    )
}