function LocationForm({ handlerSubmitLocation }) {

    const handlerSubmitForm = (event) => {
        event.preventDefault();

        const city = event.target.city.value;
        const state = event.target.state.value;

        const locationData = {
            city: city,
            state: state
        }

        handlerSubmitLocation(locationData);

    }
     
    return (
        <>
            <form onSubmit={handlerSubmitForm}>
                <label>City</label>
                <input type="text" name="city" id="city" />

                <label>State</label>
                <input type="text" name="state" id="state"/>

                <button type="submit">Submit</button>
                
            </form>
        </>
    )
}

export default LocationForm;