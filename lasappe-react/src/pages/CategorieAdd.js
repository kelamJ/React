import React, { useState } from "react";
export default function CategorieAdd() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <h1 className={"hover-effect"}>Ajouter une catégorie</h1>
            <div className="card">
                <div className={"categorie-add"}>
                    <form>
                        <input type="text" placeholder={"Nom de la catégorie"} name={"cat-nom"} id={"cat-nom"} />
                        <br/>
                        <select name={"cat-parent"} id={"cat-parent"}>
                            <option value={""}>Sélectionner une catégorie</option>
                            <option value={"Homme"}>Homme</option>
                            <option value={"Femme"}>Femme</option>
                        </select>
                        <br/>
                        <textarea type="text" placeholder={"Description de la catégorie"} name={"cat-desc"} id={"cat-desc"} />
                        <br/>
                        <input type="file" name={"cat-img"} id={"cat-img"}/>
                        <img src={file} />
                        <br/>
                        <input className={"button"} type="submit" value={"Ajouter Catégorie"} />
                    </form>
                </div>
            </div>
        </>
    )
}