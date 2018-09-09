import mongooseSchema = require('mongoose')


const schema = mongooseSchema.Schema
const blogSchema = new schema({
    title:String,
    story:String,
    imageUrl: String,
})

module.exports = mongooseSchema.model('blog', blogSchema,'blogs')

