import React, { useState } from "react";

const Increment = () => {
    const [count, setCount] = useState(0);
    const [hasError, setHasError] = useState(false);

    const increment = () => {
        if (count >= 5) {
            setHasError(true);
            return; // Stop further execution
        }
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    if (hasError) {
        // Instead of throwing an error, just return fallback UI
        return <h1>Oops! Something went wrong. Count cannot exceed 5!</h1>;
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
};

export default Increment;
