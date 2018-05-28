export const typeDefs = `
    type Blog {
        id: ID!
        headline: String
        content: String
    }
    
    type Query {
        blogs: [Blog]
    }
`;