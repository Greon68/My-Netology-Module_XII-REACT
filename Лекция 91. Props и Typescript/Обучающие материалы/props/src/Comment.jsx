import Avatar from "./Avatar";
import formatDate from "./formData";


// function Comment(props) {
function Comment({comment}) {
    // console.log (props)
    // console.log (props.comment.text)
    // console.log (props.people)
    // console.log (props.people.name)
    console.log (comment)
    return (
      <div className="Comment">
        <div className="UserInfo">
          {/* <img className="Avatar"
            src={comment.author.avatarUrl}
          /> */}
          <Avatar user={comment.author} /> 
          <div className="UserInfo-name">
            {comment.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {comment.text}
        </div> 
        <div className="Comment-date">
        {formatDate(comment.date)}
      </div>  
      </div>

    );

  }

  export default Comment