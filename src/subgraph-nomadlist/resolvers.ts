const resolvers = {
  Query: {
    // returns xkcd comic info based on comic number
    Profile: (_, __, { dataSources }) => {
      return dataSources.nomadlistAPI.getProfile();
    },
  },
};

module.exports = resolvers;
