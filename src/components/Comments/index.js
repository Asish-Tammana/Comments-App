import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comment extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  NameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  commentInput = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  addComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({
      commentsList: filteredList,
    })
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <div>
            <h1>Comment</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.addComment}>
              <input
                value={name}
                type="text"
                placeholder="Your Name"
                onChange={this.NameInput}
              />
              <br />
              <textarea
                value={comment}
                placeholder="Your Comment"
                cols="50"
                rows="10"
                onChange={this.commentInput}
              >
                {null}
              </textarea>
              <button type="submit" onClick={this.addComment}>
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <p className="comments-heading">{commentsList.length}</p>
        <h1>Comments</h1>

        <ul className="comments-container">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
              nameLogoClassName={
                initialContainerBackgroundClassNames[
                  Math.ceil(Math.random() * 10) %
                    initialContainerBackgroundClassNames.length
                ]
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comment
