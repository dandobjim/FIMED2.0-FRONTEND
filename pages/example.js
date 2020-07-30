import {CONSTANTS} from "../shared/Constants";
import Cookies from "js-cookie";

function Example({patients}) {
    const cookie = Cookies.get("fimedtk")
    return (
        <p>
            Bearer {cookie}
        </p>
    )
}



export default Example