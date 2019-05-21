import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import ReviewsComponent from "./components/reviewsComponent/reviews.jsx"
import SearchReviewsComponent from "./components/searchComponent/search.jsx"
// import ReviewsSortComponent from "./components/ReviewsSortComponent.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data:[],
      searchData: [],
      popUp: false
    }
    this.popUp = this.popUp.bind(this)
    this.popDown = this.popDown.bind(this)
    this.getAllData = this.getAllData.bind(this)
    this.searchReviews = this.searchReviews.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  clearSearch () {
    this.setState({
      searchData: []
    })
  }

  searchReviews (searchTerm) {
    let results = []
    this.state.data.forEach(function (reviewData) {
      if (reviewData.Body.includes(searchTerm)){
        results.push(reviewData)
      } else if (reviewData.Header.includes(searchTerm)){
        results.push(reviewData)
      }
    })
    this.setState({
      searchData: results.length ? results : "empty"
    })
  }

  getAllData () {
    axios.get('/reviews')
    .then((results)=>{
      console.log('setting state to results',results)
      this.setState({
        data:results.data
      })
    })
    .catch((err)=>{
      console.log('error getting data',err)
    })
  }

  popUp () {
    this.setState({
      popUp: true
    })
  }

  popDown () {
    this.setState({
      popUp: false
    })
  }

  componentDidMount() {
    this.getAllData()
  }
  //need to fix the state
  render () {
    let data;
    this.state.searchData.length ? data = this.state.searchData : data = this.state.data;
    return (
      <div className="page-component">
        <SearchReviewsComponent search={this.searchReviews}/>
        { typeof data === "string" && 
        <div className="no-results-search">No results found. <b>Try</b> removing a filter, changing your search, or 
        <span onClick={this.clearSearch} className="clear-all on-click"> clear all </span> 
        to read reviews.</div>}
        { typeof data === "object" && 
        data.slice(0,10).map((reviewData)=>{
          return (
            <div onClick={this.state.popUp ? this.popDown : ''} className="review-container"> 
              {/* <ReviewsSortComponent/> */}
              <ReviewsComponent reviewData={reviewData} popUp={this.popUp} popUpStatus={this.state.popUp}/>  
            </div>
          )
        })}
      </div>
    )
  }
 }

 ReactDOM.render(<App/>,document.getElementById('app'))