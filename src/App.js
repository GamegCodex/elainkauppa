import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'


class App extends Component {

  constructor() {
    super();
    this.state = { 
      items: []
      
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/foods')
    //fetch('./catfood.json')
    .then(response => response.json())
    .then((response) => {
      //console.log(response.catfood)
      console.log( JSON.stringify( response ));
      
      this.setState( { items:response })
    })
    
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;   
    this.setState({ [name]: value })
    
    event.persist()
    this.setState(prevState => ({
      values: {
      ...prevState.values,
      [name]: value
      },
    }));    
  }

    handleBlur = (event) => {
      const name = event.target.name;
      event.persist()
      this.setState(prevState => ({
        touched: {
          ...prevState.touched,
          [name]: true
        },
      }));
    };

    onSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:8080/foods', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
      method: 'POST',
            body: JSON.stringify({'title': this.langname.value, 'id': this.code.value})
        });
    
    }


  render() {
    return (

      //console.log("Ja ..tut")
      <div className="App">

      <Home items={this.state.items} />
      

      </div>


      /*
      <Router>
           <div className="App">
  
              <Navbar/>
              
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
              
             </div>
       </Router>
      */
     )
  }

}

App.defaultProps = {
    action: 'http://localhost:8080/foods',
    method: 'GET'
};
export default App;
