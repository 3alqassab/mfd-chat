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

export type Ad = {
  __typename?: 'Ad';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  titleAr: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type AdCreateInput = {
  image: Scalars['Upload'];
  title: Scalars['String'];
  titleAr: Scalars['String'];
};

export type AdOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type AdUpdateInput = {
  image?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
  titleAr?: InputMaybe<Scalars['String']>;
};

export type AdWhereInput = {
  AND?: InputMaybe<Array<AdWhereInput>>;
  NOT?: InputMaybe<Array<AdWhereInput>>;
  OR?: InputMaybe<Array<AdWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type AdWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AdminMessage = {
  __typename?: 'AdminMessage';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type AdminMessageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isRead?: InputMaybe<OrderDirection>;
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
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  mobile?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
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

export type College = {
  __typename?: 'College';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  majors?: Maybe<Array<Major>>;
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type Connection = {
  __typename?: 'Connection';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
  user1?: Maybe<User>;
  user2?: Maybe<User>;
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
  name?: Maybe<Scalars['String']>;
  nameAr?: Maybe<Scalars['String']>;
  schools?: Maybe<Array<School>>;
  students?: Maybe<Array<Student>>;
  updatedAt: Scalars['Date'];
};

export type GradeCreateInput = {
  name: Scalars['String'];
  nameAr: Scalars['String'];
};

export type GradeOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type GradeUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  nameAr?: InputMaybe<Scalars['String']>;
};

export type GradeWhereInput = {
  AND?: InputMaybe<Array<GradeWhereInput>>;
  NOT?: InputMaybe<Array<GradeWhereInput>>;
  OR?: InputMaybe<Array<GradeWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type GradeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type LiveStream = {
  __typename?: 'LiveStream';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  startTime: Scalars['Date'];
  updatedAt: Scalars['Date'];
  url: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Major = {
  __typename?: 'Major';
  colleges?: Maybe<Array<College>>;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameAr: Scalars['String'];
  schools?: Maybe<Array<School>>;
  students?: Maybe<Array<Student>>;
  subjects?: Maybe<Array<Subject>>;
  type: MajorType;
  updatedAt: Scalars['Date'];
};

export type MajorCreateInput = {
  name: Scalars['String'];
  nameAr: Scalars['String'];
  type: MajorType;
};

export type MajorOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type MajorType =
  | 'SCHOOL'
  | 'UNIVERSITY';

export type MajorUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  nameAr?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<MajorType>;
};

export type MajorWhereInput = {
  AND?: InputMaybe<Array<MajorWhereInput>>;
  NOT?: InputMaybe<Array<MajorWhereInput>>;
  OR?: InputMaybe<Array<MajorWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type MajorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type MessageCreateInput = {
  chatId: Scalars['ID'];
  content: Scalars['Upload'];
  type: ChatMessageType;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminMessageToggleIsRead?: Maybe<AdminMessage>;
  createAd?: Maybe<Ad>;
  createGrade?: Maybe<Grade>;
  createMajor?: Maybe<Major>;
  createSchool?: Maybe<School>;
  createSubject?: Maybe<Subject>;
  createUniversity?: Maybe<University>;
  createUser?: Maybe<User>;
  deleteAd?: Maybe<Ad>;
  deleteAdminMessage?: Maybe<AdminMessage>;
  deleteGrade?: Maybe<Grade>;
  deleteMajor?: Maybe<Major>;
  deleteSchool?: Maybe<School>;
  deleteSubject?: Maybe<Subject>;
  deleteUniversity?: Maybe<University>;
  deleteUser?: Maybe<User>;
  register?: Maybe<Authentication>;
  requestPasswordReset?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Authentication>;
  sendAdminMessage?: Maybe<AdminMessage>;
  sendMessageToChat: ChatMessage;
  updateAd?: Maybe<Ad>;
  updateGrade?: Maybe<Grade>;
  updateMajor?: Maybe<Major>;
  updateMyUser?: Maybe<User>;
  updateSchool?: Maybe<School>;
  updateSubject?: Maybe<Subject>;
  updateUniversity?: Maybe<University>;
  updateUser?: Maybe<User>;
};


export type MutationAdminMessageToggleIsReadArgs = {
  where: AdminMessageWhereUniqueInput;
};


export type MutationCreateAdArgs = {
  data: AdCreateInput;
};


export type MutationCreateGradeArgs = {
  data: GradeCreateInput;
};


export type MutationCreateMajorArgs = {
  data: MajorCreateInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateSubjectArgs = {
  data: SubjectCreateInput;
};


export type MutationCreateUniversityArgs = {
  data: UniversityCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAdArgs = {
  where: AdWhereUniqueInput;
};


export type MutationDeleteAdminMessageArgs = {
  where: AdminMessageWhereUniqueInput;
};


export type MutationDeleteGradeArgs = {
  where: GradeWhereUniqueInput;
};


export type MutationDeleteMajorArgs = {
  where: MajorWhereUniqueInput;
};


export type MutationDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteSubjectArgs = {
  where: SubjectWhereUniqueInput;
};


export type MutationDeleteUniversityArgs = {
  where: UniversityWhereUniqueInput;
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


export type MutationUpdateAdArgs = {
  data: AdUpdateInput;
  where: AdWhereUniqueInput;
};


export type MutationUpdateGradeArgs = {
  data: GradeUpdateInput;
  where: GradeWhereUniqueInput;
};


export type MutationUpdateMajorArgs = {
  data: MajorUpdateInput;
  where: MajorWhereUniqueInput;
};


export type MutationUpdateMyUserArgs = {
  data: MyUserUpdateInput;
};


export type MutationUpdateSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateSubjectArgs = {
  data: SubjectUpdateInput;
  where: SubjectWhereUniqueInput;
};


export type MutationUpdateUniversityArgs = {
  data: UniversityUpdateInput;
  where: UniversityWhereUniqueInput;
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

export type Notification = {
  __typename?: 'Notification';
  connection?: Maybe<Connection>;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  liveStream?: Maybe<LiveStream>;
  type?: Maybe<NotificationType>;
  updatedAt: Scalars['Date'];
};

export type NotificationOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type NotificationType =
  | 'CONNECTION'
  | 'LIVE';

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  id?: InputMaybe<IdFilter>;
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
  ad?: Maybe<Ad>;
  adminMessage?: Maybe<AdminMessage>;
  adminMessages: Array<AdminMessage>;
  adminMessagesCount?: Maybe<Scalars['Int']>;
  ads: Array<Ad>;
  adsCount?: Maybe<Scalars['Int']>;
  chats: Array<Chat>;
  chatsCount?: Maybe<Scalars['Int']>;
  checkEmail?: Maybe<Scalars['Boolean']>;
  grade?: Maybe<Grade>;
  grades: Array<Grade>;
  gradesCount?: Maybe<Scalars['Int']>;
  login?: Maybe<Authentication>;
  major?: Maybe<Major>;
  majors: Array<Major>;
  majorsCount?: Maybe<Scalars['Int']>;
  myUser?: Maybe<User>;
  school?: Maybe<School>;
  schools: Array<School>;
  schoolsCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<Subject>;
  subjects: Array<Subject>;
  subjectsCount?: Maybe<Scalars['Int']>;
  universities: Array<University>;
  universitiesCount?: Maybe<Scalars['Int']>;
  university?: Maybe<University>;
  user?: Maybe<User>;
  users: Array<User>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryAdArgs = {
  where: AdWhereUniqueInput;
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


export type QueryAdsArgs = {
  orderBy?: InputMaybe<Array<AdOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdWhereInput>;
};


export type QueryAdsCountArgs = {
  where?: InputMaybe<AdWhereInput>;
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


export type QueryGradeArgs = {
  where: GradeWhereUniqueInput;
};


export type QueryGradesArgs = {
  orderBy?: InputMaybe<Array<GradeOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GradeWhereInput>;
};


export type QueryGradesCountArgs = {
  where?: InputMaybe<GradeWhereInput>;
};


export type QueryLoginArgs = {
  data: LoginInput;
};


export type QueryMajorArgs = {
  where: MajorWhereUniqueInput;
};


export type QueryMajorsArgs = {
  orderBy?: InputMaybe<Array<MajorOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MajorWhereInput>;
};


export type QueryMajorsCountArgs = {
  where?: InputMaybe<MajorWhereInput>;
};


export type QuerySchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type QuerySchoolsArgs = {
  orderBy?: InputMaybe<Array<SchoolOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QuerySchoolsCountArgs = {
  where?: InputMaybe<SchoolWhereInput>;
};


export type QuerySubjectArgs = {
  where: SubjectWhereUniqueInput;
};


export type QuerySubjectsArgs = {
  orderBy?: InputMaybe<Array<SubjectOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubjectWhereInput>;
};


export type QuerySubjectsCountArgs = {
  where?: InputMaybe<SubjectWhereInput>;
};


export type QueryUniversitiesArgs = {
  orderBy?: InputMaybe<Array<UniversityOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UniversityWhereInput>;
};


export type QueryUniversitiesCountArgs = {
  where?: InputMaybe<UniversityWhereInput>;
};


export type QueryUniversityArgs = {
  where: UniversityWhereUniqueInput;
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

export type SchoolCreateInput = {
  gradesIds?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
  nameAr: Scalars['String'];
};

export type SchoolOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type SchoolUpdateInput = {
  gradesIds?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  nameAr?: InputMaybe<Scalars['String']>;
};

export type SchoolWhereInput = {
  AND?: InputMaybe<Array<SchoolWhereInput>>;
  NOT?: InputMaybe<Array<SchoolWhereInput>>;
  OR?: InputMaybe<Array<SchoolWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nameAr?: InputMaybe<StringNullableFilter>;
};

export type SchoolWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  collegeId?: InputMaybe<Scalars['ID']>;
  gradeId?: InputMaybe<Scalars['ID']>;
  level: Level;
  majorId?: InputMaybe<Scalars['ID']>;
  schoolId?: InputMaybe<Scalars['ID']>;
  universityId?: InputMaybe<Scalars['ID']>;
};

export type Subject = {
  __typename?: 'Subject';
  classes?: Maybe<Array<Class>>;
  createdAt: Scalars['Date'];
  createdBy?: Maybe<Organization>;
  educators?: Maybe<Array<Educator>>;
  id: Scalars['ID'];
  level: SubjectLevel;
  major?: Maybe<Major>;
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  year?: Maybe<Scalars['Int']>;
};

export type SubjectCreateInput = {
  createdById?: InputMaybe<Scalars['ID']>;
  level: SubjectLevel;
  majorId?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  nameAr: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type SubjectLevel =
  | 'SCHOOl'
  | 'UNIVERSITY';

export type SubjectOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type SubjectUpdateInput = {
  createdById?: InputMaybe<Scalars['ID']>;
  level?: InputMaybe<SubjectLevel>;
  majorId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  nameAr?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type SubjectWhereInput = {
  AND?: InputMaybe<Array<SubjectWhereInput>>;
  NOT?: InputMaybe<Array<SubjectWhereInput>>;
  OR?: InputMaybe<Array<SubjectWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type SubjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chat: Chat;
  chats: Array<Chat>;
  notifications: Array<Notification>;
};


export type SubscriptionChatArgs = {
  where: ChatWhereUniqueInput;
};

export type University = {
  __typename?: 'University';
  colleges?: Maybe<Array<College>>;
  createdAt: Scalars['Date'];
  educators?: Maybe<Array<Educator>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nameAr?: Maybe<Scalars['String']>;
  students?: Maybe<Array<Student>>;
  subjects?: Maybe<Array<Subject>>;
  updatedAt: Scalars['Date'];
};

export type UniversityCreateInput = {
  collegesIds?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
  nameAr: Scalars['String'];
};

export type UniversityOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type UniversityUpdateInput = {
  collegesIds?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  nameAr?: InputMaybe<Scalars['String']>;
};

export type UniversityWhereInput = {
  AND?: InputMaybe<Array<UniversityWhereInput>>;
  NOT?: InputMaybe<Array<UniversityWhereInput>>;
  OR?: InputMaybe<Array<UniversityWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nameAr?: InputMaybe<StringNullableFilter>;
};

export type UniversityWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  connections?: Maybe<Array<Connection>>;
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
  Ad: ResolverTypeWrapper<AdModel>;
  AdCreateInput: AdCreateInput;
  AdOrderByInput: AdOrderByInput;
  AdUpdateInput: AdUpdateInput;
  AdWhereInput: AdWhereInput;
  AdWhereUniqueInput: AdWhereUniqueInput;
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
  College: ResolverTypeWrapper<Omit<College, 'majors'> & { majors?: Maybe<Array<ResolversTypes['Major']>> }>;
  Connection: ResolverTypeWrapper<ConnectionModel>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Educator: ResolverTypeWrapper<EducatorModel>;
  EducatorRegistrationInput: EducatorRegistrationInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Gender: Gender;
  Grade: ResolverTypeWrapper<GradeModel>;
  GradeCreateInput: GradeCreateInput;
  GradeOrderByInput: GradeOrderByInput;
  GradeUpdateInput: GradeUpdateInput;
  GradeWhereInput: GradeWhereInput;
  GradeWhereUniqueInput: GradeWhereUniqueInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilter: IdFilter;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Level: Level;
  LiveStream: ResolverTypeWrapper<LiveStream>;
  LoginInput: LoginInput;
  Major: ResolverTypeWrapper<Omit<Major, 'colleges' | 'schools' | 'students' | 'subjects'> & { colleges?: Maybe<Array<ResolversTypes['College']>>, schools?: Maybe<Array<ResolversTypes['School']>>, students?: Maybe<Array<ResolversTypes['Student']>>, subjects?: Maybe<Array<ResolversTypes['Subject']>> }>;
  MajorCreateInput: MajorCreateInput;
  MajorOrderByInput: MajorOrderByInput;
  MajorType: MajorType;
  MajorUpdateInput: MajorUpdateInput;
  MajorWhereInput: MajorWhereInput;
  MajorWhereUniqueInput: MajorWhereUniqueInput;
  MessageCreateInput: MessageCreateInput;
  Mutation: ResolverTypeWrapper<{}>;
  MyUserUpdateInput: MyUserUpdateInput;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Notification: ResolverTypeWrapper<NotificationModel>;
  NotificationOrderByInput: NotificationOrderByInput;
  NotificationType: NotificationType;
  NotificationWhereInput: NotificationWhereInput;
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
  SchoolCreateInput: SchoolCreateInput;
  SchoolOrderByInput: SchoolOrderByInput;
  SchoolUpdateInput: SchoolUpdateInput;
  SchoolWhereInput: SchoolWhereInput;
  SchoolWhereUniqueInput: SchoolWhereUniqueInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringNullableFilter: StringNullableFilter;
  Student: ResolverTypeWrapper<StudentModel>;
  StudentRegistrationInput: StudentRegistrationInput;
  Subject: ResolverTypeWrapper<SubjectModel>;
  SubjectCreateInput: SubjectCreateInput;
  SubjectLevel: SubjectLevel;
  SubjectOrderByInput: SubjectOrderByInput;
  SubjectUpdateInput: SubjectUpdateInput;
  SubjectWhereInput: SubjectWhereInput;
  SubjectWhereUniqueInput: SubjectWhereUniqueInput;
  Subscription: ResolverTypeWrapper<{}>;
  University: ResolverTypeWrapper<UniversityModel>;
  UniversityCreateInput: UniversityCreateInput;
  UniversityOrderByInput: UniversityOrderByInput;
  UniversityUpdateInput: UniversityUpdateInput;
  UniversityWhereInput: UniversityWhereInput;
  UniversityWhereUniqueInput: UniversityWhereUniqueInput;
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
  Ad: AdModel;
  AdCreateInput: AdCreateInput;
  AdOrderByInput: AdOrderByInput;
  AdUpdateInput: AdUpdateInput;
  AdWhereInput: AdWhereInput;
  AdWhereUniqueInput: AdWhereUniqueInput;
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
  College: Omit<College, 'majors'> & { majors?: Maybe<Array<ResolversParentTypes['Major']>> };
  Connection: ConnectionModel;
  Date: Scalars['Date'];
  Educator: EducatorModel;
  EducatorRegistrationInput: EducatorRegistrationInput;
  Float: Scalars['Float'];
  Grade: GradeModel;
  GradeCreateInput: GradeCreateInput;
  GradeOrderByInput: GradeOrderByInput;
  GradeUpdateInput: GradeUpdateInput;
  GradeWhereInput: GradeWhereInput;
  GradeWhereUniqueInput: GradeWhereUniqueInput;
  ID: Scalars['ID'];
  IDFilter: IdFilter;
  Int: Scalars['Int'];
  LiveStream: LiveStream;
  LoginInput: LoginInput;
  Major: Omit<Major, 'colleges' | 'schools' | 'students' | 'subjects'> & { colleges?: Maybe<Array<ResolversParentTypes['College']>>, schools?: Maybe<Array<ResolversParentTypes['School']>>, students?: Maybe<Array<ResolversParentTypes['Student']>>, subjects?: Maybe<Array<ResolversParentTypes['Subject']>> };
  MajorCreateInput: MajorCreateInput;
  MajorOrderByInput: MajorOrderByInput;
  MajorUpdateInput: MajorUpdateInput;
  MajorWhereInput: MajorWhereInput;
  MajorWhereUniqueInput: MajorWhereUniqueInput;
  MessageCreateInput: MessageCreateInput;
  Mutation: {};
  MyUserUpdateInput: MyUserUpdateInput;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Notification: NotificationModel;
  NotificationOrderByInput: NotificationOrderByInput;
  NotificationWhereInput: NotificationWhereInput;
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
  SchoolCreateInput: SchoolCreateInput;
  SchoolOrderByInput: SchoolOrderByInput;
  SchoolUpdateInput: SchoolUpdateInput;
  SchoolWhereInput: SchoolWhereInput;
  SchoolWhereUniqueInput: SchoolWhereUniqueInput;
  String: Scalars['String'];
  StringNullableFilter: StringNullableFilter;
  Student: StudentModel;
  StudentRegistrationInput: StudentRegistrationInput;
  Subject: SubjectModel;
  SubjectCreateInput: SubjectCreateInput;
  SubjectOrderByInput: SubjectOrderByInput;
  SubjectUpdateInput: SubjectUpdateInput;
  SubjectWhereInput: SubjectWhereInput;
  SubjectWhereUniqueInput: SubjectWhereUniqueInput;
  Subscription: {};
  University: UniversityModel;
  UniversityCreateInput: UniversityCreateInput;
  UniversityOrderByInput: UniversityOrderByInput;
  UniversityUpdateInput: UniversityUpdateInput;
  UniversityWhereInput: UniversityWhereInput;
  UniversityWhereUniqueInput: UniversityWhereUniqueInput;
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

export type AdResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Ad'] = ResolversParentTypes['Ad']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  titleAr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminMessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminMessage'] = ResolversParentTypes['AdminMessage']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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

export type CollegeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['College'] = ResolversParentTypes['College']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  majors?: Resolver<Maybe<Array<ResolversTypes['Major']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user1?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  user2?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
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
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schools?: Resolver<Maybe<Array<ResolversTypes['School']>>, ParentType, ContextType>;
  students?: Resolver<Maybe<Array<ResolversTypes['Student']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveStreamResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LiveStream'] = ResolversParentTypes['LiveStream']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MajorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Major'] = ResolversParentTypes['Major']> = {
  colleges?: Resolver<Maybe<Array<ResolversTypes['College']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schools?: Resolver<Maybe<Array<ResolversTypes['School']>>, ParentType, ContextType>;
  students?: Resolver<Maybe<Array<ResolversTypes['Student']>>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['Subject']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MajorType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  adminMessageToggleIsRead?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<MutationAdminMessageToggleIsReadArgs, 'where'>>;
  createAd?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationCreateAdArgs, 'data'>>;
  createGrade?: Resolver<Maybe<ResolversTypes['Grade']>, ParentType, ContextType, RequireFields<MutationCreateGradeArgs, 'data'>>;
  createMajor?: Resolver<Maybe<ResolversTypes['Major']>, ParentType, ContextType, RequireFields<MutationCreateMajorArgs, 'data'>>;
  createSchool?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<MutationCreateSchoolArgs, 'data'>>;
  createSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationCreateSubjectArgs, 'data'>>;
  createUniversity?: Resolver<Maybe<ResolversTypes['University']>, ParentType, ContextType, RequireFields<MutationCreateUniversityArgs, 'data'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  deleteAd?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationDeleteAdArgs, 'where'>>;
  deleteAdminMessage?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<MutationDeleteAdminMessageArgs, 'where'>>;
  deleteGrade?: Resolver<Maybe<ResolversTypes['Grade']>, ParentType, ContextType, RequireFields<MutationDeleteGradeArgs, 'where'>>;
  deleteMajor?: Resolver<Maybe<ResolversTypes['Major']>, ParentType, ContextType, RequireFields<MutationDeleteMajorArgs, 'where'>>;
  deleteSchool?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<MutationDeleteSchoolArgs, 'where'>>;
  deleteSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationDeleteSubjectArgs, 'where'>>;
  deleteUniversity?: Resolver<Maybe<ResolversTypes['University']>, ParentType, ContextType, RequireFields<MutationDeleteUniversityArgs, 'where'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  register?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'data'>>;
  requestPasswordReset?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRequestPasswordResetArgs, 'data'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'data'>>;
  sendAdminMessage?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<MutationSendAdminMessageArgs, 'data'>>;
  sendMessageToChat?: Resolver<ResolversTypes['ChatMessage'], ParentType, ContextType, RequireFields<MutationSendMessageToChatArgs, 'data'>>;
  updateAd?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<MutationUpdateAdArgs, 'data' | 'where'>>;
  updateGrade?: Resolver<Maybe<ResolversTypes['Grade']>, ParentType, ContextType, RequireFields<MutationUpdateGradeArgs, 'data' | 'where'>>;
  updateMajor?: Resolver<Maybe<ResolversTypes['Major']>, ParentType, ContextType, RequireFields<MutationUpdateMajorArgs, 'data' | 'where'>>;
  updateMyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateMyUserArgs, 'data'>>;
  updateSchool?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<MutationUpdateSchoolArgs, 'data' | 'where'>>;
  updateSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationUpdateSubjectArgs, 'data' | 'where'>>;
  updateUniversity?: Resolver<Maybe<ResolversTypes['University']>, ParentType, ContextType, RequireFields<MutationUpdateUniversityArgs, 'data' | 'where'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
};

export type NotificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  connection?: Resolver<Maybe<ResolversTypes['Connection']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liveStream?: Resolver<Maybe<ResolversTypes['LiveStream']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  ad?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<QueryAdArgs, 'where'>>;
  adminMessage?: Resolver<Maybe<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<QueryAdminMessageArgs, 'where'>>;
  adminMessages?: Resolver<Array<ResolversTypes['AdminMessage']>, ParentType, ContextType, RequireFields<QueryAdminMessagesArgs, 'skip' | 'take' | 'where'>>;
  adminMessagesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryAdminMessagesCountArgs, 'where'>>;
  ads?: Resolver<Array<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<QueryAdsArgs, 'skip' | 'take' | 'where'>>;
  adsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryAdsCountArgs, 'where'>>;
  chats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryChatsArgs, 'skip' | 'take' | 'where'>>;
  chatsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryChatsCountArgs, 'where'>>;
  checkEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryCheckEmailArgs, 'data'>>;
  grade?: Resolver<Maybe<ResolversTypes['Grade']>, ParentType, ContextType, RequireFields<QueryGradeArgs, 'where'>>;
  grades?: Resolver<Array<ResolversTypes['Grade']>, ParentType, ContextType, RequireFields<QueryGradesArgs, 'skip' | 'take' | 'where'>>;
  gradesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryGradesCountArgs, 'where'>>;
  login?: Resolver<Maybe<ResolversTypes['Authentication']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'data'>>;
  major?: Resolver<Maybe<ResolversTypes['Major']>, ParentType, ContextType, RequireFields<QueryMajorArgs, 'where'>>;
  majors?: Resolver<Array<ResolversTypes['Major']>, ParentType, ContextType, RequireFields<QueryMajorsArgs, 'skip' | 'take' | 'where'>>;
  majorsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryMajorsCountArgs, 'where'>>;
  myUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  school?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<QuerySchoolArgs, 'where'>>;
  schools?: Resolver<Array<ResolversTypes['School']>, ParentType, ContextType, RequireFields<QuerySchoolsArgs, 'skip' | 'take' | 'where'>>;
  schoolsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QuerySchoolsCountArgs, 'where'>>;
  subject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<QuerySubjectArgs, 'where'>>;
  subjects?: Resolver<Array<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<QuerySubjectsArgs, 'skip' | 'take' | 'where'>>;
  subjectsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QuerySubjectsCountArgs, 'where'>>;
  universities?: Resolver<Array<ResolversTypes['University']>, ParentType, ContextType, RequireFields<QueryUniversitiesArgs, 'skip' | 'take' | 'where'>>;
  universitiesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryUniversitiesCountArgs, 'where'>>;
  university?: Resolver<Maybe<ResolversTypes['University']>, ParentType, ContextType, RequireFields<QueryUniversityArgs, 'where'>>;
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
  classes?: Resolver<Maybe<Array<ResolversTypes['Class']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  educators?: Resolver<Maybe<Array<ResolversTypes['Educator']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['SubjectLevel'], ParentType, ContextType>;
  major?: Resolver<Maybe<ResolversTypes['Major']>, ParentType, ContextType>;
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
  notifications?: SubscriptionResolver<Array<ResolversTypes['Notification']>, "notifications", ParentType, ContextType>;
};

export type UniversityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['University'] = ResolversParentTypes['University']> = {
  colleges?: Resolver<Maybe<Array<ResolversTypes['College']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  educators?: Resolver<Maybe<Array<ResolversTypes['Educator']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameAr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  students?: Resolver<Maybe<Array<ResolversTypes['Student']>>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['Subject']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  connections?: Resolver<Maybe<Array<ResolversTypes['Connection']>>, ParentType, ContextType>;
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
  Ad?: AdResolvers<ContextType>;
  AdminMessage?: AdminMessageResolvers<ContextType>;
  Authentication?: AuthenticationResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  ChatMessage?: ChatMessageResolvers<ContextType>;
  Class?: ClassResolvers<ContextType>;
  College?: CollegeResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Educator?: EducatorResolvers<ContextType>;
  Grade?: GradeResolvers<ContextType>;
  LiveStream?: LiveStreamResolvers<ContextType>;
  Major?: MajorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
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