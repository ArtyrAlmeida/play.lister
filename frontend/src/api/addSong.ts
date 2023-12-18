import host from "./host";

const addSong = async (data:any) => {
    try {
        const response = await fetch(`${host}/songs/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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

export {addSong}