function formatName(user) {
    return (user.firstName + ' ' + user.lastName);
}

const user = {
    firstName:'Theodore',
    lastName:'Manganese'
}

function Greeting(){
    
    if (user) {
        return <p>Oh hello beautiful {formatName(user)} !</p>
    } else {
        return <p>Oh hello beautiful Stranger ! May I give you a nickname ?</p>
    }
}

export default Greeting;
