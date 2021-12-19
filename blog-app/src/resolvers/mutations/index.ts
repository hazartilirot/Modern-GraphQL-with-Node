import postResolvers from './postResolvers';
import authResolvers from './authResolvers';

export default {
  ...postResolvers,
  ...authResolvers
}