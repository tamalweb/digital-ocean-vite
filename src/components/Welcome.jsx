import Pencil from "../img/pencil.png"
import "../css/main.css"

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={Pencil} alt="Pencil Image" width={300} />
      </div>
    </>
  )
}