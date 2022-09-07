import './App.css';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Components/MyFooter';
import SingleBook from './Components/SingleBook';
import books from './data/fantasy.json'

function App() {
  return (
    <div className="App">      
        <MyNav/>  
        <MyFooter text="Hello"/> 
        <SingleBook img={books[0].img} title={books[0].title} />   
    </div>
  );
}

export default App;
