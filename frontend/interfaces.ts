interface UserInterface {
    _id?: string,
    email: string,
    password: string,
    songs?: string[],
}

interface InputCamps {
    label: string
}

export { UserInterface, InputCamps }