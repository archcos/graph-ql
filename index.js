import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// data
import db from './_db.js'

// types
import { typeDefs } from './schema.js'

// resolvers
const resolvers = {
  Query: {
    posts() {
      return db.posts
    },
    post(_, args) {
      return db.posts.find((post) => post.id === args.id)
    },
    users() {
      return db.users
    },
    user(_, args) {
      return db.users.find((user) => user.id === args.id)
    },
    comments() {
      return db.comments
    },
    comment(_, args) {
      return db.comments.find((comment) => comment.id === args.id)
    }
  },
  Post: {
    comments(parent) {
      return db.comments.filter((r) => r.post_id === parent.id)
    }
  },
  Comment: {
    user(parent) {
      return db.users.find((a) => a.id === parent.user_id)
    },
    post(parent) {
      return db.posts.find((g) => g.id === parent.post_id)
    }
  },
  User: {
    comments(parent) {
      return db.comments.filter((r) => r.user_id === parent.id)
    }
  },
  Mutation: {
    addPost(_, args) {
      let post = {
        ...args.post, 
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.posts.push(post)

      return post
    },
    deletePost(_, args) {
      db.posts = db.posts.filter((g) => g.id !== args.id)

      return db.posts
    },
    updatePost(_, args) {
      db.posts = db.posts.map((g) => {
        if (g.id === args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return db.posts.find((g) => g.id === args.id)
    }
  }
}

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at: ${url}`)