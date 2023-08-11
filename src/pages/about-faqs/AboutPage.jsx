import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route: ', location.pathname );

    const goBack = () => {
        history(-1)
    }
    const goFoward = () => {
        history(1)
    }
    const goHome = () => {
        history("/")
    }
    const goNewPath = (path) => {
        history(path)
    }

    return (
        <div>
             <h1>
                About | FAQS Page
             </h1>
             <button onClick={goHome}>Home</button>
             <button onClick={goBack}>Back</button>
             <button onClick={goFoward}>Foward</button>
             {/* <button onClick={goNewPath}>New Path</button> */}
        </div>
    );
}

export default AboutPage;
