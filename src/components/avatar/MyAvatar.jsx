import './MyAvatar.css';

export function MyAvatar( {target, size=50} ) {
    return (
      <img
        className="avatar"
        src= {target.poster}
        alt={target.name}
        style={
          {
            width: `${size}px`,
            height: `${size}px` 
          }
        }
      />
    );
}