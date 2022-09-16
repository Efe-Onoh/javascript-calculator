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
  id: "0"
}, {
  id: "1"
}, {
  id: "2"
}, {
  id: "3"
}, {
  id: "4"
}, {
  id: "5"
}, {
  id: "6"
}, {
  id: "7"
}, {
  id: "8"
}, {
  id: "9"
}, {
  id: "."
}, {
  id: "x"
}, {
  id: "/"
}, {
  id: "+"
}, {
  id: "-"
}, {
  id: "="
}, {
  id: "AC"
}]; //displays inputs and results on screen

var DisplayComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(DisplayComponent, _React$Component);

  var _super = _createSuper(DisplayComponent);

  function DisplayComponent(props) {
    _classCallCheck(this, DisplayComponent);

    return _super.call(this, props); //render
  }

  _createClass(DisplayComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "display",
        "class": "col"
      }, /*#__PURE__*/React.createElement("h2", {
        "class": ""
      }, this.props.display));
    }
  }]);

  return DisplayComponent;
}(React.Component); //calculator buttons component


var CalculatorButtons = function CalculatorButtons(props) {
  var button_array = props.item.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: props.handleClick
    }, /*#__PURE__*/React.createElement("p", null, item.id));
  });
  return /*#__PURE__*/React.createElement("div", null, button_array);
};

var Calculator = /*#__PURE__*/function (_React$Component2) {
  _inherits(Calculator, _React$Component2);

  var _super2 = _createSuper(Calculator);

  function Calculator(props) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _super2.call(this, props); //state
    //method bindings

    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calculator, [{
    key: "handleKeyPress",
    value: function handleKeyPress() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayComponent, null), /*#__PURE__*/React.createElement(CalculatorButtons, {
        item: key_array
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
      operand1set: false,
      operator1set: false,
      operand2set: false
    };
    _this2.togglePower = _this2.togglePower.bind(_assertThisInitialized(_this2));
    _this2.updateDisplay = _this2.updateDisplay.bind(_assertThisInitialized(_this2));
    return _this2;
  } //handles AC button click


  _createClass(App, [{
    key: "togglePower",
    value: function togglePower() {
      this.setState(function (state) {
        return {
          power: !state.power
        };
      });
    } //updates the display according to click

  }, {
    key: "updateDisplay",
    value: function updateDisplay(val) {
      this.setState({
        display: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "calculator-machine"
      }, /*#__PURE__*/React.createElement("h3", null, "MP1513-EO"), /*#__PURE__*/React.createElement(Calculator, null));
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
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root')); //implement power key and bank keys
//implement redux and react redux, make it do a little more like fast response?
