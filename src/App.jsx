import { useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./components/utils/localStorage"
const App=()=>{
  useEffect(()=>{
    getLocalStorage()
  })


      return(
          <>
            {/* <Login/> */}
            {/* <EmployeeDashboard/> */}
            <AdminDashboard/>

          </>
      )

}
export default App