import React,{Component,Fragment,Redirect} from 'react'


import { connect } from 'react-redux';
import Nav from './nav'
import { handleAddQuestion } from '../actions/questions';


class Addnew extends Component{
    state = {    
	    
    	optionOne:'',
		optionTwo:'',
		
	};

	setOptionValue = (e, type) => {
		const value = e.target.value;

		
			if(type === 'optionOne'){
				this.setState({optionOne: value})
			}else{
				this.setState({optionTwo: value})
			}
		}
	

	submitting = (event) => {   
    	event.preventDefault();

    	const { dispatch } = this.props
    	const { optionOne, optionTwo} = this.state   
    
    	dispatch(handleAddQuestion(
      		optionOne,
      		optionTwo,
		))
		this.props.history.push('/');

    	this.setState({
		
        	optionOne:'',
			optionTwo:'',

		
		  })
		
  	}
 
	render() {
		const { authedUser,users } = this.props;
		const image=users[authedUser].avatarURL
		const{optionOne,optionTwo}=this.state

	

        
        return(
            <Fragment>
                <Nav/>
                <div className="addform">
          
         <img className='author-imag' src={image} alt={users[authedUser].name}/>

		 <form  onSubmit={this.submitting}>
          <h1>would you rather</h1>

          <div>
          <h3>first question</h3>
		  <input type="text" 
		  onChange={(e) => this.setOptionValue(e,'optionOne')} 
		  placeholder="enter your question"/>


          <h3>second question</h3>
		  <input type="text"
		  onChange={(e) => this.setOptionValue(e,'optionTwo')}  
		  placeholder="enter your question"/>
          </div>
          <div>
              <button className="btn"
			  disabled={!(optionOne && optionTwo)}
			  > Add question</button>
          </div>
          </form>
      </div>
      
            </Fragment>
        
        )
    }
    
}
function mapStateToProps({ authedUser ,users}) {

  

    return {
	  authedUser,
	  users,
    
    }
  }
export default connect(mapStateToProps)(Addnew);