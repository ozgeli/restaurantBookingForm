import React, { useState } from 'react';
import './bookingForm.scss';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const checkTimeAvailability = (selectedTime) => {
    return availableTimes.includes(selectedTime);
  };

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time && guests && occasion && checkTimeAvailability(time)) {
      setFeedback('Your reservation submitted successfully.');
      setIsSubmitted(true);
    } else {
      setFeedback('Please ensure all fields are filled correctly and the selected time is available.');
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="reservation-header">Little Lemon Booking Form</h1>
      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange} required>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          min="1"
          max="10"
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
          <option value="">Please select</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button type="submit">Make Your Reservation</button>
        {feedback && (
          <p className={`feedback-message ${isSubmitted ? 'success' : 'error'}`}>
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;


// If available times will taken from an API:

/*  const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        // Example function to fetch available times
        const fetchAvailableTimes = async () => {
            try {
                // Simulating a fetch call to an API
                const response = await fetch('https://example.com/api/available-times');
                const times = await response.json();
                setAvailableTimes(times);
            } catch (error) {
                console.error("Failed to fetch times:", error);
            }
        };

        fetchAvailableTimes();
    }, []); // Empty dependency array means this runs once on mount */
