function newLinkSubscribe(parent: any, args: any, context: any, info: any) {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node();
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload: any) => {
    return payload;
  },
};

function newVoteSubscribe(parent: any, args: any, context: any, info: any) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node();
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload: any) => {
    return payload;
  },
};

export default {
  newLink,
  newVote,
};
