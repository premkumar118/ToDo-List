import mongoose, {Schema} from "mongoose";

const listSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const List = mongoose.models.List || mongoose.model("List", listSchema)

export default List