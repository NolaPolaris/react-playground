import Button from './Button';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Julie',
    lastName: 'Aubry-Tirel'
};
  
const element = (
    <h1>
      Hello, my name is {formatName(user)}!
    </h1>
);

function idCard() {
    return (
        <div id="idCard">
        {element} 
        <Button/>
        </div>
    ); 
}

export default idCard;