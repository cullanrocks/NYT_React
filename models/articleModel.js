const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    article: {
        type: String,
        index: {
            unique: true
        },
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    }
})

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
