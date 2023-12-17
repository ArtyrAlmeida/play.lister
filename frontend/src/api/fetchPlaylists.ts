import host from "./host";

const fetchPlaylists = async () => {
    try {
        const response = await fetch(`${host}/playlist/`, {
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

export {fetchPlaylists}