import React from "react";

function BookDetails() {

    let available = true;

    return (
        <div>
            <h2>Book Details</h2>

            {
                available ?
                    <p>Book is available</p>
                    :
                    <p>Book is not available</p>
            }

        </div>
    );
}

export default BookDetails;