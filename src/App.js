import './App.css';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Components/MyFooter';
import SingleBook from './Components/SingleBook';
import books from '../src/books (1)/history.json'
import BookList from './Components/BookList';

function App() {
  return (
    <div className="App">      
        <MyNav/>  
        <MyFooter text="Hello"/> 
        
        <BookList books={books}/> 
    </div>
  );
}

export default App;
