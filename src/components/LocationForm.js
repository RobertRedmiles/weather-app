import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './LocationForm.css'


function LocationForm({ handlerSubmitLocation }) {

    const navigate = useNavigate()

    const handlerSubmitForm = (event) => {
        event.preventDefault();

    const city = event.target.city.value;
    const state = event.target.state.value;

    const locationData = {
            city: city,
            state: state
        }

        handlerSubmitLocation(locationData);
        navigate("/weather");

    }
     
    return (
        <>
            <h2 className="formHeader">Hourly Weather App</h2>
            <form className="inputForm" onSubmit={handlerSubmitForm}>
                <label>City</label>
                <input type="text" name="city" id="city" />

                <label>State</label>
                <input type="text" name="state" id="state"/>

                <button className="submit" type="submit">Submit</button>
                
            </form>
            <Outlet/>
        </>
    )
}

export default LocationForm;