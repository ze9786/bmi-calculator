import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Row, Input, Button } from 'reactstrap';
import ReactDOM from "react-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            weight:'',
            height:'',
        }
        this.handleHeightChange=this.handleHeightChange.bind(this);
        this.handleWeightChange=this.handleWeightChange.bind(this);
        this.calculateBMI=this.calculateBMI.bind(this);
        
    }

  
    handleHeightChange(e) {
        this.setState({
            height: e.target.value
        });
    
    }
    handleWeightChange(e) {
        this.setState({
            weight: e.target.value
        });
    
    }
    calculateBMI(){
        if(this.state.weight && this.state.height)
        var bmi=this.state.weight/(this.state.height*this.state.height);
        return bmi;
    }
    getBMIResults(bmi){
        let bmiResults = {
          label: '',
          alertClass: '',
        };
        
        if (bmi <= 18.5){
          bmiResults.label = 'Underweight';
          bmiResults.alertClass = 'alert-danger';
        } 
        else if (bmi <= 24.9) {
          bmiResults.label = 'Normal weight';
          bmiResults.alertClass = 'alert-success';
        }
        else if (bmi <= 29.9){
          bmiResults.label = 'Overweight';
          bmiResults.alertClass = 'alert-warning';
        }
        else if (bmi >= 30) {
          bmiResults.label = 'Obesity';
          bmiResults.alertClass = 'alert-danger';
        } else {
          bmiResults.label = 'BMI';
          bmiResults.alertClass = 'alert-primary';
        }
    
        return bmiResults;
      }

    render() {
        let bmi=this.calculateBMI();
        let results=this.getBMIResults(bmi);
        return (
            <div className="container">
                <h1>BMI Calculator</h1>
                <div className="row row-content">
                <div className="col-sm-12 offset-1">
            <form>
                <div className="row">
                <div className="form-group col-12 col-sm-6">
                <legend>Weight</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" id="weight" type="number" value={ this.state.weight } onChange={ this.handleWeightChange } />
                    <label className="control-label" htmlFor="weight">kg</label>
                  </div>
                </div>
              </div>

              <div className="form-group col-12 col-sm-6">
                <legend>Height</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" id="height" type="number" name="height" value={ this.state.height } onChange={ this.handleHeightChange } />
                    <label className="control-label" htmlFor="height">m</label>
                  </div>
                </div>
              </div>
                </div>
            </form>
          </div>
           <div className="col-sm-3"></div> 
          <div className="col col-sm-6">
            <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
          </div>
          <div className="col-sm-3"></div> 
        </div>
        </div>
        );
    }
    
}
function BmiDisplay(props){
  return (
    <div id="bmiContainer" className={"bmi-result alert " + props.alertClass}>
      <div>{ props.bmi || '--.-' }</div>
      <div>{ props.label }</div>
    </div> 
  )
}

export default Home;