
import LoginImg from "../src/images/login_svg.svg"
import Common from "./Common"
function Login() {
    return (
        <Common

            name="Wecome to Login Page!!"
            imgsrc={LoginImg}
            visit="/contact "
            btn="Login Now " />
    )
}

export default Login
