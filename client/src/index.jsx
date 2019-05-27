import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import ReviewsComponent from "./components/reviewsComponent/reviews.jsx"
import SearchReviewsComponent from "./components/searchComponent/search.jsx"
import ReviewsSortComponent from "./components/sortComponent/sortContainer.jsx"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data:[],
      filteredData: [],
      searchedData: [],
      searchTerm: "",
      popUp: false,
      dateFilter: [],
      travelerTypeFilter: [],
      languageFilter: []
    }
    this.popUp = this.popUp.bind(this)
    this.popDown = this.popDown.bind(this)
    this.getAllData = this.getAllData.bind(this)
    this.searchReviews = this.searchReviews.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
    this.filterData = this.filterData.bind(this)
  }

  clearSearch () {
    this.setState({
      searchedData: []
    })
  }

  updateFilter (date,travelerType,language) {
    this.setState((state)=>{
      return {
        "dateFilter": date ? date : state.dateFilter,
        "travelerTypeFilter": travelerType ? travelerType : state.travelerTypeFilter,
        "languageFilter": language ? language : state.languageFilter
      }
    })
  }

  filterData () {
    let results = []
    let data = this.state.searchedData.length ? this.state.searchedData : this.state.data
    if (this.state.dateFilter.length || this.state.travelerTypeFilter.length || this.state.languageFilter.length){
      results = data.filter((review) => {
        return (
          (this.state.dateFilter.length ? this.state.dateFilter.includes(review.Date.split(" ")[0]) : true)
          && 
          (this.state.travelerTypeFilter.length ? this.state.travelerTypeFilter.includes(review.Traveler_Type) : true)
          && 
          (this.state.languageFilter.length ? this.state.languageFilter.includes(review.Language) : true)
        )
      })
    }
    this.setState({
      filteredData: results.length ? results : "empty",
    })
  }

  searchReviews (searchTerm) {
    let results = []
    this.state.data.forEach(function (review) {
      if (review.Body.includes(searchTerm)){
        results.push(review)
      } else if (review.Header.includes(searchTerm)){
        results.push(review)
      }
    })
    this.setState({
      searchedData: results.length ? results : "empty",
      searchTerm: searchTerm
    })
    this.filterData()
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
  render () {
    let data = this.state.searchedData.length ? this.state.searchedData : this.state.data; //need to fix the state
    let data = this.state.filteredData.length ? this.state.filteredData : data; //need to fix the state
    return (
      <div className="page-component">
        <ReviewsSortComponent updateFilter={this.updateFilter}/>
        <SearchReviewsComponent search={this.searchReviews}/>
        <div className="reviews-list-container">
          { typeof data === "string" && 
            <div className="no-results-search">No results found. <b>Try</b> removing a filter, changing your search, or 
            <span onClick={this.clearSearch} className="clear-all"> clear all </span> 
            to read reviews.</div>
          }
          { typeof data === 'object' && 
            data.slice(0,10).map((reviewData)=>{
              return (
                <div onClick={this.state.popUp ? this.popDown : ''} className="review-container"> 
                  <ReviewsComponent 
                    reviewData={reviewData} 
                    popUp={this.popUp} 
                    popUpStatus={this.state.popUp} 
                    searchTerm={this.state.searchTerm}
                  />  
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
 }

 ReactDOM.render(<App/>,document.getElementById('app'))