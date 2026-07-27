import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
    const average = props.Total / props.goal;

    return (
        <div>
            <h1>Student Management Portal</h1>

            <table>
                <tbody>

                    <tr>
                        <td>Name</td>
                        <td>{props.Name}</td>
                    </tr>

                    <tr>
                        <td>School</td>
                        <td>{props.School}</td>
                    </tr>

                    <tr>
                        <td>Total Score</td>
                        <td>{props.Total}</td>
                    </tr>

                    <tr>
                        <td>Goal</td>
                        <td>{props.goal}</td>
                    </tr>

                    <tr>
                        <td>Average Score</td>
                        <td>{average}</td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
}

export default CalculateScore;