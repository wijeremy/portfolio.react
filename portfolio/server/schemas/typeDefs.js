const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    id: Number
    name: String
    img: String
    github: String
    action: String
    desc: String
  }

  type Query {
    getAllProjects: [Project]
  }
`;

module.exports = typeDefs;
