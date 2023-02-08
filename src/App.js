import { Route, Routes } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import DateTime from './DateTime';
import NavigationBar from './NavigationBar'
import FinishedTasks from './FinishedTasks';
import MyTasks from './MyTasks';
import Progress from './Progress'
import Tasks from './Tasks'
import Weather from './Weather';

function App() {
  return (<>
    <div className="Achtergrond"></div>
    <div className="App">
    <div className="InnerDiv">
{/* groene header dingen*/ }
      <Header>  </Header>
      <div className="navAndGrid">
        <div className="Links">
          <NavigationBar></NavigationBar>
        </div>
        <Tasks></Tasks>
        {/* <div className="Rechts">
          <div className="grid">
            <FinishedTasks></FinishedTasks>
            <MyTasks></MyTasks>
            <Progress></Progress>
          </div>
        </div> */}
        </div>
      </div>
    </div>
    <Routes>
    
     
      <Route path="/characters" element={<Weather />} />
    </Routes>
    </>
  );
}

export default App;
