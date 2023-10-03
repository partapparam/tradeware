import { useState } from "react"
import NavigationBar from "./components/NavigationBar"
import "./App.css"
import Banner from "./components/Banner"

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
    </div>
  )
}

export default App
