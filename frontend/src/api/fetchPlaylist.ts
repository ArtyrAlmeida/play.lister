import host from "./host";

const fetchSpecificPlaylist = async (id:string) => {
    try {
        const response = await fetch(`${host}/playlist/${id}`, {
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

export {fetchSpecificPlaylist}