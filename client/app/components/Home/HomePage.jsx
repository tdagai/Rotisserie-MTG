import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import NavBar from './NavBar/NavBar.jsx'
import HeroCarousel from './HeroCarousel/HeroCarousel.jsx';
import Footer from './Footer/Footer.jsx'
import './HomePage.css';

const HomePage = () => {
  const [inputFocused, toggleFocus] = useState(false);
  const biggerThan850 = useMediaPredicate("(min-width: 850px)");
  const biggerThan450 = useMediaPredicate("(min-width: 450px)");

  const handleInputFocus = (e) => {
    e.preventDefault();
    toggleFocus(true);
  };

  const handleInputBlur = (e) => {
    e.preventDefault();
    toggleFocus(false);
  };

  return (
    <div id='homepage-container' >
      <NavBar />
      <div id='homepage-content' >
        <section>
          <HeroCarousel />
        </section>

        <section className='perks' >
          <svg width="177" height="179" viewBox="0 0 177 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="136" cy="30" r="27.5" fill="#2F2F2B" stroke="#FF7128" strokeWidth="5" />
            <path d="M136 158.445C137.369 158.445 138.745 158.459 140.114 158.473C143.582 158.508 147.005 158.542 150.165 158.349C154.609 158.078 158.909 157.348 162.634 155.358C170.41 151.205 174.5 142.297 174.5 125.36C174.5 108.319 170.386 92.7707 163.603 81.3984C156.851 70.0782 147.172 62.5 136 62.5C124.828 62.5 115.149 70.0782 108.397 81.3984C101.614 92.7707 97.5 108.319 97.5 125.36C97.5 142.297 101.59 151.205 109.366 155.358C113.091 157.348 117.391 158.078 121.835 158.349C124.995 158.542 128.418 158.508 131.886 158.473C133.255 158.459 134.631 158.445 136 158.445Z" fill="#2F2F2B" stroke="#FF7128" strokeWidth="5" />
            <circle cx="41" cy="30" r="27.5" fill="#2F2F2B" stroke="#FF7128" strokeWidth="5" />
            <path d="M41 158.445C42.3693 158.445 43.745 158.459 45.1137 158.473C48.5819 158.508 52.0049 158.542 55.1652 158.349C59.6094 158.078 63.9091 157.348 67.6336 155.358C75.4104 151.205 79.5 142.297 79.5 125.36C79.5 108.319 75.3857 92.7707 68.603 81.3984C61.8513 70.0782 52.1717 62.5 41 62.5C29.8283 62.5 20.1487 70.0782 13.397 81.3984C6.61432 92.7707 2.5 108.319 2.5 125.36C2.5 142.297 6.58965 151.205 14.3664 155.358C18.0909 157.348 22.3906 158.078 26.8348 158.349C29.9951 158.542 33.4181 158.508 36.8863 158.473C38.255 158.459 39.6307 158.445 41 158.445Z" fill="#2F2F2B" stroke="#FF7128" strokeWidth="5" />
            <circle cx="88" cy="48" r="27.5" fill="#2F2F2B" stroke="#FF7128" strokeWidth="5" />
            <path d="M88 176.445C89.3693 176.445 90.745 176.459 92.1137 176.473C95.5819 176.508 99.0049 176.542 102.165 176.349C106.609 176.078 110.909 175.348 114.634 173.358C122.41 169.205 126.5 160.297 126.5 143.36C126.5 126.319 122.386 110.771 115.603 99.3984C108.851 88.0782 99.1717 80.5 88 80.5C76.8283 80.5 67.1487 88.0782 60.397 99.3984C53.6143 110.771 49.5 126.319 49.5 143.36C49.5 160.297 53.5896 169.205 61.3664 173.358C65.0909 175.348 69.3906 176.078 73.8348 176.349C76.9951 176.542 80.4181 176.508 83.8863 176.473C85.255 176.459 86.6307 176.445 88 176.445Z" fill="#2F2F2B" stroke="#FF7128" strokeWidth="5" />
          </svg>
          <h2>Create a room and invite your friends or join an already existing room</h2>
        </section>

        <section id='gh-dis-cta' >
          <a href='https://github.com/tdagai/Rotisserie-MTG' target='_blank' rel='noopener' aria-label='project github' >
            <div id='github-cta' >
              <i className="fab fa-github cta-icon"></i>
              <p>Follow the website’s developement on our Github by clicking here!</p>
            </div>
          </a>
          <a href='https://discord.gg/XXpR8a43Ts' target='_blank' rel='noopener' aria-label='discord server invite' >
            <div id='discord-cta' >
              <i className="fab fa-discord cta-icon"></i>
              <p>Want to find more people to draft with? Join our moderated Discord community here!</p>
            </div>
          </a>
        </section>
        {
          biggerThan850
            ?
            (
              <section className='perks' >
                <h2>Draft powerful cards from throughout Magic’s history</h2>
                <svg width="161" height="233" viewBox="0 0 161 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="158.446" height="231" rx="11" fill="#3D3D38" stroke="#FF7128" strokeWidth="2" />
                  <path d="M101.034 116.956C101.034 116.956 112.303 142.165 115.243 164.853C118.183 187.54 115.243 218.799 115.243 218.799" stroke="black" strokeWidth="7" />
                  <path d="M74.8383 87.3977C78.1681 111.021 102.028 117.138 102.028 117.138C102.028 117.138 121.328 101.459 114.916 78.519C108.503 55.5789 81.4036 18.5623 81.4036 18.5623C81.4036 18.5623 71.5086 63.7745 74.8383 87.3977Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M95.9725 76.6575C112.178 93.7373 102.395 116.951 102.395 116.951C102.395 116.951 78.5649 123.191 64.7603 104.007C50.9557 84.8236 38.8629 40.1808 38.8629 40.1808C38.8629 40.1808 79.7669 59.5777 95.9725 76.6575Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M80.9598 82.3937C79.4447 106.213 101.548 117.3 101.548 117.3C101.548 117.3 123.594 106.092 121.955 82.2814C120.317 58.4707 101.287 16.4662 101.287 16.4662C101.287 16.4662 82.4749 58.5744 80.9598 82.3937Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M86.2841 79.688C105.586 92.9284 100.706 117.728 100.706 117.728C100.706 117.728 78.6569 128.928 61.2785 113.116C43.9001 97.3046 23.0533 56.2235 23.0533 56.2235C23.0533 56.2235 66.9822 66.4476 86.2841 79.688Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M69.1189 94.7545C77.9535 116.826 102.543 116.763 102.543 116.763C102.543 116.763 117.538 96.7095 105.876 76.075C94.2142 55.4404 59.1512 26.3532 59.1512 26.3532C59.1512 26.3532 60.2843 72.6831 69.1189 94.7545Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M104.148 77.9838C105.722 80.0697 105.862 83.2068 104.493 86.7821C103.134 90.3346 100.339 94.135 96.3945 97.2868C92.4504 100.438 88.1801 102.284 84.4985 102.76C80.7934 103.239 77.8742 102.323 76.2999 100.237C74.7256 98.1512 74.5859 95.0141 75.9542 91.4388C77.3138 87.8863 80.109 84.0859 84.0531 80.9341C87.9972 77.7824 92.2676 75.9366 95.9492 75.4607C99.6543 74.9818 102.573 75.8978 104.148 77.9838Z" fill="#2F2F2B" stroke="#FF7128" strokeWidth="2" />
                  <path d="M74.4368 88.281C97.2174 92.7871 102.061 117.594 102.061 117.594C102.061 117.594 85.9555 136.714 63.9794 129.07C42.0033 121.426 7.31055 91.8725 7.31055 91.8725C7.31055 91.8725 51.6563 83.7749 74.4368 88.281Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M95.8812 77.3833C85.5115 98.7359 101.71 117.773 101.71 117.773C101.71 117.773 126.254 116.234 133.714 93.6319C141.173 71.0294 139.455 24.7186 139.455 24.7186C139.455 24.7186 106.251 56.0307 95.8812 77.3833Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                </svg>
              </section>
            )
            : (
              <section className='perks' >
                <svg width="161" height="233" viewBox="0 0 161 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="158.446" height="231" rx="11" fill="#3D3D38" stroke="#FF7128" strokeWidth="2" />
                  <path d="M101.034 116.956C101.034 116.956 112.303 142.165 115.243 164.853C118.183 187.54 115.243 218.799 115.243 218.799" stroke="black" strokeWidth="7" />
                  <path d="M74.8383 87.3977C78.1681 111.021 102.028 117.138 102.028 117.138C102.028 117.138 121.328 101.459 114.916 78.519C108.503 55.5789 81.4036 18.5623 81.4036 18.5623C81.4036 18.5623 71.5086 63.7745 74.8383 87.3977Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M95.9725 76.6575C112.178 93.7373 102.395 116.951 102.395 116.951C102.395 116.951 78.5649 123.191 64.7603 104.007C50.9557 84.8236 38.8629 40.1808 38.8629 40.1808C38.8629 40.1808 79.7669 59.5777 95.9725 76.6575Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M80.9598 82.3937C79.4447 106.213 101.548 117.3 101.548 117.3C101.548 117.3 123.594 106.092 121.955 82.2814C120.317 58.4707 101.287 16.4662 101.287 16.4662C101.287 16.4662 82.4749 58.5744 80.9598 82.3937Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M86.2841 79.688C105.586 92.9284 100.706 117.728 100.706 117.728C100.706 117.728 78.6569 128.928 61.2785 113.116C43.9001 97.3046 23.0533 56.2235 23.0533 56.2235C23.0533 56.2235 66.9822 66.4476 86.2841 79.688Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M69.1189 94.7545C77.9535 116.826 102.543 116.763 102.543 116.763C102.543 116.763 117.538 96.7095 105.876 76.075C94.2142 55.4404 59.1512 26.3532 59.1512 26.3532C59.1512 26.3532 60.2843 72.6831 69.1189 94.7545Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M104.148 77.9838C105.722 80.0697 105.862 83.2068 104.493 86.7821C103.134 90.3346 100.339 94.135 96.3945 97.2868C92.4504 100.438 88.1801 102.284 84.4985 102.76C80.7934 103.239 77.8742 102.323 76.2999 100.237C74.7256 98.1512 74.5859 95.0141 75.9542 91.4388C77.3138 87.8863 80.109 84.0859 84.0531 80.9341C87.9972 77.7824 92.2676 75.9366 95.9492 75.4607C99.6543 74.9818 102.573 75.8978 104.148 77.9838Z" fill="#2F2F2B" stroke="#FF7128" strokeWidth="2" />
                  <path d="M74.4368 88.281C97.2174 92.7871 102.061 117.594 102.061 117.594C102.061 117.594 85.9555 136.714 63.9794 129.07C42.0033 121.426 7.31055 91.8725 7.31055 91.8725C7.31055 91.8725 51.6563 83.7749 74.4368 88.281Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                  <path d="M95.8812 77.3833C85.5115 98.7359 101.71 117.773 101.71 117.773C101.71 117.773 126.254 116.234 133.714 93.6319C141.173 71.0294 139.455 24.7186 139.455 24.7186C139.455 24.7186 106.251 56.0307 95.8812 77.3833Z" fill="black" stroke="#FF7128" strokeWidth="2" />
                </svg>
                <h2>Draft powerful cards from throughout Magic’s history</h2>
              </section>
            )
          }
        <section id='newsletter-cta' >
          <h2>
            Wanna be the first to hear about improvements coming to the website?
            <br></br>
            Enter your email below to join our newsletter!
          </h2>

          <label>
            <p>Email</p>
            <input
              type='email'
              className={`${inputFocused ? 'newsletter-input-focused' : ''}`}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur} >
            </input>
            <button
              type='submit'
              className={`button-style${inputFocused && biggerThan450 ? ' newsletter-input-focused' : ''}`}
              onClick={(e) => e.preventDefault()} >
              submit
            </button>
          </label>
        </section>

        <section className='perks' >
          <svg width="326" height="187" viewBox="0 0 326 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.366025" y="-1.36603" width="92.8559" height="134.992" rx="11" transform="matrix(-0.866025 0.5 0.5 0.866025 83.0495 11.7195)" fill="#3D3D38" />
            <rect x="0.366025" y="-1.36603" width="92.8559" height="134.992" rx="11" transform="matrix(-0.866025 0.5 0.5 0.866025 83.0495 11.7195)" fill="url(#paint0_linear)" />
            <rect x="0.366025" y="-1.36603" width="92.8559" height="134.992" rx="11" transform="matrix(-0.866025 0.5 0.5 0.866025 83.0495 11.7195)" stroke="#FF7128" strokeWidth="2" />
            <rect x="0.707107" y="-1.22474" width="92.8559" height="134.992" rx="11" transform="matrix(-0.965926 0.258819 0.258819 0.965926 146.981 2.77526)" fill="#3D3D38" />
            <rect x="0.707107" y="-1.22474" width="92.8559" height="134.992" rx="11" transform="matrix(-0.965926 0.258819 0.258819 0.965926 146.981 2.77526)" fill="url(#paint1_linear)" />
            <rect x="0.707107" y="-1.22474" width="92.8559" height="134.992" rx="11" transform="matrix(-0.965926 0.258819 0.258819 0.965926 146.981 2.77526)" stroke="#FF7128" strokeWidth="2" />
            <rect x="117" y="8" width="93" height="135" rx="11" fill="#3D3D38" />
            <rect x="117" y="8" width="93" height="135" rx="11" fill="url(#paint2_linear)" />
            <rect x="117" y="8" width="93" height="135" rx="11" stroke="#FF7128" strokeWidth="2" />
            <rect x="182.083" y="7.36644" width="92.8559" height="134.992" rx="11" transform="rotate(15 182.083 7.36644)" fill="#3D3D38" />
            <rect x="182.083" y="7.36644" width="92.8559" height="134.992" rx="11" transform="rotate(15 182.083 7.36644)" fill="url(#paint3_linear)" />
            <rect x="182.083" y="7.36644" width="92.8559" height="134.992" rx="11" transform="rotate(15 182.083 7.36644)" stroke="#FF7128" strokeWidth="2" />
            <rect x="243.249" y="22.0744" width="92.8559" height="134.992" rx="11" transform="rotate(30 243.249 22.0744)" fill="#3D3D38" />
            <rect x="243.249" y="22.0744" width="92.8559" height="134.992" rx="11" transform="rotate(30 243.249 22.0744)" fill="url(#paint4_linear)" />
            <rect x="243.249" y="22.0744" width="92.8559" height="134.992" rx="11" transform="rotate(30 243.249 22.0744)" stroke="#FF7128" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear" x1="45.4279" y1="0" x2="45.4279" y2="132.992" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="45.4279" y1="0" x2="45.4279" y2="132.992" gradientUnits="userSpaceOnUse">
                <stop stopColor="#958BD7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="163.5" y1="9" x2="163.5" y2="142" gradientUnits="userSpaceOnUse">
                <stop stopColor="#262626" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint3_linear" x1="228.218" y1="8.59119" x2="228.218" y2="141.583" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EA8989" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint4_linear" x1="289.043" y1="23.4404" x2="289.043" y2="156.432" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55C961" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <h2>Draft powerful cards from throughout Magic’s history</h2>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;