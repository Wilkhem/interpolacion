import React from 'react';
import { View, Text } from 'react-native';

interface CalculatorProps {
  a: number;
  b: number;
  operation: number;
}

const CalculatorComponent: React.FC<CalculatorProps> = ({ a, b, operation }) => {
  let result = 0;

  switch (operation) {
    case 1:
      result = a + b;
      break;
    case 2:
      result = a - b;
      break;
    case 3:
      result = a * b;
      break;
    case 4:
      if (b !== 0) {
        result = a / b;
      } else {
        return (
          <View>
            <Text>Error: División por cero</Text>
          </View>
        );
      }
      break;
    default:
      return (
        <View>
          <Text>Error: Operación no válida</Text>
        </View>
      );
  }

  return (
    <View>
      <Text>Resultado: {result}</Text>
    </View>
  );
};

export default CalculatorComponent;