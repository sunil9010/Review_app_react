// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeList: 0}

  onUpArrow = () => {
    const {activeList} = this.state
    const {reviewsList} = this.props
    if (activeList < reviewsList.length - 1) {
      this.setState(prevState => ({activeList: prevState.activeList + 1}))
    }
  }

  getTheProfile = selectedProfile => {
    const {imgUrl, username, companyName, description} = selectedProfile
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onDownArrow = () => {
    const {activeList} = this.state
    if (activeList > 0) {
      this.setState(prevState => ({activeList: prevState.activeList - 1}))
    }
  }

  render() {
    const {activeList} = this.state
    const {reviewsList} = this.props
    const selectedProfile = reviewsList[activeList]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onDownArrow}
            className="arrow-button "
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getTheProfile(selectedProfile)}
          <button
            type="button"
            onClick={this.onUpArrow}
            className="arrow-button "
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
