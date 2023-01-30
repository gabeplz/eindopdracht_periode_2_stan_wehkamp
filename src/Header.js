import  React, { useState , useEffect } from 'react'

function Header(){
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 500 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    // const mystyle = {

    //         color: "aquamarine"
    //}; style={mystyle}
return(
    <div class="header"> aaa       
        <div>
            <p> Time : {date.toLocaleTimeString()} </p>
        </div> 
    </div>
)

}

export default Header;