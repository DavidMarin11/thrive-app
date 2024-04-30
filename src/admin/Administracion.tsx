import { Navbar } from "../components/Navbar"
import './styles.css'

export function Admin () {
  return (
    <>
    <Navbar/>
    <section className="admin">
      <h3 className="title">No hay citas</h3>
    </section>
    
    </>
  )
}