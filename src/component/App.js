import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,Route } from  'react-router-dom';
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Question from './question'
import Leaderboard from './leaderboard';
import Signin from './signin'
import Dashboard from './dashboard'
import Addnew from './addqestion'





class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (

  
        <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: 'red'}} />
          {
            this.props.loading 
            ? <Signin /> 

            :
            <Fragment>
                
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/leader' component={Leaderboard} />
              <Route path='/add' component={Addnew} />
               <Route path='/ques/:id' component={Question} /> 
            
            
            
         </Fragment>  
                
          }
        </Fragment>
      </Router>
        
    
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
   
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
