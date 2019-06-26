import { GraphQLServer } from 'graphql-yoga';

const links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL',
}];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  // the following trivial Link resolvers can be omitted
  Link: {
    id: (parent: any) => parent.id,
    description: ({ description = '' }) => description,
    url: (parent: any) => parent.url,
  },
  Mutation: {
    post: (parent: any, { description, url }: any) => {
      const link = {
        id: `link-${idCount++}`,
        description,
        url,
      };
      links.push(link);
      return link;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
