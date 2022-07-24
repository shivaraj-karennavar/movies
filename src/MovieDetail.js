import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetail = () => {
    let{id}=useParams();
    let {data:movies,pending,error}=useFetch(`http://localhost:4000/movies/${id}`);
    let history=useHistory();

    const handleDelete=()=>{
        fetch(`http://localhost:4000/movies/${id}`,{method:"DELETE"})
        .then(()=>{
            alert("this movie has been deleted from list");
            // history.push("/") //or
            history.goBack();

        })
    }
    return (
        <div className="movie-detail">
            
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"> loading...</div>}
            {movies && <div>
                <img height="200px" width="200px" src={movies.poster} alt="not found" />
                <h1>Complete Details of the Movie{id}</h1>
                <h1>Movie Name:{movies.mName}</h1>
                <h1>Hero:{movies.hero}</h1>
                <h1>Genere:{movies.genere}</h1>
                <br />
                <button onClick={handleDelete}>Delete</button>

                </div>}
        </div>
      );
}
 
export default MovieDetail;