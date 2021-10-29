import React,{Component,Fragment} from 'react'
import {Link} from 'react-router-dom'
import formatDate from '../utils/helpers'
import {connect} from 'react-redux'
import Nav from './nav'
import { returnCondition } from '../actions/authedUser'
class Dashboard extends Component{

    state={
        display:true,
      
    }
 answersToDisplay=(e,condition)=>{
     e.preventDefault()
     this.props.dispatch(returnCondition(condition));
     this.setState({display:condition})
     
    
 }


    render(){
 const{quesanswered,quesunanswered,users}=this.props


   let ans=[]
   if(this.state.display===true){
       ans=quesanswered
   }else{
       ans=quesunanswered
   }


   const dispalyedques=ans.map(item=>{
    return(
        <Link to={`ques/${item.id}`}>
            

    
    <li key={item.id} className='dashboardquestion'>
    <img className='author-imag' alt={item.author} src={users[item.author].avatarURL}/>
    <h3>{item.author}</h3>
    <em>{formatDate(item.timestamp)}</em>
    <h3>{item.optionOne.text}</h3>
    <h3>{item.optionTwo.text}</h3>
    
    </li> 
    




  
</Link>

    )
})
        return(
        <Fragment>
        <Nav/>
        <div className="container">
            <div className="dashboard">
            <button className='dashbtn' onClick={(e) => this.answersToDisplay(e, false)}><h5>UNANSWERED</h5></button>
            <span>or</span>
			<button className='dashbtn' onClick={(e) => this.answersToDisplay(e, true)}><h5>ANSWERED</h5></button>
            </div>

        </div>
         <ul>
           {dispalyedques}
         </ul>
        </Fragment>
        )
    }
}
function mapStateToProps({ authedUser, users, questions,condition }) {


   const ids= Object.keys(users[authedUser].answers)
    const quesanswered = ids.map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp)
    const quesunanswered = Object.keys(questions).filter(q => !ids.includes(q))
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp)
console.log(quesanswered,quesunanswered)
    return {
        quesanswered,
        quesunanswered,
        users,
    }
}
  
  
  export default connect(mapStateToProps)(Dashboard);