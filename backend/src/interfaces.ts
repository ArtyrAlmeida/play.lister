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
    createdAt: Date | string,
    author: string,
    songs: string[]
}

interface UserInterface {
    _id?: string,
    name: string,
    email: string,
    password: string,
    playlists?: string[],
}

interface LoginInfo {
    email: string,
    password: string,
}


export { SongInterface, UserInterface, LoginInfo, PlaylistInterface };