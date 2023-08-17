import Home from "./page.jsx/Home"
import "./App.css"
import Social from "./components/fixedsocial/Social"

const App = () => {
  return (
    <div className="contener">
      <Social/>
      <Home/>
    </div>
  )
}

export default App