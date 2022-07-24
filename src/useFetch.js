    import {useEffect , useState} from 'react'
const useFetch = (resourse) => {

    var [data, setData] = useState(null);
    var[pending,setPending]= useState(true);
    const[error,setError]= useState(null);
    
    useEffect(() => {

       setTimeout(()=>{
          fetch(resourse)
          .then((response)=>{
               if(response.OK===false)
                {
                  throw Error("Data not found");
                }
                  return response.json();
                })
          .then((data) => {setData(data);     setPending(false)})
          //  .then((response) => {return response.json();}) 
       .catch((error)=>{ setError(error.message); setPending(false)})
        },0) 
     },[]);
    
    return ( {data,pending,error});
}
 
export default useFetch;