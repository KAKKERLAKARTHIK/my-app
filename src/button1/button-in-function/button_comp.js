 
function 
ButtonCreation({ButtonProperties}){
   
 const {width,Bgcolor,text}=ButtonProperties
    
    return (
    <div>
        <button style={{
            width,
            backgroundColor:Bgcolor}}>{text}
            
            
        </button>
    </div>)
}
export default ButtonCreation