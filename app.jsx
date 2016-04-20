var matchSequence = /^(\-?\d+)(x|\/|\+|\-)(\-?\d+)$/;

var Calculator = React.createClass({
  getInitialState(){
    return {
      operation: ''
    };
  },
  clearScreen(){
    this.replaceState(this.getInitialState());
   },
  addClick(e){
    if(this.state.operation === 'Error' || this.state.operation.includes('=')){
      return;
    } else {
      this.setState({
        operation: this.state.operation += e.target.innerHTML
      });
    }
  },
  onKeyUp(e){
    switch (e.which) {
      case 13:
        this.evaluate();
        break;
      case 27:
        this.clearScreen();
        break;
      case 88:
        this.setState({
          operation: this.state.operation += 'x'
        });
        break;
      case 187:
        this.setState({
          operation: this.state.operation += '+'
        });
        break;
      case 189:
        this.setState({
          operation: this.state.operation += '-'
        });
        break;
      case 191:
        this.setState({
          operation: this.state.operation += '/'
        });
        break;
      case 48-57:
        this.setState({
          operation: this.state.operation += String.fromCharCode(e.which)
        });
        break;
    };
  },
  evaluate(e){
    var matches = this.state.operation.match(matchSequence);

    if(matches){
      this.setState({
        operation: `${this.state.operation} = ${evaluationOperation(matches[1], matches[3], matches[2])}`
      });
    } else {
      this.setState({ operation: 'Error' });
    }
  },
  render(){
    return (
      <div id="calculator">
        <div id="screen-container">
          <input id="screen" value={this.state.operation} onKeyUp={this.onKeyUp}/>
        </div>

        <div id="button-container">
          <div className="buttons">
            <span className="operator" id="cancel" onClick={this.clearScreen} onKeyUp={this.onKeyUp}>C</span>
            <span className="operator" onClick={this.addClick} onKeyUp={this.onKeyUp}>/</span>
            <span className="operator" onClick={this.addClick} onKeyUp={this.onKeyUp}>x</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>7</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>8</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>9</span>
            <span className="operator" onClick={this.addClick} onKeyUp={this.onKeyUp}>-</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>4</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>5</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>6</span>
            <span className="operator" onClick={this.addClick} onKeyUp={this.onKeyUp}>+</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>1</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>2</span>
            <span onClick={this.addClick} onKeyUp={this.onKeyUp}>3</span>
            <span className="operator" id="calc" onClick={this.evaluate} onKeyUp={this.onKeyUp}>=</span>
            <div className="l-row">
              <span id="zero" onClick={this.addClick} onKeyUp={this.onKeyUp}>0</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Calculator/>, document.getElementById('container'));


function evaluationOperation(num1, num2, opt){
  switch (opt) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return;
  };
}