import { useState } from "react"
import { GiphynderGrid } from "./components/GiphynderGrid"
import { GiphynderInput } from "./components/GiphynderInput"

export const GiphynderApp = () => {

    const [gifsHistory, setGifsHistory] = useState([]);
    const [category, setCategory] = useState('');


    const gifInputValue = (value) => {
        setGifsHistory( [value, ...gifsHistory] );
        setCategory(value);
    }


    return (
        <div className="
            w-full
            h-screen
            text-center
        ">
            
            <div className="
                container
                w-10/12
                mx-auto
            ">

                <h1 className="
                    text-4xl
                    font-bold
                    py-10
                ">
                    Giphynder.jsx
                </h1>

                {/* Input */}
                <GiphynderInput 
                    onNewInputValue={ gifInputValue }
                />

                {/* History gifs */}
                {/* TODO: Hacer condicional el historial */}
                <div className="
                    flex
                    space-x-3
                    text-gray-500
                    my-8
                ">
                    {
                        gifsHistory.map( (gif) => <p key={gif}>{gif}</p> )
                    }
                </div>

                {/* List grid gifs */}
                <GiphynderGrid category={ category } />

            </div>

        </div>
    )
}
