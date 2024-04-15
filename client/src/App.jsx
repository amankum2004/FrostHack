import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Home } from "./Pages/home"
import { UserInfo } from "./Pages/User-info"
import { Voting } from "./Pages/vote"

const App = () => {
    return (
      <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/userinfo" element = {<UserInfo />}/>
          <Route path="/voting" element = {<Voting />}/>
          {/* <Route path="*" element={<Error />}/> */}
          
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </>
    )
  }
  
  export default App;