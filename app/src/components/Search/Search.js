import React from "react"

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }
    hadleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type)
        }
           
    }

    hadleFilter = (event) => {
        this.setState(() =>({type: event.target.dataset.type}),() =>{
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }
render(){
    return <div className='search'>
        <div className="search__input">
<input
 className="search_input"
 placeholder="Поиск"
 type='search'
 value={this.state.search}
 onChange={(e)=>this.setState({search: e.target.value})}
 onKeyDown={this.hadleKey}
 />
  <button onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Найти</button>
  <div className='type'>
    <label>
            <input
                className='type--input'
                type='radio'
                name='type'
                data-type='all'
                onChange={this.hadleFilter}
                checked={this.state.type === 'all'}
            />
        <span>Все</span>
        </label>
        <label>
            <input
                className='type--input'
                type='radio'
                name='type'
                data-type='movie'
                onChange={this.hadleFilter}
                checked={this.state.type === 'movie'}
            />
        <span>Фильмы</span>
        </label>
        <label>
            <input
                className='type--input'
                type='radio'
                name='type'
                data-type='series'
                onChange={this.hadleFilter}
                checked={this.state.type === 'series'}
            />
            <span>Сериалы</span>
        </label>
        <label>
        <input
            className='type--input'
            type='radio'
            name='type'
            data-type='episode'
            onChange={this.hadleFilter}
            checked={this.state.type === 'episode'}
        />
        <span>Эпизоды</span>
        </label>
  </div>
  </div>
</div>

    }
}

export default Search