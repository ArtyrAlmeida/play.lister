import mongoose from "mongoose";
import { SongInterface } from "../interfaces";

const Schema = mongoose.Schema;

const songSchema = new Schema<SongInterface>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    launchDate: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Song = mongoose.model("songs", songSchema);

export default Song;