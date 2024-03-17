import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/landing/Home';
import SignIn from './components/register/signIn/SignIn';
import SignUp from './components/register/signUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_up" element={<SignIn />} />
          <Route path="/sign_in" element={<SignUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
