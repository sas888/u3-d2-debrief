import './App.css';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <div className="App">      
        <MyNav/>  
        <MyFooter text="Hello"/>    
    </div>
  );
}

export default App;
