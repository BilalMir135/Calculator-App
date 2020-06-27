/* ***************************************Drawer*************************************** */

//to open
$('.hamburger .fas').click(function () {
  $('.wrapper').addClass('active');
});

//to close
$('.wrapper .sidebar .close').click(function () {
  $('.wrapper').removeClass('active');
});

//to close after feature selection
$('.wrapper .content button').click(function () {
  $('.wrapper').removeClass('active');
});

//to close on click logo
$('.wrapper .content h2').click(function () {
  $('.wrapper').removeClass('active');
});

/* ***************************************Tool Tip*************************************** */

tippy('#standard', {
  content: 'Standard',
  arrow: false,
});

tippy('#weight', {
  content: 'Weight & Mass',
  arrow: false,
});

tippy('#length', {
  content: 'Length',
  arrow: false,
});

tippy('#volume', {
  content: 'Volume',
  arrow: false,
});

tippy('#temp', {
  content: 'Temperature',
  arrow: false,
});
tippy('#time', {
  content: 'Time',
  arrow: false,
});

/* ***************************************Functionalities*************************************** */

//clear screens
const calculators = document.getElementById('cals').children;

const clearScreens = () => {
  for (let i = 0; i < calculators.length; i++) {
    calculators[i].style.display = 'none';
  }
};

//chnage calculator
const changeCalculator = (e, screenID, screenDisplay) => {
  const screen = document.getElementById(screenID);

  if (screen.style.display !== 'block' && screen.style.display !== 'flex') {
    clearScreens();
    screen.style.display = screenDisplay;
    e.value
      ? (document.getElementById('calHeading').innerHTML = e.value)
      : (document.getElementById('calHeading').innerHTML = '');
  }
};

//insert value in input field
const insert = (inputID, btnValue) => {
  let inputField = document.getElementById(inputID);
  if (inputField.value === '0') {
    inputField.value = btnValue;
  } else if (btnValue === '.') {
    if (!(inputField.value.indexOf('.') > -1)) {
      inputField.value += '.';
    }
  } else {
    inputField.value += btnValue;
  }
};

//insert sign in input field
const insertSign = (inputID) => {
  let inputField = document.getElementById(inputID);
  if (inputField.value !== '0') {
    if (inputField.value.charAt(0) === '-') {
      inputField.value = inputField.value.replace('-', '');
    } else {
      inputField.value = '-' + inputField.value;
    }
  }
};

//clear input field
const clean = (inputID) => {
  document.getElementById(inputID).value = '0';
};

//clear both input fields
const cleanResults = (inputID, outputID) => {
  document.getElementById(inputID).value = '0';
  document.getElementById(outputID).value = '0';
};

//backspace
const back = (inputID) => {
  let inputField = document.getElementById(inputID);
  if (inputField.value.length === 1) {
    inputField.value = '0';
  } else {
    inputField.value = inputField.value.substring(
      0,
      inputField.value.length - 1
    );
  }
};

/* ***************************************Calculations*************************************** */

//standard
const scEvaluate = (inputID) => {
  document.getElementById(inputID).value = eval(
    document.getElementById(inputID).value
  );
};

//weight & mass
const weightEvaluate = () => {
  const weightOutput = document.getElementById('weightOutput');
  const weightInput = document.getElementById('weightInput');
  const wegInSel = document.getElementById('wegInSel');
  const wegOutSel = document.getElementById('wegOutSel');
  if (wegInSel.value === 'mg') {
    if (wegOutSel.value === 'g') {
      weightOutput.value = (weightInput.value / 1000).toExponential(1);
    } else if (wegOutSel.value === 'kg') {
      weightOutput.value = (weightInput.value / 1000000).toExponential(1);
    } else if (wegOutSel.value === 'pounds') {
      weightOutput.value = (weightInput.value / 453592).toExponential(1);
    } else {
      weightOutput.value = weightInput.value;
    }
  } else if (wegInSel.value === 'g') {
    if (wegOutSel.value === 'mg') {
      weightOutput.value = (weightInput.value * 1000).toExponential(1);
    } else if (wegOutSel.value === 'kg') {
      weightOutput.value = (weightInput.value / 1000).toExponential(1);
    } else if (wegOutSel.value === 'pounds') {
      weightOutput.value = (weightInput.value / 454).toExponential(1);
    } else {
      weightOutput.value = weightInput.value;
    }
  } else if (wegInSel.value === 'kg') {
    if (wegOutSel.value === 'mg') {
      weightOutput.value = (weightInput.value * 1000000).toExponential(1);
    } else if (wegOutSel.value === 'g') {
      weightOutput.value = (weightInput.value * 1000).toExponential(1);
    } else if (wegOutSel.value === 'pounds') {
      weightOutput.value = (weightInput.value * 2.205).toExponential(1);
    } else {
      weightOutput.value = weightInput.value;
    }
  } else {
    if (wegOutSel.value === 'mg') {
      weightOutput.value = (weightInput.value * 453592).toExponential(1);
    } else if (wegOutSel.value === 'g') {
      weightOutput.value = (weightInput.value * 454).toExponential(1);
    } else if (wegOutSel.value === 'kg') {
      weightOutput.value = (weightInput.value / 2.205).toExponential(1);
    } else {
      weightOutput.value = weightInput.value;
    }
  }
};

//length
const lengthEvaluate = () => {
  const lengthOutput = document.getElementById('lengthOutput');
  const lengthInput = document.getElementById('lengthInput');
  const lenInSel = document.getElementById('lenInSel');
  const lenOutSel = document.getElementById('lenOutSel');
  if (lenInSel.value === 'cm') {
    if (lenOutSel.value === 'm') {
      lengthOutput.value = (lengthInput.value / 100).toExponential(1);
    } else if (lenOutSel.value === 'km') {
      lengthOutput.value = (lengthInput.value / 100000).toExponential(1);
    } else if (lenOutSel.value === 'inch') {
      lengthOutput.value = (lengthInput.value / 2.54).toExponential(1);
    } else {
      lengthOutput.value = lengthInput.value;
    }
  } else if (lenInSel.value === 'm') {
    if (lenOutSel.value === 'cm') {
      lengthOutput.value = (lengthInput.value * 100).toExponential(1);
    } else if (lenOutSel.value === 'km') {
      lengthOutput.value = (lengthInput.value / 1000).toExponential(1);
    } else if (lenOutSel.value === 'inch') {
      lengthOutput.value = (lengthInput.value * 39.37).toExponential(1);
    } else {
      lengthOutput.value = lengthInput.value;
    }
  } else if (lenInSel.value === 'km') {
    if (lenOutSel.value === 'cm') {
      lengthOutput.value = (lengthInput.value * 100000).toExponential(1);
    } else if (lenOutSel.value === 'm') {
      lengthOutput.value = (lengthInput.value * 1000).toExponential(1);
    } else if (lenOutSel.value === 'inch') {
      lengthOutput.value = (lengthInput.value * 39370).toExponential(1);
    } else {
      lengthOutput.value = lengthInput.value;
    }
  } else {
    if (lenOutSel.value === 'cm') {
      lengthOutput.value = (lengthInput.value * 2.54).toExponential(1);
    } else if (lenOutSel.value === 'm') {
      lengthOutput.value = (lengthInput.value / 39.37).toExponential(1);
    } else if (lenOutSel.value === 'km') {
      lengthOutput.value = (lengthInput.value / 39370).toExponential(1);
    } else {
      lengthOutput.value = lengthInput.value;
    }
  }
};

//volume
const volumeEvaluate = () => {
  const volumeOutput = document.getElementById('volumeOutput');
  const volumeInput = document.getElementById('volumeInput');
  const volInSel = document.getElementById('volInSel');
  const volOutSel = document.getElementById('volOutSel');
  if (volInSel.value === 'ml') {
    if (volOutSel.value === 'cm3') {
      volumeOutput.value = volumeInput.value;
    } else if (volOutSel.value === 'l') {
      volumeOutput.value = (volumeInput.value / 1000).toExponential(1);
    } else if (volOutSel.value === 'm3') {
      volumeOutput.value = (volumeInput.value / 1000000).toExponential(1);
    } else {
      volumeOutput.value = volumeInput.value;
    }
  } else if (volInSel.value === 'cm3') {
    if (volOutSel.value === 'ml') {
      volumeOutput.value = volumeInput.value;
    } else if (volOutSel.value === 'l') {
      volumeOutput.value = (volumeInput.value / 1000).toExponential(1);
    } else if (volOutSel.value === 'm3') {
      volumeOutput.value = (volumeInput.value / 1000000).toExponential(1);
    } else {
      volumeOutput.value = volumeInput.value;
    }
  } else if (volInSel.value === 'l') {
    if (volOutSel.value === 'ml') {
      volumeOutput.value = (volumeInput.value * 1000).toExponential(1);
    } else if (volOutSel.value === 'cm3') {
      volumeOutput.value = (volumeInput.value * 1000).toExponential(1);
    } else if (volOutSel.value === 'm3') {
      volumeOutput.value = (volumeInput.value / 1000).toExponential(1);
    } else {
      volumeOutput.value = volumeInput.value;
    }
  } else {
    if (volOutSel.value === 'ml') {
      volumeOutput.value = (volumeInput.value * 1000000).toExponential(1);
    } else if (volOutSel.value === 'cm3') {
      volumeOutput.value = (volumeInput.value * 1000000).toExponential(1);
    } else if (volOutSel.value === 'l') {
      volumeOutput.value = (volumeInput.value * 1000).toExponential(1);
    } else {
      volumeOutput.value = volumeInput.value;
    }
  }
};

//temperature
const tempEvaluate = () => {
  const tempOutput = document.getElementById('tempOutput');
  const tempInput = document.getElementById('tempInput');
  const tempInSel = document.getElementById('tempInSel');
  const tempOutSel = document.getElementById('tempOutSel');
  if (tempInSel.value === 'dc') {
    if (tempOutSel.value === 'df') {
      tempOutput.value = tempInput.value * 1.8 + 32;
    } else if (tempOutSel.value === 'dk') {
      tempOutput.value = Number(tempInput.value) + 273.15;
    } else {
      tempOutput.value = tempInput.value;
    }
  } else if (tempInSel.value === 'df') {
    if (tempOutSel.value === 'dc') {
      tempOutput.value = (tempInput.value - 32) * 0.556;
    } else if (tempOutSel.value === 'dk') {
      tempOutput.value = (tempInput.value - 32) * 0.556 + 273.15;
    } else {
      tempOutput.value = tempInput.value;
    }
  } else {
    if (tempOutSel.value === 'dc') {
      tempOutput.value = tempInput.value - 273.15;
    } else if (tempOutSel.value === 'df') {
      tempOutput.value = (tempInput.value - 273.15) * 1.8 + 32;
    } else {
      tempOutput.value = tempInput.value;
    }
  }
};

//time
const timeEvaluate = () => {
  const timeOutput = document.getElementById('timeOutput');
  const timeInput = document.getElementById('timeInput');
  const timeInSel = document.getElementById('timeInSel');
  const timeOutSel = document.getElementById('timeOutSel');
  if (timeInSel.value === 'ms') {
    if (timeOutSel.value === 's') {
      timeOutput.value = (timeInput.value / 1000).toExponential(1);
    } else if (timeOutSel.value === 'm') {
      timeOutput.value = (timeInput.value / 60000).toExponential(1);
    } else if (timeOutSel.value === 'hr') {
      timeOutput.value = (timeInput.value / 3600000).toExponential(1);
    } else {
      timeOutput.value = timeInput.value;
    }
  } else if (timeInSel.value === 's') {
    if (timeOutSel.value === 'ms') {
      timeOutput.value = (timeInput.value * 1000).toExponential(1);
    } else if (timeOutSel.value === 'm') {
      timeOutput.value = (timeInput.value / 60).toExponential(1);
    } else if (timeOutSel.value === 'hr') {
      timeOutput.value = (timeInput.value / 3600).toExponential(1);
    } else {
      timeOutput.value = timeInput.value;
    }
  } else if (timeInSel.value === 'm') {
    if (timeOutSel.value === 'ms') {
      timeOutput.value = (timeInput.value * 60000).toExponential(1);
    } else if (timeOutSel.value === 's') {
      timeOutput.value = (timeInput.value * 60).toExponential(1);
    } else if (timeOutSel.value === 'hr') {
      timeOutput.value = (timeInput.value / 60).toExponential(1);
    } else {
      timeOutput.value = timeInput.value;
    }
  } else {
    if (timeOutSel.value === 'ms') {
      timeOutput.value = (timeInput.value * 3600000).toExponential(1);
    } else if (timeOutSel.value === 's') {
      timeOutput.value = (timeInput.value * 3600).toExponential(1);
    } else if (timeOutSel.value === 'm') {
      timeOutput.value = (timeInput.value * 60).toExponential(1);
    } else {
      timeOutput.value = timeInput.value;
    }
  }
};
