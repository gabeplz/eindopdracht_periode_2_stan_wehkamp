import React from 'react'
import FinishedTasks from './FinishedTasks';
import MyTasks from './MyTasks';
import Progress from './Progress'

import Home from './pages/Home';
import Characters from './pages/Characters';
import Character from './pages/Character';

import logo from './logo.svg';
import './App.css';

export const DashBoardPage = () => {

    
    
    
  

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

export default DashBoardPage