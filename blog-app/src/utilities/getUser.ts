import JWT from 'jsonwebtoken';

export default (token: string): number | null => {
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET || '') as { userId: number}
    return decoded.userId;
  } catch (err) {
    return null
  }
}
