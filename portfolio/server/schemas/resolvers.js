const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getAllTech: async () => {
      return Tech.find();
    },
    getAllMatchups: async () => {
      return Matchup.find();
    },
    getMatchup: async (parent, { matchupId }) => {
      return Matchup.findOne({ _id: matchupId });
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      return Matchup.create(args);
    },
    createVote: async (parent, args) => {
      return Matchup.findOneAndUpdate(
        { _id: args.id },
        { $inc: { [`tech${args.techNum}_votes`]: 1 } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
