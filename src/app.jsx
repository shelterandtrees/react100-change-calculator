import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        due: '',
        received: '',
        change: '',
        twenties: '',
        tens: '',
        fives: '',
        ones: '',
        quarters: '',
        dimes: '',
        nickels: '',
        pennies: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(event){
      this.setState({[event.target.name] : event.target.value});
  }

  calculateChange(){
    
    let amountDue = this.state.due;
    let amountReceived = this.state.received;
    
    let difference = (amountReceived - amountDue).toFixed(2);
    console.log(difference);
    this.setState({change : difference});
        
        let twentiesNum = Math.floor(difference/20);
        this.setState({twenties : twentiesNum});
        console.log(this.state.twenties);
        let twentyChange = difference % 20;

        let tensNum = Math.floor(twentyChange/10);
        this.setState({tens : tensNum});
        console.log(this.state.tens)
        let tenChange = twentyChange % 10;

        let fivesNum = Math.floor(tenChange/5);
        this.setState({fives : fivesNum})
        let fiveChange = tenChange % 5;
        
        let dollarsNum = Math.floor(fiveChange/1); 
        this.setState({dollars : dollarsNum})     
        let dollarChange = fiveChange % 1;
    
        let quartersNum = Math.floor(dollarChange/0.25);
        this.setState({quarters : quartersNum})       
        let quarterChange = dollarChange % 0.25;

        let dimesNum = Math.floor(quarterChange/0.10);
        this.setState({dimes : dimesNum})    
        let dimeChange = quarterChange % 0.10;
    
        let nickelsNum = Math.floor(dimeChange/0.05);
        this.setState({nickels : nickelsNum})       
        let nickelChange = dimeChange % 0.05;

        let penniesNum = Math.floor(nickelChange/0.01);
        this.setState({pennies : penniesNum})

        

}

  render() {
    return(
      <div className='container'>
      <h3 className='header'>Change Calculator</h3>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Enter Information</div>
              <div className='panel-body'>
                <label htmlFor='due'>How Much Is Due?</label>
                <input value={this.state.due} onChange={this.handleChange} className='form-control' id='due' name='amountDue'></input>
                <label htmlFor='received'>How Much Was Received?</label>
                <input value={this.state.received} onChange={this.handleChange} className='form-control' id='received' name='amountReceived'></input>
              </div>
              <div className='panel-footer'>
                <button className='btn btn-primary btn-block active' onClick={this.calculateChange} name='calcButton'>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
            <div className='panel-body'>
            <div className='alert alert-success' role='alert'>Total Change is ${this.state.change}</div>
           
            <div className='row'>
              <div className='col-sm-3'>
                <div className='well'>
                  <h4>Twenties</h4>
                  <p className='change'>{this.state.twenties}</p>
                  </div>
                </div>

                <div className='col-sm-3'>
                <div className='well'>
                  <h4>Tens</h4>
                  <p className='change'>{this.state.tens}</p>
                </div>
                </div>
              
                <div className='col-sm-3'>
                <div className='well'>
                  <h4>Fives</h4>
                  <p className='change'>{this.state.fives}</p>
                </div>
                </div>

                <div className='col-sm-3'>
                <div className='well' style={{margin: 0}}>
                  <h4>Ones</h4>
                  <p className='change'>{this.state.dollars}</p>
                </div>
                </div>
                
                </div>
            
            
            <div className='row'>
            <div className='col-sm-2'>
                <div className='well'>
                  <h4>Quarters</h4>
                  <p className='change'>{this.state.quarters}</p>
                </div>
                </div>

                <div className='col-sm-2'>
                <div className='well'>
                  <h4>Dimes</h4>
                  <p className='change'>{this.state.dimes}</p>
                </div>
                </div>

                <div className='col-sm-2'>
                <div className='well'>
                  <h4>Nickels</h4>
                  <p className='change'>{this.state.nickels}</p>
                </div>
                </div>

                <div className='col-sm-2'>
                <div className='well'>
                  <h4>Pennies</h4>
                  <p className='change'>{this.state.pennies}</p>
                </div>
                </div>
            </div>
            
            
          </div>
        </div>
        </div>
        </div>
        </div>
    )
  }
}

export default App;
