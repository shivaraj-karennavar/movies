import {Link} from 'react-router-dom'
const Nabar = () => {
    return ( 
        <div className="nav-content">
            <Link to="/"><h1>Zen Movies</h1></Link>
           <div>
             <Link to="/">Home</Link>
             <Link to="/addMovie">Add new movie</Link>
        
            </div>
            <hr />
        </div>
     );
}
 
export default Nabar;