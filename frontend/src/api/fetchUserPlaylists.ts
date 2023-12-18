import host from "./host";

const fetchUserPlaylists = async (id:string) => {
    try {
        const response = await fetch(`${host}/playlist/user/${id}`, {
            method: 'GET',
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

export {fetchUserPlaylists}