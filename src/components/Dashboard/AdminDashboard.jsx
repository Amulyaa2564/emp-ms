import CreateTask from "../other/CreateTask"
import Header from "../other/Header"

const AdminDashboard=()=>{
    return(
        <div className="h-screen flex flex-col p-2 overflow-hidden">
            <Header/>
            <CreateTask/>
        </div>
    )
}
export default AdminDashboard