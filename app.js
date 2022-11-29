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
$(document).ready(function () {}); //Redux
//default state

var defaultState = {
  power: false,
  display: "",
  operand1: "",
  operand2: "",
  prevOprt1: "",
  operator1: "",
  operand1set: false,
  operator1set: false,
  operand2set: false
}; //action constants

var POWER = 'POWER';
var RESET = 'RESET';
var UPDATE_DISPLAY = 'UPDATE_DISPLAY';
var EQUALS = 'HANDLE_EQUALS';
var SET_OPERANDS = 'SET_OPERANDS';
var SET_OPERATORS = 'SET_OPERATORS'; //action creators

var togglePower = function togglePower() {
  return {
    type: POWER
  };
};

var updateDisplay = function updateDisplay(message) {
  return {
    type: UPDATE_DISPLAY,
    message: message
  };
};

var resetCalculator = function resetCalculator() {
  return {
    type: RESET
  };
};

var handleEquals = function handleEquals(result) {
  return {
    type: EQUALS,
    result: result
  };
};

var setOperands = function setOperands(stateObj) {
  return {
    type: SET_OPERANDS,
    stateObj: stateObj
  };
};

var setOperators = function setOperators(stateObj) {
  return {
    type: SET_OPERATORS,
    stateObj: stateObj
  };
}; //reducer


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case POWER:
      return {
        power: !state.power,
        display: state.power ? "" : "0",
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      };

    case RESET:
      return {
        power: true,
        display: "0",
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      };

    case UPDATE_DISPLAY:
      return {
        power: true,
        display: action.message,
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      };

    case EQUALS:
      return {
        power: true,
        display: action.result,
        operand1: action.result,
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      };

    case SET_OPERANDS:
      return action.stateObj;

    case SET_OPERATORS:
      return action.stateObj;

    default:
      return state;
  }
}; //Create Store


var store = Redux.createStore(reducer);
console.log("initial state: ", store.getState()); //store listener

var sl = function sl() {
  console.log("Update occured...");
  console.log("New State: ", store.getState());
};

store.subscribe(sl); //React

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
        id: "display"
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
      className: "key-pad",
      id: item.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "button-class",
      key: item.value,
      id: item.id,
      onClick: function onClick() {
        return props.handleClick(item.value);
      }
    }, /*#__PURE__*/React.createElement("p", null, item.value)));
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "key-pad-container"
  }, button_array);
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
      console.log("toggle power call....");
      this.props.doTogglePower();
    } //updates the display according to click

  }, {
    key: "updateDisplay",
    value: function updateDisplay(val) {
      console.log("update display call....");
      this.props.doUpdateDisplay(val);
    } //Handle AC click

  }, {
    key: "resetCalculator",
    value: function resetCalculator() {
      console.log("reset calculator call....");
      this.props.doResetCalculator();
    }
  }, {
    key: "setOperands",
    value: function setOperands(val) {
      console.log("set operands call....");
      var state = this.props.state;

      if (!state.operand1set) {
        //remove additional leading 0s and additional decimal points
        var op1 = state.operand1 + val;
        var decimalIndex = op1.search(/\./);
        op1 = op1.substring(0, decimalIndex + 1) + op1.substring(decimalIndex + 1).replace(/\.+/, '');
        op1 = op1.replace(/^0+/, '0').replace(/\.+/, '.');
        var stateObj = {
          power: true,
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
        this.props.doSetOperands(stateObj);
      } else {
        //remove additional leading 0s and additional decimal points
        var op2 = state.operand2 + val;

        var _decimalIndex = op2.search(/\./);

        op2 = op2.substring(0, _decimalIndex + 1) + op2.substring(_decimalIndex + 1).replace(/\.+/, '');
        op2 = op2.replace(/^0+/, '0').replace(/\.+/, '.');
        var _stateObj = {
          power: true,
          display: state.operand1 + state.operator1 + op2,
          operand1: state.operand1,
          operand2: op2,
          prevOprt1: state.operator1,
          operator1: state.operator1,
          operand1set: true,
          operator1set: true,
          //operator1 gets finished and set true when operand2 is pressed
          operand2set: false
        };
        this.props.doSetOperands(_stateObj);
      }
    }
  }, {
    key: "setOperators",
    value: function setOperators(val) {
      console.log("set operators call....");
      var state = this.props.state;

      if (!state.operator1set) {
        //if operator1 is not finalized, set operator 1
        if (state.operand1 == "-" || state.operand1 == "") {
          //someone pushed an operator first or immediately after pushing - , don't set operator in this case
          var stateObj = {
            power: true,
            display: state.operand1 + "" + state.operand2,
            operand1: state.operand1,
            operand2: "",
            prevOprt1: state.operator1,
            operator1: "",
            operand1set: false,
            //operand 1 is not finalized
            operator1set: false,
            operand2set: false //operand1 gets finished and set true when operator is pressed

          };
          this.props.doSetOperators(stateObj);
        } else {
          //operand1 is valid, set operator
          var _stateObj2 = {
            power: true,
            display: state.operand1 + val + state.operand2,
            operand1: state.operand1,
            operand2: "",
            prevOprt1: state.operator1,
            operator1: val,
            operand1set: true,
            //finalize operand1
            operator1set: false,
            operand2set: false //operand1 gets finished and set true when operator is pressed

          };
          this.props.doSetOperators(_stateObj2);
        }
      } else {
        //if operator1 is set, set operator2
        if (state.operand2 == "-") {
          //someone clicked an operator immediately after clicking - for operand2 - 
          var _stateObj3 = {
            power: true,
            display: state.operand1 + val + "",
            operand1: state.operand1,
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
          this.props.doSetOperators(_stateObj3);
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

          var _stateObj4 = {
            power: true,
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
          this.props.doSetOperators(_stateObj4);
        }
      }
    }
  }, {
    key: "handleEquals",
    value: function handleEquals() {
      console.log("handle equals...");
      var result;

      if (this.props.state.operand1 == "" || this.props.state.operand2 == "" || this.props.state.operator1 == "") {//this.updateDisplay(this.props.state.display)//if any is in initial state, display what was last displayed
      } else {
        switch (this.props.state.operator1) {
          case "x":
            result = parseFloat(this.props.state.operand1) * parseFloat(this.props.state.operand2); // this.updateDisplay(result)

            break;

          case "/":
            result = parseFloat(this.props.state.operand1) / parseFloat(this.props.state.operand2); // this.updateDisplay(result)

            break;

          case "+":
            result = Number(this.props.state.operand1) + Number(this.props.state.operand2); // this.updateDisplay(result)

            break;

          case "-":
            result = Number(this.props.state.operand1) - Number(this.props.state.operand2); // this.updateDisplay(result)

            break;
        }
      } // this.setState({
      //   display: result,
      //   operand1: result,
      //   operand2: "",
      //   prevOprt1: "",
      //   operator1: "",
      //   operand1set: false,
      //   operator1set: false,
      //   operand2set: false
      // })


      this.props.doHandleEquals(result);
      console.log(this.state);
    }
  }, {
    key: "handleMinus",
    value: function handleMinus(val) {
      console.log("handle minus call...");
      var state = this.props.state;

      if (state.operand1 == "" && state.operator1 == "" && state.operand2 == "") {
        //minus is clicked when calc is in initial state as first operand
        this.setOperands(val);
      } else if (state.operand1 != "" && state.operator1 == "" && state.operand2 == "") {
        //clicked after setting operand1, as operator, as the first operator clicked
        this.setOperators(val);
      } else if (state.operand1 != "" && (state.operator1 == "x" || state.operator1 == "/" || state.operator1 == "+" || state.operator1 == "-") && state.operand2 == "") {
        this.setOperands(val); //clicked after operator has been clicked previously, set as start of second operand
      } else if (state.operand1 != "" && state.operator1 != "" && state.operand2 != "") {
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
        power: this.props.state.power,
        togglePower: this.togglePower
      }), /*#__PURE__*/React.createElement(DisplayComponent, {
        display: this.props.state.display
      }), /*#__PURE__*/React.createElement(Calculator, {
        togglePower: this.togglePower,
        updateDisplay: this.updateDisplay,
        resetCalculator: this.resetCalculator,
        setOperands: this.setOperands,
        setOperators: this.setOperators,
        handleEquals: this.handleEquals,
        handleMinus: this.handleMinus,
        power: this.props.state.power,
        display: this.props.state.display
      }));
    }
  }]);

  return App;
}(React.Component); //react-redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state //a prop called state mapped to state.

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //all action creators mapped to props
    doTogglePower: function doTogglePower() {
      dispatch(togglePower());
    },
    doUpdateDisplay: function doUpdateDisplay(message) {
      dispatch(updateDisplay(message));
    },
    doResetCalculator: function doResetCalculator() {
      dispatch(resetCalculator());
    },
    doHandleEquals: function doHandleEquals(result) {
      dispatch(handleEquals(result));
    },
    doSetOperands: function doSetOperands(stateObj) {
      dispatch(setOperands(stateObj));
    },
    doSetOperators: function doSetOperators(stateObj) {
      dispatch(setOperators(stateObj));
    }
  };
};

var Provider = ReactRedux.Provider; //connects react to store

var connect = ReactRedux.connect; //connects state and dispatch of store to react app props

var Container = connect(mapStateToProps, mapDispatchToProps)(App); //app now has props which include external redux store state, and functions that dispatch actions to the store

var AppWrapper = /*#__PURE__*/function (_React$Component4) {
  _inherits(AppWrapper, _React$Component4);

  var _super4 = _createSuper(AppWrapper);

  function AppWrapper(props) {
    _classCallCheck(this, AppWrapper);

    return _super4.call(this, props);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(Container, null));
    }
  }]);

  return AppWrapper;
}(React.Component);

;
ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.querySelector('#root')); //style
