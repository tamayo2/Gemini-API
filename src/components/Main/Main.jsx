import './Main.css'
import {assets} from "../../assets/assets.js";

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt='asset' />
            </div>
            <div className='main-container' >
                <div className='greet'>
                    <p><span>Hello, Dev</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className= "cards">
                    <div className='card'>
                        <p>Suggest beatiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt='compass' />
                    </div>
                    <div className='card'>
                        <p>Suggest beatiful places to see on an upcoming road trip</p>
                        <img src={assets.bulb_icon} alt='compass' />
                    </div>
                    <div className='card'>
                        <p>Suggest beatiful places to see on an upcoming road trip</p>
                        <img src={assets.message_icon} alt='compass' />
                    </div>
                    <div className='card'>
                        <p>Suggest beatiful places to see on an upcoming road trip</p>
                        <img src={assets.code_icon} alt='compass' />
                    </div>
                </div>
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt='gallery' />
                            <img src={assets.mic_icon} alt='gallery'/>
                            <img src={assets.send_icon} alt='gallery' />
                        </div>
                    </div>
                    <p className='bottom-info '>
                        Gemini may display inaccurate info, including about people, so double-check
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;