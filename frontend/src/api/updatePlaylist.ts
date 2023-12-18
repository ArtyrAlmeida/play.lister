import host from "./host";

const updatePlaylist = async (id:any, payload:any) => {
    try {
        const response = await fetch(`${host}/playlist/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
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

export {updatePlaylist}