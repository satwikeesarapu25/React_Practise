// useFormInput.js
import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => setValue(initialValue);

  return {
    value,
    onChange: handleChange,
    reset,
  };
}

export default useFormInput;