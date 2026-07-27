function User(props) {

    return (
        <div>

            <h1>Welcome User</h1>

            <h2>Available Flights</h2>

            <ul>
                <li>Delhi to Mumbai - ₹5000</li>
                <li>Hyderabad to Chennai - ₹3500</li>
                <li>Bangalore to Kolkata - ₹6000</li>
            </ul>


            <button>
                Book Ticket
            </button>

            <br /><br />

            <button onClick={props.logout}>
                Logout
            </button>

        </div>
    );
}

export default User;