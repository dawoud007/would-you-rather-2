import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';
class QuestionDetails extends Component{
    render(){
        const {id}=this.props
        return(
<div className='component-container'>
       <Card id={id} />
    </div>

        )
    }
}
function mapStateToProps ({ authedUser}, { match }) {
    const { id } = match.params
return{
    id
}

}
export default connect(mapStateToProps)(QuestionDetails);