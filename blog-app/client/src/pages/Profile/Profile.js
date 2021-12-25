import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import AddPostModal from "../../components/AddPostModal/AddPostModal";
import Post from "../../components/Post/Post";

const GET_PROFILE = gql`
  query Profile($profileUserId: ID!) {
    profile(profileUserId: $profileUserId) {
      userErrors {
        message
      }
      profile {
        bio
        isMyProfile
        user {
          id
          name
          email
          posts {
            id
            title
            content
            createdAt
            published
          }
        }
      }
    }
  }
`

export default function Profile() {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: {
      profileUserId: id,
    },
  });

  if (error) return <div>error page</div>;

  if (loading) return <div>Spinner...</div>;

  const { profile: { userErrors, profile } } = data;

  if (!profile) return <div>{userErrors.length ? userErrors[0].message : ''}</div>;

  return (
    <div>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex ",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>{profile.user.name}</h1>
          <p>{profile.bio}</p>
        </div>
        <div>{profile.isMyProfile ? <AddPostModal /> : null}</div>
      </div>
      <div>
        { profile.user.posts.map(post => (
          <Post
            {...post}
            user={profile.user.name}
            isMyProfile={profile.isMyProfile}
            key={post.id}
          />)
        )}
      </div>
    </div>
  );
}
