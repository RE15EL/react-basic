import './MyCard.css';
import { MyAvatar } from '../avatar/MyAvatar.jsx';

export const MyCard = ( {title} ) => {
  return (
    <div className='card'>
      <div className="card-header"> 
        <MyAvatar size={50} target={
          {
            name: 'Lin Lanying',
            poster: 'https://i.imgur.com/1bX5QH6.jpg'
          }
        }/>
        <h4 className='card-title'> {title} </h4>
       </div>  
      <div className="card-content"></div>   
      <div className="card-footer"></div>           
    </div>
  )
}



