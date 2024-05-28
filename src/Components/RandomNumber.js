import React, { useState, useEffect } from 'react';
import Bus1Image from './Images/Bus1.jpg';
//import Bus2Image from './Images/Bus2.jpg';
//import Bus3Image from './Images/Bus3.jpg';
//import Bus4Image from './Images/Bus4.jpg';
//import DataTableCars from './DataTables/DataTableCars.js';
//import DataTableDrivers from './DataTables/DataTableDrivers.js';
//import DataTableFlights from './DataTables/DataTableFlights.js';
//import DataTableRoutes from './DataTables/DataTableRoutes.js';
//import DataTableSchedules from './DataTables/DataTableSchedules.js';
//import DataTableTickets from './DataTables/DataTableTickets.js';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для генерації випадкового числа з певною кількістю цифр
function getRandomNumberWithLength(length) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return getRandomInt(min, max);
}

// Генерація випадкового числа з 10 цифрами
const randomNumWithTenDigits = getRandomNumberWithLength(10);
console.log(randomNumWithTenDigits); 

document.getElementById('randomNumber').innerText = {randomNumWithTenDigits};


  