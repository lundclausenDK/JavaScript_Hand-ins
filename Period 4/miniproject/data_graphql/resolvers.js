//const mongoose = require('mongoose');
const {Blogs} = require("./dbConnector");

// Resolver map
const resolvers = {
    Query: {

        getAllBlogs: () => Blogs.find(),

        getOneBlog: (root, {id}) => {
            return new Promise((resolve, object) => {
                Blogs.findById(id, (err, blog) => {
                    if (err) reject(err)
                    else resolve(blog)
                })
            })
        }
    },
    Mutation: {
        createBlog: (root, {input}) => {
            const newBlog = new Blogs({
                headline: input.headline,
                content: input.content,
                likes: input.likes
            });

            newBlog.id = newBlog._id;

            return new Promise((resolve, object) => {
                newBlog.save((err) => {
                    if (err) reject(err)
                    else resolve(newBlog)
                })
            })
        },

        deleteBlog: (root, {id}) => {
            return new Promise((resolve, object) => {
                Blogs.remove({_id: id}, (err) => {
                    if (err) reject(err)
                    else resolve("Successfully deleted blogpost");
                })
            })
        },

        updateBlog: (root, {input}) => {
            return new Promise((resolve, object) => {
                Blogs.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, blog) => {
                    if (err) reject(err)
                    else resolve(blog)
                })
            })
        }

    }
};

module.exports = {resolvers};