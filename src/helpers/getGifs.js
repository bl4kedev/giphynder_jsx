export const getGifs = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4FYZ32p79MoNNEKnYXmnYZFmpJXX9FvI&q=${category}&limit=10`);
    const { data } = await resp.json();
    const gifs = data.map( (gif) => ({
        id: gif.id,
        title: gif.title || 'Sin titulo..',
        url: gif.images['fixed_height'].url
    }));

    return gifs;
}