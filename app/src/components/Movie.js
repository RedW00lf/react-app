function Movie(props) {
    const {Title,Year,imdbID,Type,Poster} = props
    
return (
    <div className = "Movie" id={imdbID}>
        <img src={Poster} />
        <h4>{Title}</h4>
        <span>{Year}</span>
        <h5>{Type}</h5>
    </div>
)

}

export default Movie