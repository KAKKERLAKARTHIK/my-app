// import axios from "axios";
import { render } from "@testing-library/react";
import axios from "axios";
import { Component } from "react";
 
import "./ProfileApi.css"

class Profile extends Component {
    state = {
        products: []
    }
    handleClick = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(elements => {
                this.setState({
                    products: elements.data
                })
            })
            console.log("clicked");
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>click here</button>
            <div  className="main" >

{this.state.products.map((val,ind)=>{
return(
    <div  >
<div key={val.id}style={{
    
}}>

<div className="card" style={{ width: "20rem",height:"28rem" }}>
  <center><img src={val.image} className="card-img-top" alt="..." style={{width:"140px",height:"150px"}}/></center>
  <div className="card-body">
    <h5 className="card-title" >{val.title}</h5>
    <h3 className="card-text"  >
    🏷️ price${val.price}
    </h3>
    <h4>

        Rating  {val.rating.rate}⭐
    </h4>
    <h4> count {val.rating.count}</h4>
    <a href="#" className="btn btn-primary">
      see more
    </a>
  </div>
</div>
 
</div>
</div>
)
})}
     </div>
     </>
        )
    }
    
}
export default Profile