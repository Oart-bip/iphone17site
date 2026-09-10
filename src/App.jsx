import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Highlights from "./components/Highlights"
import Colors from "./components/Colors"

function App() { // primeiro componente


  return ( // código HTML
   <div>
    <NavBar> </NavBar>
    <Hero> </Hero>
    <Intro> </Intro>
    <Highlights> </Highlights>
    <Colors> </Colors>
    
   </div>
  )
}

export default App // linha importante para que possamos chamar o App em outros arquivos



