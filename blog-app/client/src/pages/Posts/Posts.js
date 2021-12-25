import React from 'react';
import Post from '../../components/Post/Post';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      content
      createdAt
      user {
        name
      }
    }
  }
`;

export default () => {
  
  const { loading, error, data } = useQuery(GET_POSTS)
  
  return error ? (
    <div>Error</div>
  ) : loading ? (
    <div>Loading</div>
  ) : (
    <div>
      { data.posts.map(p => (
        <Post {...p} user={p.user.name} key={p.id} />
      ))}
    </div>
  );
};
