import mongoose from "mongoose";
import { PlaylistInterface } from "../interfaces";
import Song from "./Song";

const Schema = mongoose.Schema;

const plalistSchema = new Schema<PlaylistInterface>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    songs: {
        type: [Song],
        required: true,
    }
});

const Plalist = mongoose.model("songs", plalistSchema);

export default Plalist;