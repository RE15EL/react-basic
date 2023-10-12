import './App.css'
import {MyButton} from './components/MyButton'

function App() { 

  return (
    <>
      <header>
        <div className="brand"> <h2> React Basic</h2> </div>
        <nav className="navbar"></nav>
        <div className="social"></div>
      </header>
      <main>
        <MyButton caption="Hello World" />
      </main>
      <footer></footer>       
    </>
  )
}

export default App
