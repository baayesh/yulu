import React from "react";

const BookingForm = ({ open, close }) => {
  if (!open) return null;

  return (
    <div>
      <div className="booking-form__overlay" >

        <div className="booking__form ">
        <button onClick={close}>Close</button>
          <div className="booking__form__input__fields">
            <label for="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className="booking__form__input__fields">
            <label for="city">Pickup Date</label>
            <input type="date" id="city" />
          </div>
          <div className="booking__form__input__fields">
            <label for="city">Drop Date</label>
            <input type="date" id="city" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
