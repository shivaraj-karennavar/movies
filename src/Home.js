import MoviesList from "./MoviesList";
import useFetch from "./useFetch";
const Home = () => {

 let {data:movies,pending,error}=useFetch("http://localhost:4000/movies");
 return (
    
    <div>
        {error && <h1>{error}</h1>}
        {pending && <div className="loader"></div>}
        {movies && <MoviesList movies={movies} title="All movies..." />}
      
    </div>
  );
};

export default Home;
