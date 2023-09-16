"use strict";
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-password");
const passwordField = document.querySelector("#password-field");

// Function To generate a random password
const generatePassword = function () {
  const length = 12;
  let password = ``;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = upperCase.toLowerCase();
  const numbers = "1234567890";
  const symbols = `!@#$%^&*()_+-=[]{}|/.,?><~`;
  const allChars = upperCase + lowerCase + numbers + symbols;
  password += `${
    upperCase[Math.floor(Math.random() * (upperCase.length - 1))]
  }${lowerCase[Math.floor(Math.random() * (lowerCase.length - 1))]}${
    numbers[Math.floor(Math.random() * (numbers.length - 1))]
  }${symbols[Math.floor(Math.random() * (symbols.length - 1))]}`;
  while (password.length < length) {
    password += `${
      allChars[Math.floor(Math.random() * (allChars.length - 1))]
    }`;
  }

  passwordField.value = password;
};

// Function To copy the password using clipboard api
const copyPassword = async function () {
  try {
    if (!passwordField.value) return;
    passwordField.select();
    await navigator.clipboard.writeText(passwordField.value);
    return passwordField.value;
  } catch (err) {
    console.error("Failed to Copy, Something went wrong");
  }
};

// Event Handlers
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
