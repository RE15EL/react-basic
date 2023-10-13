import './MyButton.css';

export function MyButton ( {caption, onClick} ) {
  return (
    <button 
      name="custom_btn" 
      className='btn' 
      onClick={onClick}
    >
         {caption} 
    </button>
  )
}

