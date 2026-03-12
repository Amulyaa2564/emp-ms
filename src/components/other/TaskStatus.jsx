const TaskStatus=()=>{
    return(
        <div className="flex gap-10 flex-wrap">
            <div className="bg-blue-500 w-70 py-6 rounded p-5">
                <h1 className="font-bold text-4xl">0</h1>
                <p className="font-bold text-2xl">New Task</p>
            </div>
            <div className="bg-green-500 w-70 py-6 rounded p-5">
                <h1 className="font-bold text-4xl">3</h1>
                <p className="font-bold text-2xl">Completed</p>
            </div>
            <div className="bg-yellow-500 w-70 py-6 rounded p-5">
                <h1 className="font-bold text-4xl">0</h1>
                <p className="font-bold text-2xl">Accepted</p>
            </div>
            <div className="bg-red-500 w-70 py-6 rounded p-5">
                <h1 className="font-bold text-4xl">1</h1>
                <p className="font-bold text-2xl">Failed</p>
            </div>
            
        </div>
    )
}

export default TaskStatus