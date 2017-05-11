const mongoose = require('mongoose');


const blogPostSchema = mongoose.Schema({
  title: {type: String},
  content: {type: String},
  author: {
    firstName: {type: String},
    lastName: {type: String}
  },
  created: {type: String}
});

blogPostSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

blogPostSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorName,
    created: this.created
  };
}

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {BlogPost};
