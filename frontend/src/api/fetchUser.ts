import host from "./host";

const fetchUser = async (id: string) => {
    try {
        const response = await fetch(`${host}/user/${id}`, {
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

export {fetchUser}