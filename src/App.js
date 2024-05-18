import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let [email, setEmail] = useState('123');

    function handleChange(event) {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    // function EmailLenght(){
    //     if (email.length <4)
    //         return <h2>Twój e-mail jest za mały!</h2>;
    //     else if (email.length <8)
    //         return <h2>Twój e-mail jest w sam raz!</h2>;
    //     else
    //         return <h2>Ale duży email!</h2>;
    // }

    let message;
    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}.</h2>
            {message}
            <input value={email} type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;