import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie'
import {filterGenre, movieAvailability} from '../../actions'
// import { moviesMockUp } from '../../../../api/src/utils/mockups/movies';


import './Home.css'




export default function Home() {
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state)
    const {genres} = useSelector(state => state)
    const defIm = 'https://es.web.img3.acsta.net/c_310_420/pictures/21/06/14/11/47/2960546.jpg'
    // console.log(movies[0])
    function handleAvailability(e) {
        e.preventDefault()
        dispatch(movieAvailability(e.target.value))
    }
    function handleFilterGenre(e) {
        e.preventDefault()
        dispatch(filterGenre(e.target.value))
    }
    return (
        <div >
            <div>
           <select onChange={el => handleAvailability(el)} className="" >
             <option value='default'>Disponibilidad</option>
            <option value='true'>En Cartelera</option>
             <option value='false'>Proximamente</option>
             </select>
      <select onChange={e => handleFilterGenre(e)} className="">
              <option value='All'>Géneros</option>
             {genres && genres.map((genre) => {

              return <option key={genre.id} value={genre.name}>{genre.name}</option>
      })}
    </select>
             </div>
             <div className="MoviesContainer">
          {
                movies.map((movie) => {
                    // console.log(movie.image)
                    // console.log('este es el id que llega', movie.id)
                    // let URL = movie.img
                    // console.log(URL)
                    return ( 
                    <Link to={'/movie/' + movie.id}>
                        <div className="Movie" >
                        <Movie key={movie.id} image={movie.image} altImage={defIm} name={movie.title}
                                    availability={movie.availability}
                                    genre={movie.genre}
                                    rating={movie.rating}

                                    // genre={movie.genre.map(el => {
                                    //         return (<div>{el}</div>)
                                    //     })} 
                                        />
                        </div>
                    </Link>
                    )
                })
            }
    </div>
        </div>
    )
}

{/* <div className="Movie" key={movie.id}>
<div><img src={require(`{'${URL}'}`)} alt={movie.title} /></div>
<div><img src={require(`${URL}`)} alt={movie.title} /></div>
<div><img src={require('../../assets/moviesPosters/la_casa_oscura.jpg')} alt={movie.title} /></div>

    <div><img src={movie.img} alt={movie.title} /></div>
 <div>
    <div className="MovieTitle">{movie.title}</div>
   
</div>

</div> */}

// const posts = [
//     { 
//         id: '1', 
//         name: 'After Almas Perdidas',
//         sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//         rating: 5,
//         availability: true,
//         genre: 'Drama',
//         image: '../../assets/moviesPosters/after_almas_perdidas.jpg'
//      },
//     { 
//         id: '2', 
//         name: 'Cry Macho',
//         sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//         rating: 3,
//         availability: true,
//         genre: 'Acción',
//         image: '../../assets/moviesPosters/cry_macho.jpg'
//      },
//     { 
//         id: '3', 
//         name: 'Amenaza bajo el agua',
//         sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//         rating: 4,
//         availability: true,
//         genre: 'Suspenso',
//         image: '../../assets/moviesPosters/amenaza_bajo_el_agua.jpg' 
//     },
//     { 
//         id: '4', 
//         name: 'Sin tiempo para morir',
//         sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//         rating: 5,
//         availability: true,
//         genre: 'Acción',
//         image: '../../assets/moviesPosters/sin_tiempo_para_morir.jpg'
//      },
//     { 
//         id: '5', 
//         name: 'El imperio de los sentidos',
//         sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//         rating: 2,
//         availability: true,
//         genre: 'Drama',
//         image: '../../assets/moviesPosters/el_imperio_de_los_sentidos.jpg'
//      },
//     { 
//         id: '6', 
//         name: 'La casa oscura',
//         sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
//         rating: 4,
//         availability: true,
//         genre:['Suspenso', ' Accion'] ,
//         image: '../../assets/moviesPosters/la_casa_oscura.jpg'
//      },
    // { 
    //     id: '7', 
    //     title: 'El prófugo',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/el_profugo.jpg'
    //  },
    // { 
    //     id: '8', 
    //     title: 'Infidelidad mortal',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/infidelidad_mortal.jpg'
    //  },
    // { 
    //     id: '9', 
    //     title: 'Los santos de la mafia',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/los_santos_de_la_mafia.jpg'
    //  },
    // { 
    //     id: '10', 
    //     title: 'Undine',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/undine.jpg'
    //  },
//   ];