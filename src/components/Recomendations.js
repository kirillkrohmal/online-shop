import Recomendation from "./Recomendation";
import { useState, useEffect } from "react";

export default function Recomendations(props) {
    const [recomendations, setRecomendations] = useState([]) 

    useEffect(() => {
        fetch("recomendations.json")
        .then (responce => responce.json())
        .then (array => setRecomendations(array))
    }, [])

    return (
        <>
        <div class="d-flex flex-wrap">
          {
            recomendations.map(el => <Recomendation title={el.title} salary={el.salary} description={el.description}/>)
          }
        </div>
        <div class="d-flex mt-3">
            <button class="btn btn-primary">Показать все</button> 
            <button class="btn btn-primary ms-3">На карте</button> 

        </div>
        </>
    )
}