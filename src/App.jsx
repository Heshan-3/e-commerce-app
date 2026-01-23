import './App.css'
import Button from './components/atoms/Button';
import SearchBar from './components/molecules/SearchBar'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import Home from './pages/Home';

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <main className='content'>
          <Button/>
          <Home/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App
