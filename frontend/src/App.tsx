import Header from "./components/Header"
import Salescard from "./components/Salescard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-cointainer">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
