import '../css/mainStyles.css';
import { category } from '../../mocks/category';

export function Main () {
  return (
    <main className='mainHome'>
      <section>
        <h2>Servicios</h2>
        <section className='services'>
          {
          category.map(item => {
            return (
              <div key={item.id} className='card'>
                <a href="#">{item.name}</a>
              </div>
            )
          })
          }
        </section>
        <section>
          <h2>Doctores Mejor Valorados</h2>
          
        </section>
      </section>
    </main>
  )
}