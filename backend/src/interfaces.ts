interface SongInterface {
    _id?: string,
    name: string,
    launchDate: string,
    description: string,
    author: string,
}

interface PlaylistInterface {
    _id?: string,
    name: string,
    description: string,
    created_at: string,
    author: string,
    songs: SongInterface[]
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