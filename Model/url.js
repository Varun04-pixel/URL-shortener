import mongoose from "mongoose";

const URLschema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
    },
    shortenID: {
        type: String,
        unique: true
    }
})

const DBmodel = mongoose.model("URLshorten", URLschema);

export default DBmodel;