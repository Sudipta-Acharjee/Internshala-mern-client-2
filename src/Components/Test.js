import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';

const Test = () => {
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");

    useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                    setData(res.data);
                    setFilterd(res.data);
                }catch(err){
                    throw new Error(err);
                }
                 };
              fetchData(); 
    },[]);

    useEffect(()=> {
        const results = filtered.filter(res=> res.name.toLowerCase().includes(result)
        ); 
        setData(results)
    } ,[result])
    console.log(data)

    useEffect(()=> {
        const results = filtered.filter(res=> res.username.toLowerCase().includes(result)
        ); 
        setData(results)
    } ,[result])
    console.log(data)


  const onChange =(e)=> {
        setResult(e.target.value);
    }
    return (
        <div>
             <input 
            type="text"
            placeholder="serch here .."
            value={result}
            onChange={onChange}
        />
        {data.map((r,i)=> (   
                <ul key={i}>
                <li>{r.name}</li>
                <li>{r.username}</li>
                </ul>)
            )
        }
        </div>
    );
};

export default Test;