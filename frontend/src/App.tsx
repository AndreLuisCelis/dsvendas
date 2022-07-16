import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Header></Header>
      <main>
      <SalesCard></SalesCard>
      </main>
    </>

  )
}

export default App
