// import Timer from './Timer'
import TimeWrapper from './TimeWrapper'
import NHTSA_Recalls from './NHTSA_Recalls'
import FetchData from './FetchData'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'
import UseEffect_Learning from "./UseEffect_Learning"
import Video from "./Video"
import Focuser from './Focuser'
import './App.css'

function App() {

  return (
    <div>
      <h1> This is App Component!! </h1>

      <Focuser />

      <UseEffect_Learning />

      <TimeWrapper />

      <ProfileViewerWithSearch />

      <NHTSA_Recalls make="ACURA" model="RDX" modelYear="2012" color="purple" />

      <FetchData />

      <Video />

    </div>
  )

}

export default App
