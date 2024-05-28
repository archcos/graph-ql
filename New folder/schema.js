export const typeDefs =`#graphql
    type Users{
    id: ID!
    name: String!
    address: String!
    age: Int!
    } 
    type Posts{
    id: ID!
    title: String!
    post: String!
    }
    type Comments{
    id: ID!
    comment: String!
    
    }
`
//int, float, string, boolean, ID