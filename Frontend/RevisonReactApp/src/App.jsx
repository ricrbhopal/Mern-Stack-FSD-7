import { FaWifi } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

import contactImage from "./assets/contactPage.jpg"

function App() {
  return (
    <>
      <div className="bg-primary p-2 text-light">
        <FaWifi /> <span>My Revision App</span>
      </div>

<img src={contactImage} alt="" className="w-100" />

      <button className="btn btn-primary d-flex gap-2 align-items-center">
        <IoIosSave className="fs-5 text-danger" /> <span>Save Data</span>
      </button>
    </>
  );
}

export default App;
