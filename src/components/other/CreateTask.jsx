const CreateTask = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden flex-1">  
      <div className="w-full  flex gap-2 bg-zinc-900 p-2">
        <div className="w-1/2 ">
          <div>
            <label htmlFor="title">Task Title</label><br />
            <input type="text" placeholder="Make a UI design" id="title"
              className="border border-white outline-none w-full p-2 rounded-xl"/>
          </div>

          <div>
            <label htmlFor="date">Date</label><br />
            <input type="date" id="date"
              className="border border-white outline-none w-full p-2 rounded-xl"/>
          </div>

          <div>
            <label htmlFor="emp">Assign to</label><br />
            <input type="text" placeholder="Employee name" id="emp"
              className="border border-white outline-none w-full p-2 rounded-xl"/>
          </div>

          <div>
            <label htmlFor="category">Category</label><br />
            <input type="text" placeholder="Design,dev,etc" id="category"
              className="border border-white outline-none w-full p-2 rounded-xl"/>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <label htmlFor="textarea">Description</label>
            <textarea id="textarea" className="border w-full h-60"></textarea>
          </div>
          <div>
            <button className=" px-5 py-3 rounded w-full bg-green-400  ">Create Task</button>
          </div>
        </div>
      </div>
      <div className="mt-3 overflow-y-auto flex-1 p-2 scrollbar">
            <div className="flex justify-between p-2 rounded bg-red-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-green-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-yellow-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-pink-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-red-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-green-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-yellow-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            <div className="flex justify-between p-2 rounded bg-pink-400 mb-2">
                <h3>Ammu</h3>
                <h3>Make a UI Design</h3>
                <h3>Status</h3>
            </div>
            
        </div>
        </div>
    </>
  );
}

export default CreateTask;