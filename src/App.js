import './App.css';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Components/MyFooter';
import LatestRelease from './Components/LatestRelease';

function App() {
  return (
    <div className="App">      
        <MyNav/>  
        <LatestRelease></LatestRelease>
        <MyFooter text="Hello"/>    
    </div>
  );
}

export default App;
