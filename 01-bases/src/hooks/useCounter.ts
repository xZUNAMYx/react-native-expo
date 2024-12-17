// import React from 'react'

import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState<number>(0);

    const increaseBy = () => {
        setCount(count + 1);
    }

    const decreaseBy = () => {
        setCount(count - 1);
    }
    
    return {
        // Properties
        count,

        // Actions, Methods
        increaseBy,
        decreaseBy
    }
}
