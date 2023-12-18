interface UserInterface {
    _id?: string,
    name: string,
    email: string,
    password: string,
    playlists?: string[],
}

interface SongInterface {
    _id?: string,
    name: string,
    length: string,
    description: string,
    author: string,
}

interface PlaylistInterface {
    _id?: string,
    name: string,
    description: string,
    createdAt?: string,
    author: string,
    songs: string[]
}

interface Error {
    error: boolean,
    message: string
}


interface InputCamps {
    label: string
}

export { UserInterface, InputCamps, PlaylistInterface, SongInterface, Error }