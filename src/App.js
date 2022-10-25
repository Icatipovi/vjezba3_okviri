import React from "react";
import { ReactDOM } from "react";
import App from ".index/src"
import React, { useState } from 'react'
import Poruka from './components/Poruka'
import Footer from "./components/Footer";



const App = (props) => {
    const [poruke, postaviPoruke] = useState(props.poruke)

    const [unosPoruke, postaviUnos] = useState('unesi poruku...')


    const [ispisSve, postaviIspis] = useState(true)

    const porukeZaIspis = ispisSve
        //ako je ovo true izvrsi poruku
        ? poruke
        //ako nije true filtriraj
        : poruke.filter(poruka => poruka.vazno === true)



    const novaPoruka = (e) => {
        e.preventDefault()
        console.log('Klik', e.target)
        //dodajemo objhekt
        const noviObjekt = {
            id: poruke.length + 1,
            sadrzaj: unosPoruke,
            datum: new Date().toISOString(),
            vazno: Math.random() > 0.5
        }
        //koristimo concat umjsto oush jer on stvara novi niz i dodaje mu promjenu a push mjenja postojeci
        postaviPoruke(poruke.concat(noviObjekt))
        postaviUnos('')
        //promjena unosa
        const promjenaUnosa = (e) => {
            console.log(e.target.value);
            postaviUnos(e.target.value)
        }

    }
    return (
        <div>
            <h1>Poruke</h1>
            <div>
                <button onClick={() => postaviIspis(!ispisSve)}>
                    Prikaži {ispisSve ? "važne" : "sve"}
                </button>
            </div>
            <ul>
                {porukeZaIspis.map(p =>
                    <Poruka key={p.id} poruka={p} />
                )}
            </ul>
            <form onSubmit={novaPoruka}>
                <input />
                <button type='submit'>Spremi</button>
            </form>
        </div>
    )
}

