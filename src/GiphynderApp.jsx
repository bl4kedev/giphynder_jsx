import { useState } from "react"
import { GiphynderInput } from "./components/GiphynderInput"
import { GiphynderGrid } from "./components/GiphynderGrid"
import { GiphynderFooter } from "./components/GiphynderFooter";

export const GiphynderApp = () => {

    const [gifsCategories, setGifsCategories] = useState([]);

    const gifInputValue = (value) => {
        setGifsCategories( [value, ...gifsCategories] );
    }


    return (
        <>
        
            <div className="
                w-full
                min-h-screen
                text-center
            ">

                <div className="
                    bg-blue-900
                    w-full
                    h-48
                    absolute
                    -z-10
                    rounded-b-3xl
                "></div>

                <div className="
                    container
                    w-11/12
                    mx-auto
                ">

                    <h1 className="
                        text-4xl
                        font-bold
                        py-10
                        text-white
                    ">
                        Giphynder.jsx
                    </h1>

                    <GiphynderInput 
                        onNewInputValue={ gifInputValue }
                    />

                    {
                        gifsCategories.map((category) => <GiphynderGrid key={category} category={category} /> )
                    }
                </div>
            </div>
            <GiphynderFooter />
        </>
    )
}
