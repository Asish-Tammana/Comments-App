/* eslint-disable react/no-unknown-property */
import './index.css'

const CommentItem = props => {
  const {commentDetails, nameLogoClassName, toggleLike, deleteComment} = props
  const {id, name, comment, isLiked, time} = commentDetails

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleLike(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="top-comment-container">
        <p className={`user-letter-logo ${nameLogoClassName}`}>S</p>
        <div className="comment-content-container">
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p>{time}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button type="button" className="like-container" onClick={onClickLike}>
          <img className="like-icon" src={likeImg} alt="like" />
          <p>LIKE</p>
        </button>
        <button type="button" onClick={onDeleteComment} testid="delete">
          <img
            className="like-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
