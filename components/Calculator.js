import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState(null);

  const handleButtonPress = (input) => {
    if (['+', '-', '×', '÷'].includes(input)) {
      if (currentNumber === '') return;
      if (previousNumber !== '') {
        calculate();
      }
      setOperation(input);
      setPreviousNumber(currentNumber);
      setCurrentNumber('');
    } else if (input === '=') {
      calculate();
    } else if (input === 'C') {
      clear();
    } else if (input === '+/-') {
      toggleSign();
    } else if (input === '%') {
      percent();
    } else {
      setCurrentNumber(currentNumber + input);
    }
  };

  const calculate = () => {
    let result;
    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operation) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '×':
        result = previous * current;
        break;
      case '÷':
        result = previous / current;
        break;
      default:
        return;
    }

    setCurrentNumber(result.toString());
    setOperation(null);
    setPreviousNumber('');
  };

  const clear = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation(null);
  };

  const toggleSign = () => {
    setCurrentNumber((prev) => (prev.charAt(0) === '-' ? prev.slice(1) : `-${prev}`));
  };

  const percent = () => {
    setCurrentNumber((prev) => (parseFloat(prev) / 100).toString());
  };

  const buttons = [
    ['C', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <View style={styles.container}>
      <CalculatorDisplay currentNumber={currentNumber} previousNumber={previousNumber} operation={operation} />
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((buttonValue, buttonIndex) => (
              <CalculatorButton key={buttonIndex} label={buttonValue} onPress={handleButtonPress} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Calculator;
