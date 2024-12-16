import { Route, Routes} from "react-router-dom";
import Create from "./ContactCurd/Create";
import Edit from "./ContactCurd/Edit";
import GetData from "./ContactCurd/GetData";
import './index.css'

export default function App() {
  return(
    <div className="Apps">
      
      <Routes>
        <Route path="/" element={<GetData/>}/>
        <Route path="/new" element={<Create/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
     
    </div>
  )
}