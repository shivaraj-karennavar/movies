import { Link } from "react-router-dom";
const Notfound = () => {
    return (
        <div className="not-found">
            <h1>404:Page not found</h1>
            <h2>The page you are looking for is not present in the current application please go to home page</h2>

            <Link  to="/">"Go to Home page"</Link>
        </div>
      );
}
 
export default Notfound;