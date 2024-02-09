import React from 'react';
import Nav from './components/navBar/Nav';
import Main from './components/main/Main'
import BookingForm from './components/bookingForm/BookingForm';

const App = () => {
  return (
    <div>
      <Nav/>
      <Main/>
      <BookingForm/>
    </div>
  )
}

export default App