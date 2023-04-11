import './assets/css/App.scss'
import PokeCardList from "./components/PokeCardList";
import { DatePicker } from 'antd';
import Header from './components/Header';
import Footer from './components/FooterApp';

export default function App() {
  
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
        <PokeCardList />
        <DatePicker /> 
        </main>
        <footer>
          <Footer />       
        </footer>
      </div>
      
    </>
  )
}
