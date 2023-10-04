import NavigationBar from "./components/NavigationBar"
import "./App.css"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="flex flex-col font-mono">
      <div>
        <NavigationBar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default App
