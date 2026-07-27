import React, { Component } from "react";


class CurrencyConvertor extends Component {


    constructor(props) {

        super(props);

        this.state = {
            rupees: "",
            euro: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {

        let euroValue = this.state.rupees * 0.011;

        this.setState({
            euro: euroValue
        });

    }



    render() {

        return (

            <div>

                <h2>Currency Convertor</h2>


                <input
                    type="number"
                    placeholder="Enter Rupees"
                    onChange={(e) => this.setState({
                        rupees: e.target.value
                    })}
                />


                <br /><br />


                <button onClick={this.handleSubmit}>
                    Convert
                </button>


                <h3>
                    Euro Value : {this.state.euro}
                </h3>


            </div>

        );
    }

}


export default CurrencyConvertor;