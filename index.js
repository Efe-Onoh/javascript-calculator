

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
$(document).ready(()=>{
  
})

//Redux

//default state
const defaultState = {
  power: false,
  display: "",
  operand1: "",
  operand2: "",
  prevOprt1: "",
  operator1: "",
  operand1set: false,
  operator1set: false,
  operand2set: false
}

//action constants
const POWER = 'POWER'
const RESET = 'RESET'
const UPDATE_DISPLAY = 'UPDATE_DISPLAY'
const EQUALS = 'HANDLE_EQUALS'
//action creators
const togglePower = ()=>({
  type: POWER
})

const updateDisplay = (message)=>({
  type: UPDATE_DISPLAY,
  message
})

const resetCalculator = ()=>({
  type: RESET
})

const handleEquals = (result)=>({
  type: EQUALS,
  result
})
//reducer

const reducer = (state = defaultState, action)=>{
  switch(action.type){
    case POWER:
      return ({
        power: !state.power,
        display: state.power? "" : "0",
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      })

    case UPDATE_DISPLAY:
      return ({
        power: true,
        display: action.message,
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      })
    
    case RESET:
      return({
        power: true,
        display: "0",
        operand1: "",
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      })

    case EQUALS:
      return({
        power: true,
        display: action.result,
        operand1: action.result,
        operand2: "",
        prevOprt1: "",
        operator1: "",
        operand1set: false,
        operator1set: false,
        operand2set: false
      })
    default:
      return state
  }
}

//React

const key_array = [
  {
    id: "zero",
    value: "0"
  },
  {
    id: "one",
    value: "1"
  },
  {
    id: "two",
    value: "2"
  },
  {
    id: "three",
    value: "3"
  },
  {
    id: "four",
    value: "4"
  },
  {
    id: "five",
    value: "5"
  },
  {
    id: "six",
    value: "6"
  },
  {
    id: "seven",
    value: "7"
  },
  {
    id: "eight",
    value: "8"
  },
  {
    id: "nine",
    value: "9"
  },
  {
    id: "decimal",
    value: "."
  },
  {
    id: "multiply",
    value: "x"
  },
  {
    id: "divide",
    value: "/"
  },
  {
    id: "add",
    value: "+"
  },
  {
    id: "subtract",
    value: "-"
  },
  {
    id: "equals",
    value:"=" 
  },
  {
    id: "clear",
    value: "AC"
  },
  {
    id: "off",
    value: "Off"
  }
]

//power indicator component
const PowerIndicatorComponent = (props) =>{

  const powerOn = {
    width: '10px',
    height: '2px',
    background: 'red'
  }

  const powerOff = {
    width: '10px',
    height: '2px',
    background: '#f40'
  }

  const powerDefault = {
    width: '10px',
    height: '2px',
    background: '#222'
  }

  return (
    <div id="power-indicator">
      <div id="group-power-LED">
        <div id="power-on-LED" className="power-LED" style={props.power ? powerOn : powerDefault}></div>
      </div>     
    </div>
  )
};

//displays inputs and results on screen
class DisplayComponent extends React.Component{
  constructor(props){
    super(props)

  
  }
 //render 
  render(){
    return (
      <div id="display" className="col">
        <h5 className="">{this.props.display}</h5>
      </div>
    )
  }

}

//store button elements into an array and handle clicks appropriately
const CalculatorButtons = (props) =>{
  const button_array = props.item.map((item)=>(
  <div id="key-pad-gradient">
    <button className="key-pad button-class" key={item.value} id={item.id} onClick={()=>props.handleClick(item.value)}>
    <p>{item.value}</p>
    </button>
  </div>
  
  )
  )

  return(
    <div>{button_array}</div>
  )
}

class Calculator extends React.Component{
  constructor(props){
    super(props)

    //method bindings
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this)
  }

  //handles click of each button.
  onButtonClickHandler(value){
    switch(value){
      case "AC":
        if(this.props.power){
          this.props.resetCalculator()
        }
        else{
          this.props.togglePower();
        }
        break
      case "Off":
        if(this.props.power){
          this.props.togglePower()
        }
        break
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
        if(this.props.power){
          this.props.setOperands(value)
        }
        break
      case "/":
      case "x":
      case "+":
        if(this.props.power){
          this.props.setOperators(value)
        }
        break
      case "-":
        if(this.props.power){
          this.props.handleMinus(value)
        }
        break
      case "=":
        if(this.props.power){
          this.props.handleEquals()
        }
        break
    }
  }

  render(){
    
    return(
      <div>
        <CalculatorButtons item={key_array} handleClick={this.onButtonClickHandler} />
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      power: false,
      display: "",
      operand1: "",
      operand2: "",
      prevOprt1: "",
      operator1: "",
      operand1set: false,
      operator1set: false,
      operand2set: false
    }

    this.togglePower = this.togglePower.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.resetCalculator = this.resetCalculator.bind(this);
    this.setOperands = this.setOperands.bind(this);
    this.setOperators = this.setOperators.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  //turns calculator on, sets display to 0: or off, sets display to ""
  togglePower(){
    this.setState(state =>({
      power: !state.power,
      display: state.power? "" : "0"
    }))
  }

  //updates the display according to click
  updateDisplay(val){
    this.setState({
      display: val
    })
  }

  //Handle AC click
  resetCalculator(){
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
    })
  }
  
  setOperands(val){
    this.setState(state=>{
      if(!state.operand1set){
        //remove additional leading 0s and additional decimal points
        let op1 = state.operand1+val
        let decimalIndex = op1.search(/\./)
        op1 = op1.substring(0,decimalIndex+1)+op1.substring(decimalIndex+1).replace(/\.+/,'')
        op1 = op1.replace(/^0+/, '0').replace(/\.+/, '.')
        
        return({
          display: op1+state.operator1+state.operand2,//get the current value for display
          operand1: op1,
          operand2: "",
          prevOprt1: state.operator1,
          operator1: "",
          operand1set: false,
          operator1set: false,
          operand2set: false //operand1 gets finished and set true when operator is pressed
        })
      }
      else{
        //remove additional leading 0s and additional decimal points
        let op2 = state.operand2+val
        let decimalIndex = op2.search(/\./)
        op2 = op2.substring(0,decimalIndex+1)+op2.substring(decimalIndex+1).replace(/\.+/,'')
        op2 = op2.replace(/^0+/, '0').replace(/\.+/, '.')
        
        return({
          display: state.operand1+state.operator1+op2,
          operand2: op2,
          operand1set: true,
          operator1set: true,//operator1 gets finished and set true when operand2 is pressed
          operand2set: false
        })
      }
    })
  }

  setOperators(val){
    this.setState(state=>{
      if(!state.operator1set){//if operator1 is not finalized, set operator 1
        if(state.operand1 == "-" || state.operand1 == ""){//someone pushed an operator first or immediately after pushing - , don't set operator in this case
          return({
            display: state.operand1+""+state.operand2,
            operand2: "",
            prevOprt1: state.operator1,
            operator1: "",
            operand1set: false,//operand 1 is not finalized
            operator1set: false,
            operand2set: false //operand1 gets finished and set true when operator is pressed
          })
        }
        else {//operand1 is valid, set operator
          return({
            display: state.operand1+val+state.operand2,
            operand2: "",
            prevOprt1: state.operator1,
            operator1: val,
            operand1set: true, //finalize operand1
            operator1set: false,
            operand2set: false //operand1 gets finished and set true when operator is pressed
          })
        }
      }
      else{//if operator1 is set, set operator2
        if(state.operand2 == "-"){//someone clicked an operator immediately after clicking - for operand2 - 
          return({
            display: state.operand1+val+"",
            operand2: "",
            prevOprt1: "-",//take the - used as last operator
            operator1: val,//operator 1 becomes the operator pressed.
            operand1set: true,
            operator1set: false,//operator1 still not finalized
            operand2set: false //operand1 gets finished and set true when operator is pressed
          })
        }
        else{//operand2 was valid, evaluate, and make operator operator1 for result.
          var result
          switch(state.operator1){
            case "x":
              result = parseFloat(state.operand1)*parseFloat(state.operand2)
              break
            case "/":
              result = parseFloat(state.operand1)/parseFloat(state.operand2)
              break
            case "+":
              result = Number(state.operand1)+Number(state.operand2)
              break
            case "-":
              result = Number(state.operand1)-Number(state.operand2)
              break
          }  
          
          return({
            display: result+val,
            //operand1 should get result of evaluating prevop1+oprt1+op2
            //operator1 should now get operatorpassed
            operand1: result,
            operand2: "",
            prevOprt1: state.operator1,
            operator1: val,
            operand1set: true,
            operator1set: false,
            operand2set: false
          })
        }    
      }
    })
  }

  handleEquals(){
    console.log(this.state)
    var result 
    if(this.state.operand1=="" || this.state.operand2=="" || this.state.operator1 == ""){
      //this.updateDisplay(this.state.display)//if any is in initial state, display what was last displayed
    }
    else{
      switch(this.state.operator1){
        case "x":
          result = parseFloat(this.state.operand1)*parseFloat(this.state.operand2)
          // this.updateDisplay(result)
          break
        case "/":
          result = parseFloat(this.state.operand1)/parseFloat(this.state.operand2)
          // this.updateDisplay(result)
          break
        case "+":
          result = Number(this.state.operand1)+Number(this.state.operand2)
          // this.updateDisplay(result)
          break
        case "-":
          result = Number(this.state.operand1)-Number(this.state.operand2)
          // this.updateDisplay(result)
          break
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
    })
    console.log(this.state)
  }

  handleMinus(val){
    if(this.state.operand1 == "" && this.state.operator1 == "" && this.state.operand2 == ""){ //minus is clicked when calc is in initial state as first operand
      this.setOperands(val)
    }
    else if(this.state.operand1 != "" && this.state.operator1 == "" && this.state.operand2 == "" ){//clicked after setting operand1, as operator, as the first operator clicked
      this.setOperators(val)
    }
    else if(this.state.operand1 != "" && (this.state.operator1 == "x" || this.state.operator1 == "/" || this.state.operator1 == "+" || this.state.operator1 == "-") && this.state.operand2 == "" ){
      this.setOperands(val)//clicked after operator has been clicked previously, set as start of second operand
    }
    else if(this.state.operand1 != "" && this.state.operator1 != "" && this.state.operand2 != ""){//clicked after second operand has been set, as operator for the result
      this.setOperators(val)
    }
    // else{
    //   this.setOperators(val)//other cases
    // }
  }

  render(){
    return(
      <div id="calculator-machine" >
        <h5>MP1513-EO</h5>
        <PowerIndicatorComponent power={this.state.power} togglePower={this.togglePower}/>
        <DisplayComponent display={this.state.display}/>
        <Calculator togglePower={this.togglePower} 
        updateDisplay={this.updateDisplay} 
        resetCalculator={this.resetCalculator} 
        setOperands={this.setOperands} 
        setOperators={this.setOperators}
        handleEquals={this.handleEquals}
        handleMinus={this.handleMinus} 
        power={this.state.power} 
        display={this.state.display}/>
      </div>
    ) 
  }
}

//react-redux

const mapStateToProps = (state)=>({
  
});

const mapDispatchToProps = (dispatch)=>({
 
});

const Provider = ReactRedux.Provider;//connects react to store
const connect = ReactRedux.connect; //connects state and dispatch of store to react app props

const Container = connect(mapStateToProps, mapDispatchToProps)(App) //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

class AppWrapper extends React.Component {
  
  render() {
      return (
        <Provider store={store}>
          <Container/>
        </Provider>
      );
    }

};

ReactDOM.render(<App/>, document.querySelector('#root'));

//move state to redux
//actioncreators are passed params through dispatching.
//style