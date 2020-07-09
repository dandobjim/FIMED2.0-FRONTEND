import {CONSTANTS} from "../shared/Constants";

function Example({string}) {
    return (
        <p>
            Esto es un ejemplo:
            {string.map((s, index) => {
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
        headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE1OTQyODcwNDF9.WZQnNXOrQhomOjRxlGdCe3Ctvzn4FAkyNwSLkwYPDck"}
    });
    const string = await res.json();
    console.log(string)
    return {
        props: {
            string,
        },
    }
}

export default Example