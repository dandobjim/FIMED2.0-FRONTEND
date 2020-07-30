import {CONSTANTS} from "../shared/Constants";
import Cookies from "js-cookie";
import cookies from 'next-cookies';

function Example() {
    const { cookie } = cookies(fimedtk);
    console.log(ctx)
    return (
        <p>
            Bearer {cookie}
        </p>
    )
}



export default Example