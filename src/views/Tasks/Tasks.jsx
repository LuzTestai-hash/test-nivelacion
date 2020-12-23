import React, { useEffect } from 'react'

import { useState } from 'react';

export const Tasks = (props) => {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([])


  const probando = function () {
    setTasks((prev) => [...prev, {
      task: `${newTask}`, completed: false, active: false
    }])
    console.log("tasks :", tasks)
  }

  useEffect(() => {
    console.log("cambie", tasks)
  }, [tasks])


  const probando2 = function (index) {
    tasks[index].completed = !tasks[index].completed
  }


  return (
    <div className="Container">
      <div className="col-12">
        <div className="d-flex">
          <input className="form-control" type="textarea" name="exact" onChange={(e) => setNewTask(e.target.value)}></input>
          <button onClick={() => probando()}>ENVIAR</button>
        </div>
      </div>
      {tasks.length > 0 ?
        <div className="col-12">
          <div className="d-flex">
            <table class="table table-bordered">
              <tbody>
                {tasks.map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id={`customCheck${index}`} />
                          <label className="custom-control-label" for={`customCheck${index}`} onClick={() => { probando2(index) }}>{task.task}</label>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div> : null}
    </div >
  );
}