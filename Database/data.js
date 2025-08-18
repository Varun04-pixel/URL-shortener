import mongoose from "mongoose";

export default async function connectToDB() {
    await mongoose.connect(process.env.DB_pass)
    console.log("Connected to Database")
}