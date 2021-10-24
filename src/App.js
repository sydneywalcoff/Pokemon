import Header from './components/Header'
import PaginationButtons from './components/PaginationButtons';
import PokeList from './components/PokeList';
import './App.css'

function App() {
  return (
    <>
      < Header />
      <div className = 'main'>
        < PokeList />
        < PaginationButtons />  
      </div>
    </>
  );
}

export default App;
