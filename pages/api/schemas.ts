import { gql } from "apollo-server-micro";

export const typeDefs = gql`
type Session {
  id: ID!
  users: [User]!
}

type User {
  id: ID!
  name: String!
  stats: UserStats!
}

type UserStats {
  searches: Int!
  emailsSent: Int!
  emailsReceived: Int!
  emailsStored: Int!
  instagramPics: Int!
  snapchatPics: Int!
  gamesMinutes: Int!
  youtubeMinutes: Int!
  netflixMinutes: Int!
}

type Query {
  getSession(sessionId: ID!): Session,
  getUser(userId: ID!): User,
}

input UserInput {
  name: String!
  stats: UserStatsInput!
}

input UserStatsInput {
  searches: Int!
  emailsSent: Int!
  emailsReceived: Int!
  emailsStored: Int!
  instagramPics: Int!
  snapchatPics: Int!
  gamesMinutes: Int!
  youtubeMinutes: Int!
  netflixMinutes: Int!
}

type Mutation {
  createSession(name: String!): ID!
  createUser(name: String!, sessionId: ID!): User! #user id
  joinSession(sessionId: ID!, userId: ID!): ID! #user id
  updateUser(userId: ID!, user: UserInput!): ID!,
}
`