import { Routes , Route} from "react-router"
import Register from "./components/register/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
