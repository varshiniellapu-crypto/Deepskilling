import React from "react";

function CourseDetails() {

    let login = true;

    let message;

    if (login) {
        message = "Course details displayed";
    }
    else {
        message = "Please login to view course";
    }


    const courses = [
        {
            id: 1,
            name: "React JS"
        },
        {
            id: 2,
            name: "Java"
        },
        {
            id: 3,
            name: "Python"
        }
    ];


    return (

        <div>

            <h2>Course Details</h2>

            <p>{message}</p>


            <h3>Available Courses</h3>


            <ul>

                {
                    courses.map(course =>
                    (
                        <li key={course.id}>
                            {course.name}
                        </li>
                    ))
                }

            </ul>


        </div>

    );

}

export default CourseDetails;