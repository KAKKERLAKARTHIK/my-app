 
import './App.css';
import ButtonCreation from './button1/button-in-function/button_comp';
import Button_component from './button1/button-in-class/Button_compo_inclass';
import OrderdList from './list_crreation/list_creation_function/Ordered_list';
import Unorderd_list from './list_crreation/list_creation_class/Unorderd_list';
import Image_getting from './Image/image_creation';
function App() {
  return (
    <div>
 {/* <ButtonCreation/> */}
 <Button_component/>
<ol>
<OrderdList/>
</ol>
<ui>
<Unorderd_list/>
</ui>
<Image_getting/>

</div>
  )
 
}

export default App;
