// FormComponent.js
import React from 'react';
import useFormInput from './useFormInput';

function FormComponent() {
  const nameInput = useFormInput('');
  const emailInput = useFormInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${nameInput.value}, Email: ${emailInput.value}`);
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        {...nameInput} // Spread the properties returned by useFormInput
      />
      <input
        type="email"
        placeholder="Email"
        {...emailInput} // Spread the properties returned by useFormInput
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;