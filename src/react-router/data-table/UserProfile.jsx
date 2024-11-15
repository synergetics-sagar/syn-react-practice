import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

export default function UserProfile() {
    const {uid} = useParams()
    const navigate = useNavigate()
    const userProfile = useSelector(state=>state.users.filter(user=>user.id==uid))
    const {id, first_name, last_name, email, avatar} = userProfile[0]
    const [countdown, setCountdown] = useState(5); // Countdown starting from 5 seconds

    // useEffect(() => {

    //   const countdownTimer = setInterval(() => {
    //     setCountdown((prev) => prev - 1);
    //     console.log(countdown)
    //   }, 1000);
  
    //   const redirectTimer = setTimeout(() => {
    //     // navigate("/data-table",{replace:true}); // Prevents user form going back
    //     navigate("/data-table");
    //   }, 5000);
  
    //   return () => {
    //     clearInterval(countdownTimer);
    //     clearTimeout(redirectTimer);
    //   };
    // }, []);
    
    return (
        <div>
            <h3>Redirecting in... {countdown} seconds</h3>
            <img src={avatar} alt="" />
            <h4>{first_name} {last_name}</h4>
            <h5>{email}</h5>
        </div>
    )
}