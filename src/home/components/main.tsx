import '../css/mainStyles.css';
import { category } from '../../mocks/category';
import { Doctor } from '../../mocks/doctors';

export function Main () {
  const Doctors = Doctor.filter((doctor) => doctor.rating >= 4.5)
  return (
    <main className='mainHome'>
        <section className='services'>
          {
          category.map(item => {
            return (
              <a href="#" key={item.id} className='card'>
                {item.name}
              </a>
            )
          })
          }
        </section>
        <section>
          <h2>Doctores Mejor Valorados</h2>
          <section className='doctors'>
          {
            Doctors && Doctors.map((doctor) => {
              return (
              <section key={doctor.id} className='doctor '>
                <article className='img'>
                  <img src={doctor.img} alt={doctor.name} />
                </article>
                <article className='info'>
                  <p className='text'>{doctor.rating}</p>
                  <h2 className='text'>{doctor.name} {doctor.lastname}</h2>
                  <p className='text'>{doctor.specialty}</p>
                </article>
              </section>
                
              )
            })
          }
          </section>
          
        </section>
    </main>
  )
}