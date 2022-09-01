import Authentication from '../resolvers/authentication'
import Chat from '../resolvers/chat'
import Merge from 'lodash/merge'
import User from '../resolvers/user'

const resolvers = Merge(Authentication, User, Chat)

export default resolvers
