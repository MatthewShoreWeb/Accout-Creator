import './App.css';
import './components/sidebar';
import Calendar from './components/calendar';
import Dashboard from './components/dashboard'
import Header from './components/header';
import SideBar from './components/sidebar';

function sideBarPressed() {
  
};


function App() {
  return (
    <body>
     
      <nav onClick={sideBarPressed}>
        <SideBar />
      </nav>

      <Header title={'Calendar'}/>

      <main>
        <Calendar />
        <Dashboard />
      </main>
    </body>
    
  );
}

export default App;
