/** @format */

import React, { ChangeEvent, useState, useEffect } from 'react';
import CardForm from './components/Form/CardForm';
import './index.scss';

const App = () => {
  const [number, setNumber] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [expiryMonth, setExpiryMonth] = useState<number>();
  const [expiryYear, setExpiryYear] = useState<number>();
  const [numberClass, setNumberClass] = useState('number-input');
  const [cvcClass, setCvcClass] = useState('cvc-input');
  const [expiryClass, setExpiryClass] = useState<string>('select');

  useEffect(() => {
    setInputValue(number?.match(/(.{1,4})/gim)?.join(' '));
  }, [number]);

  useEffect(() => {
    validateExpiry(expiryMonth, expiryYear);
  }, [expiryMonth, expiryYear]);

  const inputChange = (
    event: ChangeEvent<HTMLInputElement>,
    method: Function,
    num: number,
  ): void | string => {
    if (num === 16) {
      method(event.target.value.split(' ').join(''));

      if (event.target.value.length === 19) {
        setNumberClass('number-input success');
      } else {
        setNumberClass('number-input');
      }
    }
    if (num === 3) {
      method(event.target.value);
      if (event.target.value.length === 3) {
        setCvcClass('cvc-input success');
      } else {
        setCvcClass('cvc-input');
      }
    }
  };

  const validateExpiry = (m: number | undefined, y: number | undefined) => {
    const today = new Date();
    const someday = new Date();

    if (y !== undefined && m !== undefined) {
      someday.setFullYear(y, m, 1);
    }

    if (someday < today) {
      setExpiryClass('select invalid');
    } else if (someday > today) {
      setExpiryClass('select success');
    }
  };

  return (
    <div className="app">
      <CardForm
        {...{
          cvc,
          inputValue,
          expiryMonth,
          setExpiryMonth,
          expiryYear,
          setExpiryYear,
          setNumber,
          inputChange,
          setCvc,
          numberClass,
          expiryClass,
          cvcClass,
        }}
      />
    </div>
  );
};

export default App;
