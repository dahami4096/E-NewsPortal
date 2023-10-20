import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },   
},
{
    timestamps: true,
});

export const News = mongoose.model('News', newsSchema);