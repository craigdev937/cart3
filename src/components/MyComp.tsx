import React from "react";

interface NUM {
    initialCount?: number
};

export const MyComp = ({initialCount = 0}: NUM) => {
    const [count, setCount] = React.useState(initialCount);

    return (
        <React.Fragment>
            <h1 data-testid="count-display">Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Increment</button>
        </React.Fragment>
    );
};



