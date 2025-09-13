import { Divide } from 'lucide-react';
import React from 'react';
function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1e90ff 10%, #ffe082 100%)',
      padding: '60px 0',
      textAlign: 'center',
      color: '#232323'
    }}>
      <h1 style={{fontSize: '2.5rem'}}>Invest in Your Future, Today</h1>
      <p style={{fontSize: '1.25rem', margin: '20px 0'}}>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button style={{
        background: '#1e90ff',
        color: '#fff',
        padding: '12px 36px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(30,144,255,0.3)'
      }}>Open Account</button>
    </section>
  );
}


export default Hero;