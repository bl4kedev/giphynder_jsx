import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetch = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

        // Ejecuta un efecto si los valores de la lista de dependencia cambia
        // Sino tiene valor, solo se ejecutara 1 vez.
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}
