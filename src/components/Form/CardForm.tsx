/** @format */

import React, { FC, KeyboardEvent } from 'react';
import './formStyles.scss';

interface IFormProps {
  cvc: string;
  inputValue: string | undefined;
  expiryMonth: number | undefined;
  expiryYear: number | undefined;
  numberClass: string;
  expiryClass: string;
  cvcClass: string;
  setExpiryMonth: Function;
  setExpiryYear: Function;
  setNumber: Function;
  inputChange: Function;
  setCvc: Function;
}

const Form: FC<IFormProps> = ({
  cvc,
  expiryMonth,
  expiryYear,
  inputValue,
  inputChange,
  setNumber,
  setExpiryMonth,
  setExpiryYear,
  setCvc,
  numberClass,
  expiryClass,
  cvcClass,
}) => {
  const onlyNumbers = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode < 48 || e.charCode > 57) e.preventDefault();
  };

  return (
    <form>
      <input
        className={`${numberClass}`}
        type="text"
        name="number"
        placeholder="Card Number"
        value={inputValue}
        onChange={(e) => inputChange(e, setNumber, 16)}
        onKeyPress={(e) => onlyNumbers(e)}
        maxLength={19}
      />
      <div className="inputs-wrapper">
        <select
          className={`${expiryClass}`}
          value={expiryMonth}
          onChange={(e) => setExpiryMonth(e.target.value)}>
          <option disabled selected>
            Month
          </option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select
          className={`${expiryClass}`}
          value={expiryYear}
          onChange={(e) => setExpiryYear(e.target.value)}>
          <option disabled selected>
            Year
          </option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
        </select>
        <input
          className={`${cvcClass}`}
          type="text"
          name="cvc"
          placeholder="cvc"
          value={cvc}
          onChange={(e) => inputChange(e, setCvc, 3)}
          onKeyPress={(e) => onlyNumbers(e)}
          maxLength={3}
        />
      </div>
    </form>
  );
};

export default Form;
