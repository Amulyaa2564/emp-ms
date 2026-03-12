import Header from "../other/header"
import TaskStatus from "../other/TaskStatus"
import TaskList from "../other/TaskList"
const EmployeeDashboard=()=>{
    return(
        <div className="p-8 flex flex-col gap-15">
            <Header/>
            <TaskStatus/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard