import React from 'react'
import FinishedTasks from './FinishedTasks';
import MyTasks from './MyTasks';
import Progress from './Progress'

export const Tasks = () => {

    
    
    
  

    return(
        <div className="Rechts">
          <div className="grid">
            <FinishedTasks></FinishedTasks>
            <MyTasks></MyTasks>
            <Progress></Progress>
          </div>
        </div>
    )
}

export default Tasks