import { Button } from "bootstrap";
import { Component } from "react";

class Subscribe extends Component{
state={
    isSubscribe:false,
    text:"subcribe",
    text1:"subscribed"
}
sub=()=>{
    this.setState({
        isSubscribe:!this.state.isSubscribe
    })
}
render(){
    return(
        <>
        <button onClick={this.sub} style={{
            backgroundColor:   this.state.isSubscribe?"green":"red"
        }}>
            {
                this.state.isSubscribe?this.state.text1:this.state.text
            }
        </button>

        <h1>{this.state.isSubscribe?"thanku for following":"please subscribe"}</h1>
        {/* {this.state.isSubscribe?alert("thnkuyou"):alert("please")} */}
        </>
    )
}




}
 export default Subscribe