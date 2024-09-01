import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const CalculatorDisplay = ({ currentNumber, previousNumber, operation }) => {
  return (
    <View style={styles.container}>
      {previousNumber !== '' && (
        <Text style={styles.previousNumber}>
          {previousNumber} {operation}
        </Text>
      )}
      <Text style={styles.currentNumber}>
        {currentNumber || '0'}
      </Text>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  previousNumber: {
    fontSize: screenWidth / 15,
    color: '#7c7c7c',
    textAlign: 'right',
  },
  currentNumber: {
    fontSize: screenWidth / 8,
    color: 'white',
    textAlign: 'right',
  },
});

export default CalculatorDisplay;
