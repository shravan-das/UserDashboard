import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="home"
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
            Unique Dashboard Experience{" "}
            <strong>Unleash your imagination</strong> and define your own style.
          </p>
        </div>

        <Link to="/dashboard">
          <button className="py-3 px-6 bg-green-500 text-white rounded-full mt-4">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
