import host from "./host";

const fetchPlaylistSongs = async (id: string) => {
    try {
        const response = await fetch(`${host}/playlist/songs/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if(response.ok) {
            const json = response.json();
            return json;
        }
    
        return [];
    } catch (error) {
        return [];
    }
};

export {fetchPlaylistSongs}