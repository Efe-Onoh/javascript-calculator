

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


//React up and running

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
        <h2 className="">{this.props.display}</h2>
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
        if(this.props.power){
          this.props.setOperands(value)
        }
        break
      case "/":
      case "x":
      case "+":
      case "-":
        if(this.props.power){
          this.props.setOperators(value)
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
      operator1: "",
      operand1set: false,
      operator1set: false,
      operand2set: false
    })
  }
  
  setOperands(val){
    this.setState(state=>{
      if(!state.operand1set){
        return({
          display: state.operand1+val+state.operator1+state.operand2,//get the current value for display
          operand1: state.operand1+val,
          operand2: "",
          operator1: "",
          operand1set: false,
          operator1set: false,
          operand2set: false //operand1 gets finished and set true when operator is pressed
        })
      }
      else{
        return({
          display: state.operand1+state.operator1+state.operand2+val,
          operand2: state.operand2+val,
          operand1set: true,
          operator1set: true,//operator1 gets finished and set true when operand2 is pressed
          operand2set: false
        })
      }
    })
  }

  setOperators(val){
    this.setState(state=>{
      if(!state.operator1set){//if operator1 is not set, set operator 1
        return({
          display: state.operand1+val+state.operand2,
          operand2: "",
          operator1: val,
          operand1set: true,
          operator1set: false,
          operand2set: false //operand1 gets finished and set true when operator is pressed
        })
      }
      else{
        var result
        switch(state.operator1){
          case "x":
            result = parseInt(state.operand1)*parseInt(state.operand2)
            break
          case "/":
            result = parseInt(state.operand1)/parseInt(state.operand2)
            break
          case "+":
            result = parseInt(state.operand1)+parseInt(state.operand2)
            break
          case "-":
            result = parseInt(state.operand1)-parseInt(state.operand2)
            break
        }
        return({
          display: result+val,
          //operand1 should get result of evaluating prevop1+oprt1+op2
          //operator1 should now get operatorpassed
          operand1: result,
          operand2: "",
          operator1: val,
          operand1set: true,
          operator1set: false,
          operand2set: false
        })
      }
    })
  }

  render(){
    return(
      <div id="calculator-machine" >
        <h3>MP1513-EO</h3>
        <PowerIndicatorComponent power={this.state.power} togglePower={this.togglePower}/>
        <DisplayComponent display={this.state.display}/>
        <Calculator togglePower={this.togglePower} 
        updateDisplay={this.updateDisplay} 
        resetCalculator={this.resetCalculator} 
        setOperands={this.setOperands} 
        setOperators={this.setOperators} 
        power={this.state.power} 
        display={this.state.display}/>
      </div>
    ) 
  }
}

//react-redux

const mapStateToProps = (state)=>({
  value: state //value is a prop of app in react now, while state is a string state from redux
});

const mapDispatchToProps = (dispatch)=>({
  update: (newtext)=>{
    dispatch(update(newtext)); //update is a prop of app in react, dispatch is from redux, newtext is the 
  }
});

const Provider = ReactRedux.Provider;//connects react to store
const connect = ReactRedux.connect; //connects state and dispatch of store to react app props

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App) //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

class AppWrapper extends React.Component {
  
  render() {
      return (
        <Provider store={store}>
          <ConnectedComponent/>
        </Provider>
      );
    }

};

ReactDOM.render(<App/>, document.querySelector('#root'));

//implement power key and bank keys
//implement redux and react redux, make it do a little more like fast response?