import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Contactus from './Screen/Contactus';

import Home from "./Screen/Home";
// import Info from './Screen/Info';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/contactus' component={Contactus}/>
        {/* <Route path = '/info' component={Info}/> */}
      </Switch>
      </BrowserRouter>
      
    </div>
  )
  
}

export default App;
