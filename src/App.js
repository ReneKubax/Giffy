import React from 'react';
import './App.css';
import ListOfGifts from './components/ListOfGifts';
import{Link, Route} from 'wouter'


function App() {
  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
      <Link to="/gif/panda">Gifs de panda</Link>
      <Link to="/gif/goku">Gifs de goku</Link>
      <Link to="/gif/hunterxhunter">Gifs de HXH</Link>
      <Route component = {ListOfGifts} path='/gif/:keyword' />
      </section>
    </div>
  );
}

export default App;
