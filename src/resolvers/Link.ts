function postedBy(parent: any, args: any, context: any) {
  return context.prisma.link({ id: parent.id }).postedBy();
}

function votes(parent: any, args: any, context: any) {
  return context.prisma.link({ id: parent.id }).votes();
}

export default {
  postedBy,
  votes,
};
