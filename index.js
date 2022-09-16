

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
    id: "0"
  },
  {
    id: "1"
  },
  {
    id: "2"
  },
  {
    id: "3"
  },
  {
    id: "4"
  },
  {
    id: "5"
  },
  {
    id: "6"
  },
  {
    id: "7"
  },
  {
    id: "8"
  },
  {
    id: "9"
  },
  {
    id: "."
  },
  {
    id: "x"
  },
  {
    id: "/"
  },
  {
    id: "+"
  },
  {
    id: "-"
  },
  {
    id: "="
  },
  {
    id: "AC"
  },
]


//displays inputs and results on screen
class DisplayComponent extends React.Component{
  constructor(props){
    super(props)

  //render
  }
  
  render(){
    return (
      <div id="display" class="col">
        <h2 class="">{this.props.display}</h2>
      </div>
    )
  }

}

//calculator buttons component
const CalculatorButtons = (props) =>{
  const button_array = props.item.map((item)=>(
  <button onClick={props.handleClick}>
    <p>{item.id}</p>
  </button>
  )
  )

  return(
    <div>{button_array}</div>
  )
}

class Calculator extends React.Component{
  constructor(props){
    super(props)
    //state

    //method bindings
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(){

  }

  render(){
    
    return(
      <div>
        <DisplayComponent/>
        <CalculatorButtons item={key_array} />
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
      operand1set: false,
      operator1set: false,
      operand2set: false
    }

    this.togglePower = this.togglePower.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  //handles AC button click
  togglePower(){
    this.setState(state =>({
      power: !state.power
    }))
  }

  //updates the display according to click
  updateDisplay(val){
    this.setState({
      display: val
    })
  }
  
  render(){
    return(
      <div id="calculator-machine" >
        <h3>MP1513-EO</h3>
        <Calculator />
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