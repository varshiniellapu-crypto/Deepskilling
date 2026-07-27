function Guest(props) {

    return (
        <div>
            <h1>Welcome Guest</h1>

            <h2>Available Flights</h2>

            <ul>
                <li>Delhi to Mumbai - ₹5000</li>
                <li>Hyderabad to Chennai - ₹3500</li>
                <li>Bangalore to Kolkata - ₹6000</li>
            </ul>

            <button onClick={props.login}>
                Login
            </button>

        </div>
    );
}

export default Guest;