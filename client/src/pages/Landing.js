import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage.js'
import {Logo} from '../components'
import {Link} from 'react-router-dom'

const Landing = () => {
    return  (<Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                Note: The authors have worked to ensure that all 
                information in this book is accurate at the time 
                of publication and consistent with general psychiatric
                and medical standards, and that information concerning
                drug dosages, schedules, and routes of administration is
                accurate at the time of publication and consistent with
                standards set by the U.S. Food and Drug Administration
                and the general medical community. As medical research
                and practice continue to advance, however, therapeutic
                standards may change.
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div> 
        </Wrapper>
    )
}

export default Landing;