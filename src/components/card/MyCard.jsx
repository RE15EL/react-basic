import './MyCard.css';
// import PropTypes from 'prop-types'
export const MyCard = ({ children }) => {
  return (
    <div className='card'>
        { children }
    </div>
  )
}

// MyCard.propTypes = {}

