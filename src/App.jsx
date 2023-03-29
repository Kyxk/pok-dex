import './assets/css/App.css'
import PokeCard from "./components/PokeCard";



export default function App() {
  
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  
  return (
    <>
      <div className="App">
        <PokeCard />
      </div>
      <section style={container}>
        <h1 style={{color: '#0d1a26', fontWeight: 400}}>Hey! We're using inline style!</h1>
      </section>
    </>
  )
}
