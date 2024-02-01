import ConnectMongoose from "../../../Utils/ConnectMongo";
import PostModel from "../../../Models/postModels";

export async function GET(){
    try{
        await ConnectMongoose();
        const PostData = await PostModel.find({});
        Response.json(PostData)
    } catch (error){
        return Response.json("{message: error.message}")
    }
    
}