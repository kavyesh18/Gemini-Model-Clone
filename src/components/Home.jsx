import React ,{useContext}from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/Context'
import './Home.css';

const Home = () => {
    const { onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input
      } = useContext(Context);

  return (
    
    <div className='main'>
    <div className="nav">
      <p>Gemini</p>
      <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
      {showResult
        ? <div className="result">
          <div className='result-title'>
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
              ? <div className="loader">
                <hr className="animated-bg" />
                <hr className="animated-bg" />
                <hr className="animated-bg" />
              </div>
              : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            }
          </div>

        </div>
        : <>
          <div className="greet">
            <p><span>Hello, Users.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest the best Places to visit in paris</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: Financial Planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brain strom your pattern printing logic in programming</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Improve the responsiveness of your website</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </>
      }

<div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home