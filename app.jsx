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
  evaluate(){
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
          <input id="screen" value={this.state.operation}/>
        </div>

        <div id="button-container">
          <div className="buttons">
            <span className="operator" id="cancel" onClick={this.clearScreen}>C</span>
            <span className="operator" onClick={this.addClick}>/</span>
            <span className="operator" onClick={this.addClick}>x</span>
            <span onClick={this.addClick}>7</span>
            <span onClick={this.addClick}>8</span>
            <span onClick={this.addClick}>9</span>
            <span className="operator" onClick={this.addClick}>-</span>
            <span onClick={this.addClick}>4</span>
            <span onClick={this.addClick}>5</span>
            <span onClick={this.addClick}>6</span>
            <span className="operator" onClick={this.addClick}>+</span>
            <span onClick={this.addClick}>1</span>
            <span onClick={this.addClick}>2</span>
            <span onClick={this.addClick}>3</span>
            <span className="operator" id="calc" onClick={this.evaluate}>=</span>
            <div className="l-row">
              <span id="zero" onClick={this.addClick}>0</span>
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
  };
}