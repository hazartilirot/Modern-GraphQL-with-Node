import React from "react";
import "./Post.css";
import { gql, useMutation } from "@apollo/client";

const PUBLISH_POST = gql`
  mutation Mutation($postId: ID!, $published: Boolean!) {
    postPublish(postId: $postId, published: $published) {
      userErrors {
        message
      }
      post {
        published
      }
    }
  }
`;

export default ({
  title,
  content,
  createdAt,
  user,
  published,
  id,
  isMyProfile,
}) => {
  const [postPublish, { data, loading }] = useMutation(PUBLISH_POST);
  
  const formatedDate = new Date(+createdAt);

  return (
    <div
      className="Post"
      style={ !published ? { backgroundColor: 'hotpink' } : {} }
    >
      {isMyProfile && (
        <p
          className="Post__publish"
          onClick={() => postPublish({
              variables: {
                postId: id,
                published: !published
             },
          })}
        >
          { !published ? 'publish' : 'unpublish' }
        </p>
      )}
      <div className="Post__header-container">
        <h2>{title}</h2>
        <h4>
          Created At {`${formatedDate}`.split(' ').splice(0, 3).join(' ')} by{' '}
          {user}
        </h4>
      </div>
      <p>{content}</p>
    </div>
  );
}
