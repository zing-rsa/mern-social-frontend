import zing from '../../assets/zing-long.jpg';
import './about.css';

function About() {
    return (
        <div className='about-page'>
            <div className='about-container'>
                <div className="about-header">
                    <div className="about-header-avatar-container">
                        <img className='about-avatar' src={zing}></img>
                    </div>
                    <div className='about-header-text'>
                        <div className='about-header-upper'>zing-rsa</div>
                        <div className='about-header-lower'><i>Software Developer - Website author</i></div>
                    </div>
                </div>
                <div className="about-body">
                Mern Social is a code project that aims to simulate a social media similar to Twitter, where users can create accounts, log in, and post short messages + media to share with others. Users can also follow and unfollow each other, as well as like and reply to posts.
                <br /><br />The primary purpose of this project was to explore the JavaScript(MERN) ecosystem and improve my skills in React and API design. In an effort to learn more in these fields, where I could, I have minimized use of libraries to gain a more vanilla understanding of the technology. For example, I was curious how production applications implement their login/refresh mechanism, so the mechanism used in this site is written completely by me.
                <br /><br />Overall, this project provided an opportunity to expand my skill-set and further my experience in developing web applications. I plan to leave this project as an open sandbox with the idea to explore and implement ideas I become interested in the future. 
                <br /><br />Thanks for checking it out.
                </div>
                <div className='about-links'>
                    <div className='about-link'>Backend - <a href='https://github.com/zing-rsa/mern-social-backend' target='_blank'>github.com/zing-rsa/mern-social-backend</a></div>
                    <div className='about-link'>Frontend - <a href='https://github.com/zing-rsa/mern-social-frontend' target='_blank'>github.com/zing-rsa/mern-social-frontend</a></div>
                </div>
            </div>
        </div>
    )
}

export default About;