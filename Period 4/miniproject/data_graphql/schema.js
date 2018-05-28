const {resolvers} = require("./resolvers");
const {makeExecutableSchema} = require("graphql-tools");

const typeDefs = `
    type Blog {
        id: ID
        headline: String
        content: String
        likes: [Like]
    }
    
    type Like {
        userName: String
    }
    
    input BlogInput {
        id: ID
        headline: String
        content: String
        likes: [LikeInput]
    }
    
    input LikeInput {
        userName: String
    }
    
    type Query {
        getOneBlog(id: ID!): Blog        
        getAllBlogs(limit: Int, sortField: String, sortOrder: String): [Blog]
    }
    
    type Mutation {
        createBlog(input: BlogInput): Blog
        deleteBlog(id: ID!): String
        updateBlog(input: BlogInput): Blog
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = {schema};