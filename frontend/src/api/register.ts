import { UserInterface } from "../../interfaces";
import host from "./host";

const registerUser = async (user: any) => {
    console.log(user)
    const response = await fetch(`${host}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response)
    if(response.ok) {
        const json = response.json();
        return json;
    }

    return null;
};

export {registerUser}