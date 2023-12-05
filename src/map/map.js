import { Component } from "react";

class Map extends Component{
state=[{name:"karthik",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
},{name:"karthik1",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
},{name:"karthik2",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
},{name:"karthik3",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
}]
render(){
    return(
        <>
        {
           this. state.map((val,ind)=>{
return (

    <div key={this.state.ind}>
<h1>{val.name}</h1>

    </div>
)
            })
        }   
     </>
    )   
}
}
export default Map


