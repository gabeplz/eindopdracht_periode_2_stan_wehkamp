import logo from './logo.svg';
import './App.css';
import Header from './Header';
import DateTime from './DateTime';
import NavigationBar from './NavigationBar'
import FinishedTasks from './FinishedTasks';
import MyTasks from './MyTasks';
import Progress from './Progress'


function App() {
  return (
    <div className="App">

{/* groene header dingen*/ }
    <Header>  </Header>
    <NavigationBar></NavigationBar>
    <div class="grid">
    <FinishedTasks></FinishedTasks>
    <MyTasks></MyTasks>
    <Progress></Progress>
    </div>
    </div>
  );
}

export default App;
