import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const someDelayFunction = (callback) => {
    setTimeout(() => {
      setIsAnimating(false);
      callback();
    }, 1000);
  };

  const handleButtonClick = () => {
    setIsAnimating(true);
    someDelayFunction(() => {
      navigate('/dashboard');
    });
  };

  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #3498db',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <section
      className={`home ${isAnimating ? 'animating' : ''}`}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div className="home-content">
        <div>
          <h1 className="head-text">
            GET <br className="xl:block hidden" /> STARTED.
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className="max-w-md font-normal text-black-600 text-base">
            Unique Dashboard Experience{' '}
            <strong>Unleash your imagination</strong> and define your own style.
          </p>
        </div>

        <button
          onClick={handleButtonClick}
          className="py-3 px-6 bg-green-500 text-white rounded-full mt-4"
          disabled={isAnimating}
        >
          {isAnimating ? (
            <div style={spinnerStyle}></div>
          ) : (
            'Get Started'
          )}
        </button>
      </div>
    </section>
  );
};

export default Home;
