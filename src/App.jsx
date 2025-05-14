

import CustomNavbar from "./components/Navbar/Navbar.jsx";
import {useParams, useSearchParams} from "react-router";


function App() {
    let [searchParams] = useSearchParams();
    let {city} = useParams();
/*

* */
  return (
      <div>
          <br/>
          <br/>
          <h1>
              <span className="text-warning">
              Your Search About &nbsp;
                  </span>
              {searchParams.get('cars')}
              <br/>
              <span className="text-warning">
              And your Car Model is &nbsp;
              </span>
              {searchParams.get('model')}
          </h1>
          <h3>
              You are searching In
              <b>{city}</b>
          </h3>
      </div>
  )
}
/*


* */

export default App
