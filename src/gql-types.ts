import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as UserModel, Connection as ConnectionModel, Notification as NotificationModel, Wallet as WalletModel, Purchase as PurchaseModel, Grade as GradeModel, School as SchoolModel, University as UniversityModel, Student as StudentModel, Educator as EducatorModel, Organization as OrganizationModel, Subject as SubjectModel, ClassQuestion as ClassQuestionModel, ClassAnswer as ClassAnswerModel, ClassResource as ClassResourceModel, ClassChapterContent as ClassChapterContentModel, ClassChapter as ClassChapterModel, Class as ClassModel, Ad as AdModel, PostComment as PostCommentModel, Post as PostModel, Message as MessageModel, Token as TokenModel, Chat as ChatModel, ChatMessage as ChatMessageModel } from '@prisma/client';
import { Context } from './context';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Null: any;
  NullableID: null | string;
  NullableString: null | string;
  Upload: any;
};

export type AdminMessage = {
  __typename?: 'AdminMessage';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type AdminMessageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type AdminMessageSendInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
};

export type AdminMessageWhereInput = {
  AND?: InputMaybe<Array<AdminMessageWhereInput>>;
  NOT?: InputMaybe<Array<AdminMessageWhereInput>>;
  OR?: InputMaybe<Array<AdminMessageWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type AdminMessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ArrayNullableFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Authentication = {
  __typename?: 'Authentication';
  token?: Maybe<Scalars['String']>;
  user: User;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isGroup: Scalars['Boolean'];
  members: Array<User>;
  messages: Array<ChatMessage>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};


export type ChatMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat: Chat;
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  sender?: Maybe<User>;
  type: ChatMessageType;
  updatedAt: Scalars['Date'];
};

export type ChatMessageType =
  | 'MEDIA'
  | 'TEXT';

export type ChatOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type ChatWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CheckEmailInput = {
  email: Scalars['String'];
};

export type Class = {
  __typename?: 'Class';
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  educator?: Maybe<Educator>;
  endTime: Scalars['Date'];
  id: Scalars['ID'];
  points: Scalars['Int'];
  price: Scalars['Float'];
  startTime: Scalars['Date'];
  subject?: Maybe<Subject>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  timings?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['Date'];
  users?: Maybe<Array<User>>;
};

export type Educator = {
  __typename?: 'Educator';
  active?: Maybe<Scalars['Boolean']>;
  classes?: Maybe<Array<Class>>;
  cprUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  cvUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subjects?: Maybe<Array<Subject>>;
  university?: Maybe<University>;
  updatedAt: Scalars['Date'];
};

export type EducatorRegistrationInput = {
  cpr: Scalars['Upload'];
  cv: Scalars['Upload'];
  universityId?: InputMaybe<Scalars['ID']>;
};

export type Gender =
  | 'FEMALE'
  | 'MALE';

export type Grade = {
  __typename?: 'Grade';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  schools?: Maybe<Array<School>>;
  students?: Maybe<Array<Student>>;
  updatedAt: Scalars['Date'];
};

export type IdFilter = {
  contains?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Level =
  | 'OTHER'
  | 'SCHOOL'
  | 'UNIVERSITY';

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MessageCreateInput = {
  chatId: Scalars['ID'];
  content: Scalars['Upload'];
  type: ChatMessageType;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminMessageToggleIsRead?: Maybe<AdminMessage>;
  createUser?: Maybe<User>;
  deleteAdminMessage?: Maybe<AdminMessage>;
  deleteUser?: Maybe<User>;
  register?: Maybe<Authentication>;
  requestPasswordReset?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Authentication>;
  sendAdminMessage?: Maybe<AdminMessage>;
  sendMessageToChat: ChatMessage;
  updateMyUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationAdminMessageToggleIsReadArgs = {
  where: AdminMessageWhereUniqueInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAdminMessageArgs = {
  where: AdminMessageWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationRegisterArgs = {
  data: RegistrationInput;
};


export type MutationRequestPasswordResetArgs = {
  data: RequestPasswordResetInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationSendAdminMessageArgs = {
  data: AdminMessageSendInput;
};


export type MutationSendMessageToChatArgs = {
  data: MessageCreateInput;
};


export type MutationUpdateMyUserArgs = {
  data: MyUserUpdateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MyUserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type OrderDirection =
  | 'asc'
  | 'desc';

export type Organization = {
  __typename?: 'Organization';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type Purchase = {
  __typename?: 'Purchase';
  class?: Maybe<Class>;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  points?: Maybe<Scalars['Int']>;
  transactionId: Scalars['Int'];
  type: PurchaseType;
  updatedAt: Scalars['Date'];
  wallet: Wallet;
};

export type PurchaseType =
  | 'CLASS'
  | 'POINTS';

export type Query = {
  __typename?: 'Query';
  adminMessage?: Maybe<AdminMessage>;
  adminMessages: Array<AdminMessage>;
  adminMessagesCount?: Maybe<Scalars['Int']>;
  chats: Array<Chat>;
  chatsCount?: Maybe<Scalars['Int']>;
  checkEmail?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Authentication>;
  myUser?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<User>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryAdminMessageArgs = {
  where: AdminMessageWhereUniqueInput;
};


export type QueryAdminMessagesArgs = {
  orderBy?: InputMaybe<Array<AdminMessageOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminMessageWhereInput>;
};


export type QueryAdminMessagesCountArgs = {
  where?: InputMaybe<AdminMessageWhereInput>;
};


export type QueryChatsArgs = {
  orderBy?: InputMaybe<Array<ChatOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryChatsCountArgs = {
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryCheckEmailArgs = {
  data: CheckEmailInput;
};


export type QueryLoginArgs = {
  data: LoginInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type RefreshTokenInput = {
  token: Scalars['String'];
};

export type RegistrationInput = {
  educator?: InputMaybe<EducatorRegistrationInput>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  password: Scalars['String'];
  student?: InputMaybe<StudentRegistrationInput>;
};

export type RelationshipNullableFilter = {
  id?: InputMaybe<Scalars['ID']>;
  is?: InputMaybe<Scalars['Null']>;
  isNot?: InputMaybe<Scalars['Null']>;
};

export type RequestPasswordResetInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type School = {
  __typename?: 'School';
  createdAt: Scalars['Date'];
  grades?: Maybe<Array<Grade>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Student>>;
  subjects?: Maybe<Array<Subject>>;
  updatedAt: Scalars['Date'];
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  batch?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  grade?: Maybe<Grade>;
  id: Scalars['ID'];
  level: Level;
  major?: Maybe<Scalars['String']>;
  school?: Maybe<School>;
  university?: Maybe<University>;
  updatedAt: Scalars['Date'];
};

export type StudentRegistrationInput = {
  batch?: InputMaybe<Scalars['String']>;
  gradeId?: InputMaybe<Scalars['ID']>;
  level: Level;
  major?: InputMaybe<Scalars['String']>;
  schoolId?: InputMaybe<Scalars['ID']>;
};

export type Subject = {
  __typename?: 'Subject';
  createdAt: Scalars['Date'];
  createdBy?: Maybe<Organization>;
  id: Scalars['ID'];
  level: SubjectLevel;
  major?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  year?: Maybe<Scalars['Int']>;
};

export type SubjectLevel =
  | 'SCHOOl'
  | 'UNIVERSITY';

export type Subscription = {
  __typename?: 'Subscription';
  chat: Chat;
  chats: Array<Chat>;
};


export type SubscriptionChatArgs = {
  where: ChatWhereUniqueInput;
};

export type University = {
  __typename?: 'University';
  createdAt: Scalars['Date'];
  educators?: Maybe<Array<Educator>>;
  id: Scalars['ID'];
  majors?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  stundents?: Maybe<Array<Student>>;
  subjects?: Maybe<Array<Subject>>;
  updatedAt: Scalars['Date'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  educator?: Maybe<Educator>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
  student?: Maybe<Student>;
  updatedAt: Scalars['Date'];
  wallet: Wallet;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserRole>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
};

export type UserRole =
  | 'ADMIN'
  | 'EDUCATOR'
  | 'STUDENT';

export type UserRoleNullableFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<UserRoleNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  points: Scalars['Int'];
  purchases?: Maybe<Array<Purchase>>;
  updatedAt: Scalars['Date'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdminMessage: ResolverTypeWrapper<AdminMessage>;
  AdminMessageOrderByInput: AdminMessageOrderByInput;
  AdminMessageSendInput: AdminMessageSendInput;
  AdminMessageWhereInput: AdminMessageWhereInput;
  AdminMessageWhereUniqueInput: AdminMessageWhereUniqueInput;
  ArrayNullableFilter: ArrayNullableFilter;
  Authentication: ResolverTypeWrapper<Omit<Authentication, 'user'> & { user: ResolversTypes['User'] }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chat: ResolverTypeWrapper<ChatModel>;
  ChatMessage: ResolverTypeWrapper<ChatMessageModel>;
  ChatMessageType: ChatMessageType;
  ChatOrderByInput: ChatOrderByInput;
  ChatWhereInput: ChatWhereInput;
  ChatWhereUniqueInput: ChatWhereUniqueInput;
  CheckEmailInput: CheckEmailInput;
  Class: ResolverTypeWrapper<ClassModel>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Educator: ResolverTypeWrapper<EducatorModel>;
  EducatorRegistrationInput: EducatorRegistrationInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Gender: Gender;
  Grade: ResolverTypeWrapper<GradeModel>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilter: IdFilter;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Level: Level;
  LoginInput: LoginInput;
  MessageCreateInput: MessageCreateInput;
  Mutation: ResolverTypeWrapper<{}>;
  MyUserUpdateInput: MyUserUpdateInput;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Null: ResolverTypeWrapper<Scalars['Null']>;
  NullableID: ResolverTypeWrapper<Scalars['NullableID']>;
  NullableString: ResolverTypeWrapper<Scalars['NullableString']>;
  OrderDirection: OrderDirection;
  Organization: ResolverTypeWrapper<OrganizationModel>;
  Purchase: ResolverTypeWrapper<PurchaseModel>;
  PurchaseType: PurchaseType;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  RefreshTokenInput: RefreshTokenInput;
  RegistrationInput: RegistrationInput;
  RelationshipNullableFilter: RelationshipNullableFilter;
  RequestPasswordResetInput: RequestPasswordResetInput;
  ResetPasswordInput: ResetPasswordInput;
  School: ResolverTypeWrapper<SchoolModel>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringNullableFilter: StringNullableFilter;
  Student: ResolverTypeWrapper<StudentModel>;
  StudentRegistrationInput: StudentRegistrationInput;
  Subject: ResolverTypeWrapper<SubjectModel>;
  SubjectLevel: SubjectLevel;
  Subscription: ResolverTypeWrapper<{}>;
  University: ResolverTypeWrapper<UniversityModel>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<UserModel>;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRole: UserRole;
  UserRoleNullableFilter: UserRoleNullableFilter;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Wallet: ResolverTypeWrapper<WalletModel>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdminMessage: AdminMessage;
  AdminMessageOrderByInput: AdminMessageOrderByInput;
  AdminMessageSendInput: AdminMessageSendInput;
  AdminMessageWhereInput: AdminMessageWhereInput;
  AdminMessageWhereUniqueInput: AdminMessageWhereUniqueInput;
  ArrayNullableFilter: ArrayNullableFilter;
  Authentication: Omit<Authentication, 'user'> & { user: ResolversParentTypes['User'] };
  Boolean: Scalars['Boolean'];
  Chat: ChatModel;
  ChatMessage: ChatMessageModel;
  ChatOrderByInput: ChatOrderByInput;
  ChatWhereInput: ChatWhereInput;
  ChatWhereUniqueInput: ChatWhereUniqueInput;
  CheckEmailInput: CheckEmailInput;
  Class: ClassModel;
  Date: Scalars['Date'];
  Educator: EducatorModel;
  EducatorRegistrationInput: EducatorRegistrationInput;
  Float: Scalars['Float'];
  Grade: GradeModel;
  ID: Scalars['ID'];
  IDFilter: IdFilter;
  Int: Scalars['Int'];
  LoginInput: LoginInput;
  MessageCreateInput: MessageCreateInput;
  Mutation: {};
  MyUserUpdateInput: MyUserUpdateInput;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Null: Scalars['Null'];
  NullableID: Scalars['NullableID'];
  NullableString: Scalars['NullableString'];
  Organization: OrganizationModel;
  Purchase: PurchaseModel;
  Query: {};
  RefreshTokenInput: RefreshTokenInput;
  RegistrationInput: RegistrationInput;
  RelationshipNullableFilter: RelationshipNullableFilter;
  RequestPasswordResetInput: RequestPasswordResetInput;
  ResetPasswordInput: ResetPasswordInput;
  School: SchoolModel;
  String: Scalars['String'];
  StringNullableFilter: StringNullableFilter;
  Student: StudentModel;
  StudentRegistrationInput: StudentRegistrationInput;
  Subject: SubjectModel;
  Subscription: {};
  University: UniversityModel;
  Upload: Scalars['Upload'];
  User: UserModel;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRoleNullableFilter: UserRoleNullableFilter;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Wallet: WalletModel;
};

export type AdminMessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminMessage'] = ResolversParentTypes['AdminMessage']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mobile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Authentication'] = ResolversParentTypes['Authentication']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isGroup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['ChatMessage']>, ParentType, ContextType, RequireFields<ChatMessagesArgs, 'skip' | 'take' | 'where'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatMessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ChatMessage'] = ResolversParentTypes['ChatMessage']> = {
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ChatMessageType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  educator?: Resolver<Maybe<ResolversTypes['Educator']>, ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timings?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EducatorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Educator'] = ResolversParentTypes['Educator']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  classes?: Resolver<Maybe<Array<ResolversTypes['Class']>>, ParentType, ContextType>;
  cprUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  cvUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['Subject']>>, ParentType, ContextType>;
  university?: Resolver<Maybe<ResolversTypes['University']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GradeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Grade'] = ResolversParentTypes['Grade']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schools?: Resolver<Maybe<Array<ResolversTypes['School']>>, ParentType, ContextType>;
  students?: Resolver<Maybe<Array<ResolversTypes['Student']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  adminMessageToggleIsRead?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<MutationAdminMessageToggleIsReadArgs, 'where'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  deleteAdminMessage?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<MutationDeleteAdminMessageArgs, 'where'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  register?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'data'>>;
  requestPasswordReset?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRequestPasswordResetArgs, 'data'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'data'>>;
  sendAdminMessage?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<MutationSendAdminMessageArgs, 'data'>>;
  sendMessageToChat?: Resolver<ResolversTypes['ChatMessage'], ParentType, ContextType, RequireFields<MutationSendMessageToChatArgs, 'data'>>;
  updateMyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateMyUserArgs, 'data'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
};

export interface NullScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Null'], any> {
  name: 'Null';
}

export interface NullableIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NullableID'], any> {
  name: 'NullableID';
}

export interface NullableStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NullableString'], any> {
  name: 'NullableString';
}

export type OrganizationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PurchaseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Purchase'] = ResolversParentTypes['Purchase']> = {
  class?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transactionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PurchaseType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  adminMessage?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<QueryAdminMessageArgs, 'where'>>;
  adminMessages?: Resolver<Array<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<QueryAdminMessagesArgs, 'skip' | 'take' | 'where'>>;
  adminMessagesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryAdminMessagesCountArgs, 'where'>>;
  chats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryChatsArgs, 'skip' | 'take' | 'where'>>;
  chatsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryChatsCountArgs, 'where'>>;
  checkEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryCheckEmailArgs, 'data'>>;
  login?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'data'>>;
  myUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'skip' | 'take' | 'where'>>;
  usersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryUsersCountArgs, 'where'>>;
};

export type SchoolResolvers<ContextType = Context, ParentType extends ResolversParentTypes['School'] = ResolversParentTypes['School']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  grades?: Resolver<Maybe<Array<ResolversTypes['Grade']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  students?: Resolver<Maybe<Array<ResolversTypes['Student']>>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['Subject']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']> = {
  batch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  grade?: Resolver<Maybe<ResolversTypes['Grade']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Level'], ParentType, ContextType>;
  major?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  school?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType>;
  university?: Resolver<Maybe<ResolversTypes['University']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubjectResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Subject'] = ResolversParentTypes['Subject']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['SubjectLevel'], ParentType, ContextType>;
  major?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  chat?: SubscriptionResolver<ResolversTypes['Chat'], "chat", ParentType, ContextType, RequireFields<SubscriptionChatArgs, 'where'>>;
  chats?: SubscriptionResolver<Array<ResolversTypes['Chat']>, "chats", ParentType, ContextType>;
};

export type UniversityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['University'] = ResolversParentTypes['University']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  educators?: Resolver<Maybe<Array<ResolversTypes['Educator']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  majors?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stundents?: Resolver<Maybe<Array<ResolversTypes['Student']>>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['Subject']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  educator?: Resolver<Maybe<ResolversTypes['Educator']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mobile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  student?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purchases?: Resolver<Maybe<Array<ResolversTypes['Purchase']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AdminMessage?: AdminMessageResolvers<ContextType>;
  Authentication?: AuthenticationResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  ChatMessage?: ChatMessageResolvers<ContextType>;
  Class?: ClassResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Educator?: EducatorResolvers<ContextType>;
  Grade?: GradeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Null?: GraphQLScalarType;
  NullableID?: GraphQLScalarType;
  NullableString?: GraphQLScalarType;
  Organization?: OrganizationResolvers<ContextType>;
  Purchase?: PurchaseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  School?: SchoolResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  Subject?: SubjectResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  University?: UniversityResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
};


export type RequestPasswordResetMutationVariables = Exact<{
  data: RequestPasswordResetInput;
}>;


export type RequestPasswordResetMutation = { __typename?: 'Mutation', requestPasswordReset?: boolean | null };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'Authentication', token?: string | null } | null };

export type RegisterMutationVariables = Exact<{
  data: RegistrationInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'Authentication', token?: string | null, user: { __typename?: 'User', id: string, role: UserRole } } | null };

export type LoginQueryVariables = Exact<{
  data: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Authentication', token?: string | null, user: { __typename?: 'User', id: string, role: UserRole } } | null };


export const RequestPasswordResetDocument = gql`
    mutation RequestPasswordReset($data: RequestPasswordResetInput!) {
  requestPasswordReset(data: $data)
}
    `;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, options);
      }
export type RequestPasswordResetMutationHookResult = ReturnType<typeof useRequestPasswordResetMutation>;
export type RequestPasswordResetMutationResult = Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data) {
    token
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegistrationInput!) {
  register(data: $data) {
    user {
      id
      role
    }
    token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    query Login($data: LoginInput!) {
  login(data: $data) {
    token
    user {
      id
      role
    }
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;