import React from "react";

function Welcome() {

    function displayMessage(message) {
        alert(message);
    }


    return (
        <div>

            <h2>Welcome Example</h2>

            <button onClick={() => displayMessage("welcome")}>
                Say Welcome
            </button>

        </div>
    );
}

export default Welcome;