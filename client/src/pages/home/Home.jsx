import { Link,useNavigate } from "react-router-dom"

export const Home = () =>{
    const navigate = useNavigate()
    return <div>
        Welcome to homepage
        <hr />
        <Link to="/counter">show counter</Link>
        {/* <button onClick={()=> navigate("/counter")}>Show Counter</button> */}
    </div>
}