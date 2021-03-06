import React, { Component } from 'react'
import NavbarSignIn from '../components/NavbarSignIn'
import mini1 from '../components/assets/mini1.PNG'
import mini2 from '../components/assets/mini2.PNG'
import mini3 from '../components/assets/mini3.PNG'
import card1 from '../components/assets/card1.png'
import card2 from '../components/assets/card2.png'
import card3 from '../components/assets/card3.png'
import UpcomingMovies from '../components/UpcomingMovies'
import FooterHome from '../components/FooterHome'
import '../components/home/home.css'
import http from '../helpers/http'


class Home extends Component {
  state = {
    errorMsg: '',
    showing: [{}],
  }

  getMovies = async () => {
    try {
      const result = await http().get(`/movies/now-showing`)
      this.setState({
        errorMsg: '',
        showing: result.data.results
      })
    } catch (err) {
      this.setState({
        errorMsg: err.response.message,
        showing: {}
      })
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    return (
      <React.Fragment>
        <NavbarSignIn />
        <div className="container">
          <div className="row">
            <div className="col md-6">
              <p className="title-home">Nearest Cinema, Newest Movie,</p>
              <h1 className="sub-title-home">Find out now!</h1>
            </div>

            <div className="col md-6">
              <img className="mini1 shadow-lg" src={mini1} alt="" />
              <img className="mini2 shadow-lg" src={mini2} alt="" />
              <img className="mini3 shadow-lg" src={mini3} alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <h5 className="font-weight-bolder">Now Showing</h5>
            <button className="view-all1">view all</button>
          </div>

          <div className="row"> 

            <React.Fragment>
              
                  {this.state.showing.map(movie => (
                    <div className="col"><a href={`http://localhost:3000/movie-detail/${movie.id}`}>
                    <img height='200' width='200' src={movie.image} className="shadow-lg card-now-showing img-fluid" /></a>
                  </div>
                  ))}
    
            </React.Fragment>

            {/* <div className="col"><a href='http://localhost:3000/movie-detail/49'>
              <img src={this.state.showing[0].image} className="shadow-lg card-now-showing img-fluid" /></a>
            </div>
            <div className="col"><a href='http://localhost:3000/movie-details/49'>
              <img src={card2} className="shadow-lg card-now-showing" /></a>
            </div>
            <div className="col"><a href='http://localhost:3000/movie-details/49'>
              <img src={card3} className="shadow-lg card-now-showing" /></a>
            </div>
            <div className="col"><a href='http://localhost:3000/movie-details/49'>
              <img src={card1} className="shadow-lg card-now-showing" /></a>
            </div>
            <div className="col"><a href='http://localhost:3000/movie-details/49'>
              <img src={card2} className="shadow-lg card-now-showing" /></a>
            </div> */}
          </div>
        </div>

        <UpcomingMovies />

        <div className="container margin-member shadow-lg pt-5">
          <p className="vanguard">Be the vanguard of the</p>
          <h1 className="moviegoers">Moviegoers</h1>
          <div className="submit-email" className="row">
            <div className="col-auto">
              <input type="email" className="form-control margin-form-email" placeholder="Type your email" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3 join-now-button">Join now</button>
            </div>
          </div>
          <div className="row">
            <div className="member-text">
              <p>By joining you as a Tickitz member,</p>
              <p>we will always send you the latest updates via email</p>
            </div>
          </div>
        </div>

        <FooterHome />

      </React.Fragment>
    )
  }
}

export default Home