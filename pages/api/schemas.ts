import { gql } from "apollo-server-micro";

export const typeDefs = gql`
type Session {
  id: ID!
  users: [User]!
}

type User {
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
  getSession(id: ID!): Session!
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
  createSession(name: String): ID!
  joinSession(sessionId: ID!): ID! #user id
  updateUser(sessionId: ID!, userId: ID!, user: UserInput!): ID!,
}
`