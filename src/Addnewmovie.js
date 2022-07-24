import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Addnewmovie = () => {
    const[mName,setmName]=useState("");
    const[hero,setHero]=useState("");
    const[genere,setGenere]=useState("");
    const[poster,setPoster]=useState("");
    const[trailer,setTrailer]=useState("");

    let history=useHistory();
    let{data:movies}=useFetch("http://localhost:4000/movies")


    const handleSubmit=(e)=>{
        e.preventDefault();
        let newMovie={mName,hero,genere,poster,trailer}
        fetch("http://localhost:4000/movies",
        {
        method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newMovie)
    })
    .then(()=>{
        alert("the movie has been added");
        // history.push(`/movieDetail"${(movies[movies.length-1].id)+1}`);
        history.push("/movieDetail"+((movies[movies.length-1].id)+1));
    })



    }
    return (  
        <div className="create-movie">
            <h1>Add a new movie to the list</h1>
            <form onSubmit={handleSubmit}>
                <label >Movie Name:</label> <input type="text" placeholder="Enter movie name" value={mName}
                onChange={(e)=>{setmName(e.target.value);}}/>
                <label >Hero :</label> <input type="text" placeholder="Enter Hero name" value={hero}
                onChange={(e)=>{setHero(e.target.value);}}/>
                <label >genere:</label> <input type="text" placeholder="Enter genere"value={genere}
                onChange={(e)=>{setGenere(e.target.value);}}/>
                <label >Poster:</label> <input type="text" placeholder="Add poster"value={poster}
                onChange={(e)=>{setPoster(e.target.value);}}/>
                <label >Trailer:</label> <input type="text" placeholder=" AddTrailer link"value={trailer}
                onChange={(e)=>{setTrailer(e.target.value);}}/>
                <input type="submit"/>
            </form>
        
        </div>
    );
}
 
export default Addnewmovie;