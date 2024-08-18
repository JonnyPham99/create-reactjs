import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Hau';
    const age = 18;
    const isFemale = true;
    const student = {
        name: 'Easy frontend'
    };
    const colorlist = ['red', 'green', 'blue'] <
        p > { age } < /p> <
    p > { name } < /p> { isFemale ? < p > Male < /p >: < p > Female < /p > } 



    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}

export default App;