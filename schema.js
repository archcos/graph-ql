export const typeDefs = `#graphql
    type Post {
    id: ID!
    title: String!
    comments: [Comment!]
    }
    type Comment {
    id: ID!
    content: String!
    user: User!
    post: Post!
    }
    type User {
    id: ID!
    name: String!
    comments: [Comment!]
    }
    type Query {
    posts: [Post]
    post(id: ID!): Post
    comments: [Comment]
    comment(id: ID!): Comment
    users: [User]
    user(id: ID!): User
    }
    type Mutation {
    addPost(post: AddPostInput!): Post
    deletePost(id: ID!): [Post]
    updatePost(id: ID!, edits: EditPostInput): Post
    } 
    input AddPostInput {
    title: String!
    }
    input EditPostInput {
    title: String
    }
`