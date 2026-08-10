import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"

function App() { // primeiro componente


  return ( // código HTML
   <div>
    <NavBar> </NavBar>
    <Hero> </Hero>
    <Intro> </Intro>
   </div>
  )
}

export default App // linha importante para que possamos chamar o App em outros arquivos



