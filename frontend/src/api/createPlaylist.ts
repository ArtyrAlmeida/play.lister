import host from "./host";

const fetchPlaylists = async (data:any) => {
    try {
        const response = await fetch(`${host}/playlist/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
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