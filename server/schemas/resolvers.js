const { Project } = require('../models');

const resolvers = {
  Query: {
    getAllProjects: async () => {
      return Project.find();
    },
  },
};

module.exports = resolvers;
