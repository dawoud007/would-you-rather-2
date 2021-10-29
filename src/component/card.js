import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addingAnswer } from '../actions/questions'
import { Redirect } from 'react-router-dom';
import Error from './error404'


class QuestionDetail extends Component {
    state={
        cond:false,
        selected: '' ,
        
    }

    chooseOption = (value) => { 
        this.setState(()=> ({
            selected: value
        }))
    }

    submitting = (e) => {
        e.preventDefault();
        
        const { dispatch, id } = this.props;
        const selected = this.state.selected
        dispatch(addingAnswer(id, selected));
        this.setState({cond:true})
    }
    render() {
        const { id,users,questions,authedUser,condition} = this.props
        const question = questions[id]
       
      
      if(!question){
          return(
              <Error/>
          )
      }

       
     

        if (!question) {
            return <Redirect to="/"/>
        }

        return (
            <div>
          
                    {!condition ? (
                        <div className='dashboardquestiondetail' style={{marginTop:`50px`}}>
                               <h2>would you rather</h2>
                             <img alt="author-img" className="author-imag" src={users[question.author].avatarURL}/>
                          <form onSubmit={this.submitting}> 
                          <select  className="select" onChange={(e)=>this.chooseOption(e.target.value)}>
                          <option value="optionTwo"  >{question.optionTwo.text}</option>
                                  <option value="optionOne"   >{question.optionOne.text}</option>
                               
                              
                          </select>
                          <br />
                          <button 
                           disabled={!this.state.selected}
                           
                          className='dshbtn'
                             
                             
                          >
                              choose
                          </button>
                      </form>
                     
                          {this.state.cond?
                            <div className='dashboardquestiondetail'>
                            
                            <div className="answers">
                    <h3>{question.optionOne.text}<span>{"  votes are___"+question.optionOne.votes.length}</span>
                    <span>{"  precentage is____"+((question.optionOne.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100)+"%"}</span></h3>
                            </div>
                            <div className="answers">
                    <h3>{question.optionTwo.text}<span>{"  votes are____"+question.optionTwo.votes.length}</span>
                    <span>{"  precentage is____"+((question.optionTwo.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100)+"%"}</span></h3>
                            </div>
                        </div>
                        
                        :
                        ""}
                     
                      </div>
                    ): (
                        <div className='dashboardquestiondetail'>
                            <h1>would you rather</h1>
                           <h2>{question.author}</h2>
                            <img alt="author-img" className="author-imgdsh" src={users[question.author].avatarURL}/>
                            <div className="answers">
                    <h3>{question.optionOne.text}<span>{"  votes are___"+question.optionOne.votes.length}</span>
                    <span>{"  precentage is____"+((question.optionOne.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100)+"%"}</span></h3>
                            </div>
                            <div className="answers">
                    <h3>{question.optionTwo.text}<span>{"  votes are____"+question.optionTwo.votes.length}</span>
                    <span>{"  precentage is____"+((question.optionTwo.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100)+"%"}</span></h3>
                            </div>
                        </div>

                    )}
                    
               
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions,condition}) {

  
    return {
       users,
        authedUser,
        questions,
        condition,
    
    }
}

export default connect(mapStateToProps)(QuestionDetail);