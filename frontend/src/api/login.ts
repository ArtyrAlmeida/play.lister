import { UserInterface } from "../../interfaces";
import host from "./host";

const loginUser = async (user:UserInterface) => {
    const response = await fetch(`${host}/user/login`, {
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

export {loginUser}