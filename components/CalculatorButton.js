import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const CalculatorButton = ({ label, onPress }) => {
  // Definindo cores específicas para os botões com base no valor
  const isOperator = ['÷', '×', '-', '+', '='].includes(label);
  const isSpecial = ['C', '+/-', '%'].includes(label);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator ? styles.operatorButton : isSpecial ? styles.specialButton : styles.numberButton,
        label === '0' && styles.zeroButton,
      ]}
      onPress={() => onPress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  numberButton: {
    backgroundColor: '#505050',
    width: screenWidth / 5.5,
    height: screenWidth / 5.5,
    borderRadius: screenWidth / 5.5 / 2,
  },
  operatorButton: {
    backgroundColor: '#FF9500',
    width: screenWidth / 5.5,
    height: screenWidth / 5.5,
    borderRadius: screenWidth / 5.5 / 2,
  },
  specialButton: {
    backgroundColor: '#D4D4D2',
    width: screenWidth / 5.5,
    height: screenWidth / 5.5,
    borderRadius: screenWidth / 5.5 / 2,
  },
  zeroButton: {
    width: screenWidth / 2.4, // Botão "0" ocupa o espaço de dois botões
    borderRadius: screenWidth / 5.5 / 2,
  },
  buttonText: {
    fontSize: screenWidth / 10,
    color: 'white',
  },
});

export default CalculatorButton;
