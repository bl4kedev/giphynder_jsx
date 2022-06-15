export const gifFetch = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4FYZ32p79MoNNEKnYXmnYZFmpJXX9FvI&q=${category}&limit=12`);
    const {data} = await resp.json();
    const gifs = data.map( ({id, title, images}) => ( { id, title, url: images.downsized_medium.url} ));

    console.log(gifs);

    return gifs;
}