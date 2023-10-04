import { useState } from "react"
import NavigationBar from "./components/NavigationBar"
import "./App.css"
import Banner from "./components/Banner"
import Services from "./components/Services"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col relative font-mono">
      <div>
        <NavigationBar />
      </div>
      <div>
        <Banner />
      </div>
      <Services />
    </div>
  )
}

export default App
