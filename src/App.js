import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      
      <section className='section' id='introduction'>
        <div className='container'>
          <div className='column has-text-centered'>
            <h1 className='title is-1'>Hi! I'm Alphonso.</h1>
            <h2 className='subtitle'>3rd Year Computer Engineering Student at the University of Alberta</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
