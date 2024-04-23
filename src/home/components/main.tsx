import '../css/mainStyles.css';
import { category } from '../../mocks/category';

export function Main () {
  return (
    <main className='mainHome'>
        <section className='services'>
          {
          category.map(item => {
            return (
              <a key={item.id} className='card'>
                {item.name}
              </a>
            )
          })
          }
        </section>
        <section>
          <h2>Doctores Mejor Valorados</h2>
          
        </section>
    </main>
  )
}