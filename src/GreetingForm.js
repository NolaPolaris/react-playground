import Greeting from "./Greeting";

function greetingForm() {
    return <form>
         <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
        <label>
        <input type="checkbox" checked="checked" name="remember"/>
        </label>
    </form>
}


export default greetingForm;