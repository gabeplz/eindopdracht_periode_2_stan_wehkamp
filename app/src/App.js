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
import TestPage from './home/TestPage';


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
        
        <Routes>
        <Route path="/task" element={<Tasks />} />
      <Route path="/testpage" element={<TestPage />} />
      <Route path="/weer" element={<Weather />} />
      </Routes>

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

    </>
  );
}

export default App;
