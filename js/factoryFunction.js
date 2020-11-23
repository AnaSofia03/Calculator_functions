function createCalculator() {

  return {
    display: document.querySelector('.input1'),

    initializeCalculator() {
      this.btnClick();
      this.keyPressEnter();
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    btnClick() {

      document.addEventListener('click', (e) => {
        const element = e.target; //capturo o elemento que está a ser clicado

        if (element.classList.contains('btn-num')) {
          this.btnTextToDisplay(element.innerText);
        }

        if (element.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (element.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if (element.classList.contains('btn-equal')) {
          this.calculateMath();
        }

      })

    },

    calculateMath() {

      let calc = this.display.value;

      try {
        calc = eval(calc);

        if (!calc) {
          alert('Something went wrong. This is not valid.');
          return;
        } this.display.value = String(calc);

      } catch (e) {
        alert('Something went wrong. This is not valid.');
        return;
      }
    },


    btnTextToDisplay(btnValue) {
      this.display.value += btnValue;
      this.display.focus();
    },

    keyPressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.calculateMath();
        }
      })

    }

  } //final return 

}//factory Function

const calculator = createCalculator();
calculator.initializeCalculator();

