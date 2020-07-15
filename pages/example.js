import {CONSTANTS} from "../shared/Constants";

function Example({patients}) {
    return (
        <p>
            Esto es un ejemplo:
            {patients.map((s, index) => {
                    return (<div>{s.id}</div>
                    )
                }
            )}
        </p>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${CONSTANTS.API.url}/api/v2/patient/all`, {
        method: "GET",
        headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbG1hIiwiZXhwIjoxNTk0Mjg5NTk3fQ.l_LePiIC5Wn-4I1WbXF0GV6cKQUpK4Pe6S9sWYof_9g"}
    });
    const patients = await res.json();
    console.log(patients)
    return {
        props: {
            patients,
        },
    }
}

export default Example