// import react, { useState } from "react"
import "./Cal.css"
// import logo from "./assets/dog.png"

// function cal() {

//     return (
//         <div className="calculator-grid">
//             <div className="output">
//                 <div className="previous-operand"></div>
//                 <div className="current-operand"></div>

//             </div>
//             <button className="span-two">AC</button>
//             <button>DEL</button>
//             <button>DEL</button>
//             <button>1</button>
//             <button>2</button>
//             <button>3</button>
//             <button>*</button>
//             <button>4</button>
//             <button>5</button>
//             <button>6</button>
//             <button>+</button>
//             <button>7</button>
//             <button>8</button>
//             <button>9</button>
//             <button>-</button>
//             <button>.</button>
//             <button>0</button>
//             <button className="span-two">=</button>
//         </div>

//     )

// }
// export default cal;



import { useState, useEffect } from "react"
import axios from "axios"




    function Cal() {
    const [uloma, setUloma] = useState([])
        // console.log(uloma)
        // setUloma("chuks")
        // console.log(uloma)

        // async function fetchData() {
        //     const response = await fetch("url");
        //     const data = await response.json()
        // }
   
        // useEffect(async () => {
        //     const response = await fetch("https://restcountries.com/v3.1/all");
        //     const data = await response.json(
        useEffect(() => {
            async function fetchData() {
                const response = await axios.get("https://dog.ceo/api/breed/hound/images");
                // const data = await response.json()
                setUloma(response.data.message)
                console.log(response.data.message)
            }
            
            fetchData()
        }, [])

    return (
        <>
        <div className= "main">
            
            <h1 className="header1">Welcome to Dog World</h1>
            <p className="paragraph">we have got you covered, we provide you with any breed of your choice</p>
            <div className="image">
             {
                uloma.map((element) => {
                    return(
                    
                        <img className="images" src={element} />

                        
                    
                    )
                })
            }
            </div>
        </div>
           
        </>
    )
}
export default Cal