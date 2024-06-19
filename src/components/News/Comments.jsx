import { COMMENTS_DUMMY_DATA } from "../../assets/dummyData/commentsData";

function Comments() {
  // This component renders a list of comments
  return (
    <div className="comments-cont">
      {COMMENTS_DUMMY_DATA.map((comment, i) => (
        <Comment key={i} userCommentsData={comment} />
      ))}
    </div>
  );
}

export default Comments;

function Comment({ userCommentsData }) {
  // Destructuring data from userCommentsData prop
  const { profPicUrl, username, comment } = userCommentsData;

  return (
    <div className="comment-cont">
      <div className="prof-pic-cont">
        <img src={profPicUrl} alt={username} />
      </div>

      <div className="user-info">
        <p className="username">{username}</p>
        <p className="comment">{comment}</p>
      </div>
    </div>
  );
}
