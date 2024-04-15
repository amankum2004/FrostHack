import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Home } from "./Pages/home"

const App = () => {
    return (
      <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element = {<Home />}/>
     
          {/* <Route path="*" element={<Error />}/> */}
          
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </>
    )
  }
  
  export default App;