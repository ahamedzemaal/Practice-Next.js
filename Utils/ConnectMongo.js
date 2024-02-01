// Code for Database Connection

import mongoose from "mongoose";

const ConnectMongoose = async () => mongoose.connect(process.env.MONGO_DB)