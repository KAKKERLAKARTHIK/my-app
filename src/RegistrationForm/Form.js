import ButtonCreation from "../button1/button-in-function/button_comp"

function RegistrationForm(){
return(
<div className="form">
<form>
<label htmlFor ="username"> Username:</label><br/>
<input type="text" /><br/>
<label htmlFor="username"> ConfiomUsername:</label><br/>
<input type="text" /><br/>
<label htmlFor="password"> Password:</label><br/>
<input type="password" />
<ButtonCreation/>
</form>
</div>
)


}
export default RegistrationForm