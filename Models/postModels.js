import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    title: String,
    description: String,
    image: String
})

const PostModel = models.Post || model('Post', PostSchema);

export default PostModel