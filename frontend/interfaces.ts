interface UserInterface {
    _id?: string,
    email: string,
    password: string,
    songs?: string[],
}

interface PlaylistInterface {
    _id?: string,
    name: string,
    description: string,
    createdAt: string,
    author: string,
    songs: string[]
}

interface InputCamps {
    label: string
}

export { UserInterface, InputCamps, PlaylistInterface }