import {Link} from 'react-router-dom'

const MoviesList = (props) => {
        var movies=props.movies;
        var title=props.title;
        // const handleDelete=()=>{
        //     // alert(' delete Working');
        // }
        return ( 
            <div className="home-content">
                <h1>{title}</h1> <br/>
           {
                movies.map((movie)=>(
                    <div className="movies-list">
                        <Link to={`/movieDetail${movie.id}`}>
                            <h1 id='mname'>{movie.mName}</h1>
                            <h2>{movie.hero}</h2>
                            <h2>{movie.genere}</h2>
                            {/* <button onClick={handleDelete(movies.id)}>delete</button> */}
                        </Link>
                    </div>
                     
                     ))
                     }
            </div>
        
        )
}
 
export default MoviesList;