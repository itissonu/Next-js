
import { error } from "console";
import mongoose from 'mongoose';

const URL = process?.env?.MONGODB_URL 

let cached = (global as any).mongoose || { conn: null, promise: null }; //conn will hold the connection to avoid creation of multiple conn

export const connectTodb = async () => {

    if (cached.conn)
        return cached.conn;
    if (!URL )
        throw new Error("Mongo db string is missing");

    try {
        cached.promise = cached?.promise || mongoose.connect(URL, {
            dbName: 'eventapp',
            bufferCommands: false,
        })
        cached.conn = await cached.promise;
        
        return cached.conn;
    } catch (error) {
        console.log( error)
        throw new Error("Database connection error")
    }

}