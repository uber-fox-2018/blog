const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article = new Schema({ 
    title: String,
    content: String,
    category: String,
    // authorId: { type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamps:true     
});


const Article = mongoose.model('Article', article);

module.exports = Article