import  react  from 'react'
import GetUser from "./getUser/getUser"
import AddUser from "./addUser/addUser"
import EditUser from "./addUser/editUser"
import './App.css'
import { Routes , Route} from 'react-router-dom'

function App() {




  return (
   
<>
    <Routes>
      <Route path="/" element={<GetUser/>} />
      <Route path="/add" element={<AddUser/>} />
      <Route path="/edit/:id" element={ <EditUser/>} />
    </Routes>

</>
  )
}

export default App
