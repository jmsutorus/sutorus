import React, { Component } from 'react';
import './ProjectsHome.css';
import { NavLink } from 'react-router-dom';
import FindPI from '../Numbers/FindPI/FindPI';
import FindE from '../Numbers/FindE/FindE';
import Fibo from '../Numbers/Fibo/Fibo';
import PrimeFact from '../Numbers/PrimeFact/PrimeFact';
import NextPrime from '../Numbers/NextPrime/NextPrime';
import TileCost from '../Numbers/TileCost/TileCost';
import MortgageCalc from '../Numbers/MortgageCalc/MortgageCalc';
import ChangeReturn from '../Numbers/ChangeReturn/ChangeReturn';
import BinaryToDecimal from '../Numbers/BinaryToDecimal/BinaryToDecimal';
import Calculator from '../Numbers/Calculator/Calculator';
import AlarmClock from '../Numbers/AlarmClock/AlarmClock';
import CoinFlip from '../Numbers/CoinFlipSimulation/CoinFlipSimulation';
import CreditCardValidator from '../Numbers/CreditCardValidator/CreditCardValidator';
import HappyNumbers from '../Numbers/HappyNumbers/HappyNumbers'
import DistanceBetweenCities from '../Numbers/DistanceBetweenCities/DistanceBetweenCities'
import FactorialFinder from '../Numbers/FactorialFinder/FactorialFinder'
import FastExponentiation from '../Numbers/FastExponentiation/FastExponentiation';
import LimitCalculator from '../Numbers/LimitCalculator/LimitCalculator';
import NumberNames from '../Numbers/NumberNames/NumberNames';
import TaxCalculator from '../Numbers/TaxCalculator/TaxCalculator';
import CollatzConjecture from '../Classic/CollatzConjecture/CollatzConjecture';
import MergeSort from '../Classic/Sorting/MergeSort';
import BubbleSort from '../Classic/Sorting/BubbleSort';
import SieveofEratosthenes from '../Classic/SieveofEratosthenes/SieveofEratosthenes';

class ProjectsHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="projects-page">
      <FindPI></FindPI>
      <FindE></FindE>
      <Fibo></Fibo>
      <PrimeFact></PrimeFact>
      <NextPrime></NextPrime>
      <TileCost></TileCost>
      <MortgageCalc></MortgageCalc>
      <ChangeReturn></ChangeReturn>
      <BinaryToDecimal></BinaryToDecimal>
      <TaxCalculator></TaxCalculator>
      <CoinFlip></CoinFlip>
      <CreditCardValidator></CreditCardValidator>
      <HappyNumbers></HappyNumbers>
      <FactorialFinder></FactorialFinder>
      <FastExponentiation></FastExponentiation>

      <Calculator></Calculator>
      <AlarmClock></AlarmClock>
      <DistanceBetweenCities></DistanceBetweenCities>

      <LimitCalculator></LimitCalculator>
      <NumberNames></NumberNames>
      
      <CollatzConjecture></CollatzConjecture>
      <MergeSort></MergeSort>
      <BubbleSort></BubbleSort>
      <SieveofEratosthenes></SieveofEratosthenes>
    </div>
    );
  }
}

export default ProjectsHome;