function Calculator() { //inicio função

  this.display = document.querySelector('.input1');

  this.initializeCalculator = () => {
    this.btnClick();
    this.keyPressEnter();
  };

  this.btnClick = () => {

    document.addEventListener('click', (e) => {
      const element = e.target;

      if (element.classList.contains('btn-num')) {
        this.btnTextToDisplay(element);
      }

      if (element.classList.contains('btn-clear')) {
        console.log('inicio')

        this.clearDisplay();
      }
      if (element.classList.contains('btn-del')) {
        this.deleteOne();
      }

      if (element.classList.contains('btn-equal')) {
        this.MathCalculation();
      }

    })
  };

  this.keyPressEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.MathCalculation();
      }
    })
  };


  this.btnTextToDisplay = (btnValue) => {
    this.display.value += btnValue.innerText;
    this.display.focus();
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.deleteOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.MathCalculation = () => {
    let calc = eval(this.display.value);
    try {
      if (!calc) {
        alert('Something went wrong. This is not valid.');
        return;
      } this.display.value = String(calc);
    } catch (e) {
      alert('Something went wrong. This is not valid.');
      return;
    }
  };

}; //fim função

//instanciar objeto
const calculator = new Calculator();
calculator.initializeCalculator();