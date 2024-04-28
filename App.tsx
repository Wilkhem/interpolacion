import React from 'react';
import { View } from 'react-native';
import CalculatorComponent from './src/screen/CalculatorComponent';

const App: React.FC = () => {
  return (
    <View>
      <CalculatorComponent a={5} b={2} operation={1} />
      <CalculatorComponent a={5} b={2} operation={2} />
      <CalculatorComponent a={5} b={2} operation={3} />
      <CalculatorComponent a={5} b={2} operation={4} />
      <CalculatorComponent a={5} b={0} operation={4} />
    </View>
  );
};

export default App;