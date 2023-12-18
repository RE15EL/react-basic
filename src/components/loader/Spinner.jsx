import './Spinner.css';
import { ThreeCircles } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="loader">
        <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    </div>
  )
}
