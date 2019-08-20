import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Link = {
  __typename?: "Link";
  id: Scalars["ID"];
  description: Scalars["String"];
  url: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  post: Link;
  updateLink?: Maybe<Link>;
  deleteLink?: Maybe<Link>;
};

export type MutationPostArgs = {
  url: Scalars["String"];
  description: Scalars["String"];
};

export type MutationUpdateLinkArgs = {
  id: Scalars["ID"];
  url?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type MutationDeleteLinkArgs = {
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  info: Scalars["String"];
  feed: Array<Link>;
  link?: Maybe<Link>;
};

export type QueryLinkArgs = {
  id: Scalars["ID"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Link: ResolverTypeWrapper<Link>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars["String"];
  Link: Link;
  ID: Scalars["ID"];
  Mutation: {};
  Boolean: Scalars["Boolean"];
};

export type LinkResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Link"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  post?: Resolver<
    ResolversTypes["Link"],
    ParentType,
    ContextType,
    MutationPostArgs
  >;
  updateLink?: Resolver<
    Maybe<ResolversTypes["Link"]>,
    ParentType,
    ContextType,
    MutationUpdateLinkArgs
  >;
  deleteLink?: Resolver<
    Maybe<ResolversTypes["Link"]>,
    ParentType,
    ContextType,
    MutationDeleteLinkArgs
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Query"]
> = {
  info?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  feed?: Resolver<Array<ResolversTypes["Link"]>, ParentType, ContextType>;
  link?: Resolver<
    Maybe<ResolversTypes["Link"]>,
    ParentType,
    ContextType,
    QueryLinkArgs
  >;
};

export type Resolvers<ContextType = any> = {
  Link?: LinkResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
