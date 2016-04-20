var Calculator = React.createClass({
  getInitialState(){
    return {
      operation: 'hi'
    };
  },
  clearScreen(){
    this.replaceState(this.getInitialState);
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
            <span className="operator">/</span>
            <span className="operator">x</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span className="operator">-</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span className="operator">+</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span className="operator" id="calc">=</span>
            <div className="l-row">
              <span id="zero">0</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Calculator/>, document.getElementById('container'));


// get span value
  // .innerHTML or .textContent