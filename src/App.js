import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [userLogged, setUserLogged] = useState(false);

    function handleChange(event) {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function logUser() {
        if (email.length > 0)
            setUserLogged(true);
    }

    let content;
    if (!userLogged) {
        content = <div>
            <h2>Zaloguj się za pomocą adresu email:</h2>
            {/*{message}*/}
            <input value={email} type="text" onChange={handleChange} className="dlugiePole"/>
            <button onClick={() => logUser()}>
                ZALOGUJ
            </button>
        </div>
    } else {
        content = <div>
            <h2>Witaj {email}.</h2>
            <button onClick={() => {setUserLogged(false); setEmail("")}} >
                WYLOGUJ
            </button>
        </div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>);
}

export default App;