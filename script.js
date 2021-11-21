var app = new Vue({
  el: "#app",
  data: {
    output: 0,
    preNumber: "",
    currentNumber: "",
    symbol: "",
    result: 0,
    isClickEqual: false,
  },
  methods: {
    resetData() {
      this.output = 0;
      this.symbol = "";
      this.preNumber = "";
      this.currentNumber = "";
      this.result = 0;
      this.isClickEqual = false;
    },
    getNumber(value) {
      if (this.isClickEqual) {
        this.resetData();
        this.isClickEqual = false;
      }
      if (this.symbol === "") {
        this.preNumber += value;
        this.output = this.preNumber;
      } else {
        this.currentNumber += value;
        this.output = this.currentNumber;
      }
    },
    computeAction(action) {
      this.symbol = action;
      this.output = 0;
      this.currentNumber = "";
      if (this.isClickEqual) {
        this.preNumber = this.result;
        this.isClickEqual = false;
      }
    },
    getResult() {
      this.isClickEqual = true;
      if (this.symbol === "-") {
        this.result = parseInt(this.preNumber) - parseInt(this.currentNumber);
      } else if (this.symbol === "+") {
        this.result = parseInt(this.preNumber) + parseInt(this.currentNumber);
      } else if (this.symbol === "×") {
        this.result = parseInt(this.preNumber) * parseInt(this.currentNumber);
      } else if (this.symbol === "÷") {
        this.result = parseInt(this.preNumber) / parseInt(this.currentNumber);
      } else if (this.symbol === "%") {
        this.result = parseInt(this.preNumber) % parseInt(this.currentNumber);
      } else {
        this.result = this.preNumber;
      }
      this.output = this.result;
    },
  },
});
