import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.jpg'
import Wrapper from '../assets/wrappers/ErrorPage.js'

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='not found' />
                <h2>Page not found</h2>
                <Link to='/'>Back Home</Link>
            </div>
        </Wrapper>
    )
}

export default Error;
