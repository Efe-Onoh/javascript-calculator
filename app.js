"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// !!! IMPORTANT README:
// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/
// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
// Once you have read the above messages, you can delete all comments. 
//Jquery up and running
$(document).ready(function () {}); //React up and running

var key_array = [{
  id: "zero",
  value: "0"
}, {
  id: "one",
  value: "1"
}, {
  id: "two",
  value: "2"
}, {
  id: "three",
  value: "3"
}, {
  id: "four",
  value: "4"
}, {
  id: "five",
  value: "5"
}, {
  id: "six",
  value: "6"
}, {
  id: "seven",
  value: "7"
}, {
  id: "eight",
  value: "8"
}, {
  id: "nine",
  value: "9"
}, {
  id: "decimal",
  value: "."
}, {
  id: "multiply",
  value: "x"
}, {
  id: "divide",
  value: "/"
}, {
  id: "add",
  value: "+"
}, {
  id: "subtract",
  value: "-"
}, {
  id: "equals",
  value: "="
}, {
  id: "clear",
  value: "AC"
}, {
  id: "off",
  value: "Off"
}]; //power indicator component

var PowerIndicatorComponent = function PowerIndicatorComponent(props) {
  var powerOn = {
    width: '10px',
    height: '2px',
    background: 'red'
  };
  var powerOff = {
    width: '10px',
    height: '2px',
    background: '#f40'
  };
  var powerDefault = {
    width: '10px',
    height: '2px',
    background: '#222'
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "power-indicator"
  }, /*#__PURE__*/React.createElement("div", {
    id: "group-power-LED"
  }, /*#__PURE__*/React.createElement("div", {
    id: "power-on-LED",
    className: "power-LED",
    style: props.power ? powerOn : powerDefault
  })));
}; //displays inputs and results on screen


var DisplayComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(DisplayComponent, _React$Component);

  var _super = _createSuper(DisplayComponent);

  function DisplayComponent(props) {
    _classCallCheck(this, DisplayComponent);

    return _super.call(this, props);
  } //render 


  _createClass(DisplayComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "display",
        className: "col"
      }, /*#__PURE__*/React.createElement("h5", {
        className: ""
      }, this.props.display));
    }
  }]);

  return DisplayComponent;
}(React.Component); //store button elements into an array and handle clicks appropriately


var CalculatorButtons = function CalculatorButtons(props) {
  var button_array = props.item.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      id: "key-pad-gradient"
    }, /*#__PURE__*/React.createElement("button", {
      className: "key-pad button-class",
      key: item.value,
      id: item.id,
      onClick: function onClick() {
        return props.handleClick(item.value);
      }
    }, /*#__PURE__*/React.createElement("p", null, item.value)));
  });
  return /*#__PURE__*/React.createElement("div", null, button_array);
};

var Calculator = /*#__PURE__*/function (_React$Component2) {
  _inherits(Calculator, _React$Component2);

  var _super2 = _createSuper(Calculator);

  function Calculator(props) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _super2.call(this, props); //method bindings

    _this.onButtonClickHandler = _this.onButtonClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  } //handles click of each button.


  _createClass(Calculator, [{
    key: "onButtonClickHandler",
    value: function onButtonClickHandler(value) {
      switch (value) {
        case "AC":
          if (this.props.power) {
            this.props.resetCalculator();
          } else {
            this.props.togglePower();
          }

          break;

        case "Off":
          if (this.props.power) {
            this.props.togglePower();
          }

          break;

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
          if (this.props.power) {
            this.props.setOperands(value);
          }

          break;

        case "/":
        case "x":
        case "+":
          if (this.props.power) {
            this.props.setOperators(value);
          }

          break;

        case "-":
          if (this.props.power) {
            this.props.handleMinus(value);
          }

          break;

        case "=":
          if (this.props.power) {
            this.props.handleEquals();
          }

          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CalculatorButtons, {
        item: key_array,
        handleClick: this.onButtonClickHandler
      }));
    }
  }]);

  return Calculator;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component3) {
  _inherits(App, _React$Component3);

  var _super3 = _createSuper(App);

  function App(props) {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _super3.call(this, props);
    _this2.state = {
      power: false,
      display: "",
      operand1: "",
      operand2: "",
      prevOprt1: "",
      operator1: "",
      operand1set: false,
      operator1set: false,
      operand2set: false
    };
    _this2.togglePower = _this2.togglePower.bind(_assertThisInitialized(_this2));
    _this2.updateDisplay = _this2.updateDisplay.bind(_assertThisInitialized(_this2));
    _this2.resetCalculator = _this2.resetCalculator.bind(_assertThisInitialized(_this2));
    _this2.setOperands = _this2.setOperands.bind(_assertThisInitialized(_this2));
    _this2.setOperators = _this2.setOperators.bind(_assertThisInitialized(_this2));
    _this2.handleEquals = _this2.handleEquals.bind(_assertThisInitialized(_this2));
    _this2.handleMinus = _this2.handleMinus.bind(_assertThisInitialized(_this2));
    return _this2;
  } //turns calculator on, sets display to 0: or off, sets display to ""


  _createClass(App, [{
    key: "togglePower",
    value: function togglePower() {
      this.setState(function (state) {
        return {
          power: !state.power,
          display: state.power ? "" : "0"
        };
      });
    } //updates the display according to click

  }, {
    key: "updateDisplay",
    value: function updateDisplay(val) {
      this.setState({
        display: val
      });
    } //Handle AC click

  }, {
    key: "resetCalculator",
    value: function resetCalculator() {
      this.setState({
        power: true,
        display: "0",
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      });
    }
  }, {
    key: "setOperands",
    value: function setOperands(val) {
      this.setState(function (state) {
        if (!state.operand1set) {
          //remove additional leading 0s and additional decimal points
          var op1 = state.operand1 + val;
          var decimalIndex = op1.search(/\./);
          op1 = op1.substring(0, decimalIndex + 1) + op1.substring(decimalIndex + 1).replace(/\.+/, '');
          op1 = op1.replace(/^0+/, '0').replace(/\.+/, '.');
          return {
            display: op1 + state.operator1 + state.operand2,
            //get the current value for display
            operand1: op1,
            operand2: "",
            prevOprt1: state.operator1,
            operator1: "",
            operand1set: false,
            operator1set: false,
            operand2set: false //operand1 gets finished and set true when operator is pressed

          };
        } else {
          //remove additional leading 0s and additional decimal points
          var op2 = state.operand2 + val;

          var _decimalIndex = op2.search(/\./);

          op2 = op2.substring(0, _decimalIndex + 1) + op2.substring(_decimalIndex + 1).replace(/\.+/, '');
          op2 = op2.replace(/^0+/, '0').replace(/\.+/, '.');
          return {
            display: state.operand1 + state.operator1 + op2,
            operand2: op2,
            operand1set: true,
            operator1set: true,
            //operator1 gets finished and set true when operand2 is pressed
            operand2set: false
          };
        }
      });
    }
  }, {
    key: "setOperators",
    value: function setOperators(val) {
      this.setState(function (state) {
        if (!state.operator1set) {
          //if operator1 is not finalized, set operator 1
          if (state.operand1 == "-" || state.operand1 == "") {
            //someone pushed an operator first or immediately after pushing - , don't set operator in this case
            return {
              display: state.operand1 + "" + state.operand2,
              operand2: "",
              prevOprt1: state.operator1,
              operator1: "",
              operand1set: false,
              //operand 1 is not finalized
              operator1set: false,
              operand2set: false //operand1 gets finished and set true when operator is pressed

            };
          } else {
            //operand1 is valid, set operator
            return {
              display: state.operand1 + val + state.operand2,
              operand2: "",
              prevOprt1: state.operator1,
              operator1: val,
              operand1set: true,
              //finalize operand1
              operator1set: false,
              operand2set: false //operand1 gets finished and set true when operator is pressed

            };
          }
        } else {
          //if operator1 is set, set operator2
          if (state.operand2 == "-") {
            //someone clicked an operator immediately after clicking - for operand2 - 
            return {
              display: state.operand1 + val + "",
              operand2: "",
              prevOprt1: "-",
              //take the - used as last operator
              operator1: val,
              //operator 1 becomes the operator pressed.
              operand1set: true,
              operator1set: false,
              //operator1 still not finalized
              operand2set: false //operand1 gets finished and set true when operator is pressed

            };
          } else {
            //operand2 was valid, evaluate, and make operator operator1 for result.
            var result;

            switch (state.operator1) {
              case "x":
                result = parseFloat(state.operand1) * parseFloat(state.operand2);
                break;

              case "/":
                result = parseFloat(state.operand1) / parseFloat(state.operand2);
                break;

              case "+":
                result = Number(state.operand1) + Number(state.operand2);
                break;

              case "-":
                result = Number(state.operand1) - Number(state.operand2);
                break;
            }

            return {
              display: result + val,
              //operand1 should get result of evaluating prevop1+oprt1+op2
              //operator1 should now get operatorpassed
              operand1: result,
              operand2: "",
              prevOprt1: state.operator1,
              operator1: val,
              operand1set: true,
              operator1set: false,
              operand2set: false
            };
          }
        }
      });
    }
  }, {
    key: "handleEquals",
    value: function handleEquals() {
      console.log(this.state);
      var result;

      if (this.state.operand1 == "" || this.state.operand2 == "" || this.state.operator1 == "") {//this.updateDisplay(this.state.display)//if any is in initial state, display what was last displayed
      } else {
        switch (this.state.operator1) {
          case "x":
            result = parseFloat(this.state.operand1) * parseFloat(this.state.operand2); // this.updateDisplay(result)

            break;

          case "/":
            result = parseFloat(this.state.operand1) / parseFloat(this.state.operand2); // this.updateDisplay(result)

            break;

          case "+":
            result = Number(this.state.operand1) + Number(this.state.operand2); // this.updateDisplay(result)

            break;

          case "-":
            result = Number(this.state.operand1) - Number(this.state.operand2); // this.updateDisplay(result)

            break;
        }
      }

      this.setState({
        display: result,
        operand1: result,
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      });
      console.log(this.state);
    }
  }, {
    key: "handleMinus",
    value: function handleMinus(val) {
      if (this.state.operand1 == "" && this.state.operator1 == "" && this.state.operand2 == "") {
        //minus is clicked when calc is in initial state as first operand
        this.setOperands(val);
      } else if (this.state.operand1 != "" && this.state.operator1 == "" && this.state.operand2 == "") {
        //clicked after setting operand1, as operator, as the first operator clicked
        this.setOperators(val);
      } else if (this.state.operand1 != "" && (this.state.operator1 == "x" || this.state.operator1 == "/" || this.state.operator1 == "+" || this.state.operator1 == "-") && this.state.operand2 == "") {
        this.setOperands(val); //clicked after operator has been clicked previously, set as start of second operand
      } else if (this.state.operand1 != "" && this.state.operator1 != "" && this.state.operand2 != "") {
        //clicked after second operand has been set, as operator for the result
        this.setOperators(val);
      } // else{
      //   this.setOperators(val)//other cases
      // }

    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "calculator-machine"
      }, /*#__PURE__*/React.createElement("h5", null, "MP1513-EO"), /*#__PURE__*/React.createElement(PowerIndicatorComponent, {
        power: this.state.power,
        togglePower: this.togglePower
      }), /*#__PURE__*/React.createElement(DisplayComponent, {
        display: this.state.display
      }), /*#__PURE__*/React.createElement(Calculator, {
        togglePower: this.togglePower,
        updateDisplay: this.updateDisplay,
        resetCalculator: this.resetCalculator,
        setOperands: this.setOperands,
        setOperators: this.setOperators,
        handleEquals: this.handleEquals,
        handleMinus: this.handleMinus,
        power: this.state.power,
        display: this.state.display
      }));
    }
  }]);

  return App;
}(React.Component); //react-redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state //value is a prop of app in react now, while state is a string state from redux

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    update: function (_update) {
      function update(_x) {
        return _update.apply(this, arguments);
      }

      update.toString = function () {
        return _update.toString();
      };

      return update;
    }(function (newtext) {
      dispatch(update(newtext)); //update is a prop of app in react, dispatch is from redux, newtext is the 
    })
  };
};

var Provider = ReactRedux.Provider; //connects react to store

var connect = ReactRedux.connect; //connects state and dispatch of store to react app props

var ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App); //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

var AppWrapper = /*#__PURE__*/function (_React$Component4) {
  _inherits(AppWrapper, _React$Component4);

  var _super4 = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super4.apply(this, arguments);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(ConnectedComponent, null));
    }
  }]);

  return AppWrapper;
}(React.Component);

;
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root')); //implement decimal
//strip leading 0s from operands before evaluation
//why is it not displaying correctly the display value of -
