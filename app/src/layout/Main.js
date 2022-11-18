import React from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/preloader/preloader';
import Search from '../components/Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies : [],
    }

componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=naruto`)
    .then(resp => resp.json())
    .then(data => this.setState({movies:data.Search}))
}
searchMovies = (str,type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=d${API_KEY}&s=${str}${type !=='all' ? `&type=${type}` : ''}`)
    .then(resp => resp.json())
    .then(data => this.setState({movies:data.Search}))
}

// componentDidMount() {
//     fetch(`http://www.omdbapi.com/?apikey=d5d1f25b&s=naruto`)
//     .then(resp => resp.json())
//     .then(data => this.setState({movies:data.Search}))
// }
// searchMovies = (str,type = 'all') => {
//     fetch(`http://www.omdbapi.com/?apikey=d5d1f25b&s=${str}${type !=='all' ? `&type=${type}` : ''}`)
//     .then(resp => resp.json())
//     .then(data => this.setState({movies:data.Search}))
// }

    render() {
        
        const {movies} = this.state
    
    
        return <main className = 'main'>
            <Search searchMovies = {this.searchMovies}/>
            {
               movies ? (movies.length ? (<Movies movies = {this.state.movies}/>) : <Preloader />) : 'Ничего не найдено'
            }
        
    </main> 
    }
}

export default Main