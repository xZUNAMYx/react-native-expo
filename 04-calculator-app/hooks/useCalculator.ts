import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lasrOperation = useRef<Operator>();

    useEffect(() => {
        if (lasrOperation.current) {
            const firstFormulaPart = formula.split(' ')[0];
            setFormula(`${ firstFormulaPart } ${ lasrOperation.current } ${ number }`);
        } else {
            setFormula(number);
        }

    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPreviousNumber(subResult.toString());
    }, [formula]);

    const clear = () => {
        setNumber('0');
        setPreviousNumber('0');
        setFormula('0');

        lasrOperation.current = undefined;
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {
        if (number.length === 1) {
            setNumber('0');
        } else if (number.length === 2 && number.includes('-')) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
    }

    const buildNumber = (numberString: string) => {
        // Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);

            }

            // Evaluar si es otro cero, y hay un punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de cero y no tiene un punto
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar 0000.0
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    }

    const setLastNumber = () => {
        calculateResult();

        if (number.endsWith('.')) {
            setNumber(number.slice(0, -1));
        } 

        setPreviousNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lasrOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lasrOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {
        setLastNumber();
        lasrOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lasrOperation.current = Operator.add;
    }    

    const calculateSubResult = () => {
        const [ firstValue, operation, secondValue ] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if ( isNaN(num2) ) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                throw new Error(`Invalid operation ${operation}`);
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${ result }`);

        lasrOperation.current = undefined;
        setPreviousNumber(result.toString());
    }

    return {
        // Properties
        formula,
        number,
        previousNumber,

        // Functions
        buildNumber,
        clear,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult,
    }
}