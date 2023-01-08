import { Link } from 'react-router-dom'

export default function AllRestaurants ({ restaurants, setFoundRestaurant }) {
  return (
    <>
    <div className="index-header">
        <h1>Choose a Restaurant</h1>
     </div>

      {
       
        restaurants
          ? <>
            {
        restaurants.map((restaurant) => {
          return (
            <div className='res-icon' key={restaurant._id} id='res-icon-index' >
            <div className="res-image">
            </div>
            <div className="res-details">
                <h1>{restaurant.name}</h1>
                <p>{restaurant.type}</p>
            </div>
              <div className='res-button'>
              <button to='orders/new' onClick={() => setFoundRestaurant(restaurant)}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/orders/new'>Order from here</Link>
              </button>
              </div>
            </div>
          )
        })
        }
          </>
          : 'No restaurants to display'
      }

    </>
  )
}