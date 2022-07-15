import Login from './Login';
import Registration from './Registration';

function Landing({ onLogin }) {

    return (
        <>
            <div id="landing">
                <img src="https://www.pngkey.com/png/full/73-739447_the-problem-with-bill-splitting-websites-share-expenses.png" alt="Split bill" />
                <h1>
                $plitz
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <Login onLogin={onLogin} />
                    <Registration onLogin={onLogin} />
            </div>
        </>
    )
}

export default Landing;
