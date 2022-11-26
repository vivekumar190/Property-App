import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import PropertyCard from "./components/PropertyCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Locationoptions,
  moveinoptions,
  Priceoptions,
  propertyList,
  Typenoptions,
} from "./constants/Constants";
import Select from "react-select";
function App() {
  const [selectedLocationOption, setLocationSelectedOption] = useState(null);
  const [selectedmoveinOption, setmoveinOption] = useState(null);
  const [selectedPriceOption, setPriceSelectedOption] = useState(null);
  const [selectedTypeOption, setTypeSelectedOption] = useState(null);
  const [tobeshownData, setTobeShonwData] = useState([]);
  useEffect(() => {
    setTobeShonwData([...propertyList]);
  }, []);

  const sortdata = () => {
    if (
      !selectedLocationOption ||
      !selectedmoveinOption ||
      !selectedPriceOption ||
      !selectedTypeOption
    ) {
      return toast.error("🦄 Please Select All the filters", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (
      selectedLocationOption ||
      selectedmoveinOption ||
      selectedPriceOption ||
      selectedTypeOption
    ) {
      const SortedList = propertyList
        .filter((property) => {
          if (property.location === selectedLocationOption?.value)
            return property;
        })
        .filter((property) => {
          if (
            property.moveinDate.getFullYear().toString() ===
            selectedmoveinOption.value
          ) {
            return property;
          }
        })
        .filter((property) => {
          if (property.priceperMonth <= selectedPriceOption.value) {
            return property;
          }
        })
        .filter((property) => {
          if (property.type === selectedTypeOption.value) {
            return property;
          }
        });
      toast(`${SortedList.length} Properties Found`);
      setTobeShonwData([...SortedList]);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <nav class="navbar navbar-light navbar-inverse ">
        <div class="container-fluid mt-2">
          <a class="navbar-brand justify-content-center" href="#">
            <div className="navtitle">
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/1295/1295139.png"
                alt=""
                width="30"
                height="24"
                class="d-inline-block align-text-top m-2"
              />
              Property Z
            </div>
          </a>
        </div>
      </nav>
      {/*section one Heading*/}
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-9">
          <div className="Headertitle">Search Properties To Rent </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-end">
          <div className="Headertitle">
            <input
              type="text"
              class="form-control"
              placeholder="Search Not Implemented"
            ></input>
          </div>
        </div>
      </div>
      {/*section two Selector*/}
      <div className="FilterCard">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2">
            <div className="dropdown">
              Location{" "}
              <Select
                options={Locationoptions}
                defaultValue={selectedLocationOption}
                onChange={setLocationSelectedOption}
              />
            </div>
          </div>
          <div className="col-sm-2 col-md-3 col-lg-3">
            <div className="dropdown">
              When{" "}
              <Select
                options={moveinoptions}
                defaultValue={selectedmoveinOption}
                onChange={setmoveinOption}
              />
            </div>
          </div>
          <div className="col-sm-2 col-md-3 col-lg-3">
            <div className="dropdown">
              Price{" "}
              <Select
                options={Priceoptions}
                defaultValue={selectedPriceOption}
                onChange={setPriceSelectedOption}
              />
            </div>
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2">
            <div className="dropdown">
              Property Type{" "}
              <Select
                options={Typenoptions}
                defaultValue={selectedTypeOption}
                onChange={setTypeSelectedOption}
              />
            </div>
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2 d-flex align-items-center">
            <button className="SearchButton" onClick={sortdata}>
              Search
            </button>
          </div>
        </div>
      </div>
      {/*Result Cards */}
      <div className="row mb-4 justify-content-center">
        {tobeshownData.map((card) => (
          <PropertyCard data={card} />
        ))}
      </div>
      <a href="https://www.flaticon.com/free-icons/beds" title="beds icons">
        Beds icons created by Linector - Flaticon
      </a>
    </div>
  );
}

export default App;
