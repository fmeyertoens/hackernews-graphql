import { GraphQLServer } from 'graphql-yoga';
import { prisma } from '../src/generated/prisma-client';

import Link from './resolvers/Link';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Vote from './resolvers/Vote';

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Link,
  User,
  Vote,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
