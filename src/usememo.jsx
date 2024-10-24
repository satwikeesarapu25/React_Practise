import React, { useState, useMemo } from "react";

function Memo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);
    
    // Memoize the factorial calculation, so it only recalculates when `number` changes
    const factorial = useMemo(() => fact(number), [number]);

    function fact(n) {
        console.log('factorial.......');
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
       
    }

   

    return (
        <>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>

            <p>Factorial: {factorial}</p>
            <button onClick={() => setNumber(number + 1)}>increment number</button>
        </>
    );
}

export default Memo;