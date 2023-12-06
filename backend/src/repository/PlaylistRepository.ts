import { PlaylistInterface } from '../interfaces';
import Playlist from '../models/Playlist';

export default class PlaylistRepository {
    async create(playlist: PlaylistInterface) {
        const createdPlaylist = await Playlist.create({...playlist});
        
        return createdPlaylist;
    }

    async find() {
        const result = await Playlist.find();

        return result;
    }

    async findOne(id: string) {
        const result = await Playlist.findOne({ _id: id });
        
        return result;
    }

    async updateOne(id: string, payload: object) {
        const result = await Playlist.updateOne({ _id: id }, { $set: payload });

        return result;
    }

    async deleteOne(id: string) {
        const result = await Playlist.deleteOne({ _id: id });

        return result;
    }
}