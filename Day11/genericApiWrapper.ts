// Generic API Wrapper
async function fetchData<T>(url:string): Promise<T> {
    const response = await fetch(url);

    //Check if request was successful
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    //Convert response into JSON
    const data = (await response.json()) as T;

    return data;
}

//Album Interface
interface Album {
    userId: number;
    id: number;
    title: string;
}

//Using the function with URL
async function getAlbum () {
    try {
        const album = await fetchData<Album>(
            "https://jsonplaceholder.typicode.com/albums/1"
        );

        console.log(album);
        console.log("Album Title:" , album.title);
    } catch (error) {
        console.error("Error:" , error)
    }
}

getAlbum();