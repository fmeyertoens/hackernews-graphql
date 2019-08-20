async function feed(root: any, args: any, context: any) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {};
  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });
  const count = await context.prisma.linksConnection({
    where,
  })
    .aggregate()
    .count();
  return {
    links,
    count,
  };
}

function info() {
  return `This is the API of a Hackernews Clone`;
}

export default { feed, info };
