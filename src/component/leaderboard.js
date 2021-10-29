import React,{Component} from 'react';
import { connect } from 'react-redux';
import Nav from './nav'
class Leaderboard extends Component{
  render(){



const characters=this.props.characters


   const authors= characters.map((user,i=0) => (
       <li key={user.id} className='leaderboardcard'>
           <div>
           <img src={user.avatarURL} ult={user.name} />
   <h1>{user.name}<span style={{color:`blue`}}>{"   "}{1+i +'th'}</span></h1>
           </div>

           <div>
   <h3>Questions score :{user.questions}</h3>
   <h3>answers score :{user.answers}</h3>
   <h3>total score :{user.score}</h3>


           </div>
       
       </li>
   
  ))
    return(
      <div>
        <Nav/>
      <ul className="leaderfather">
     {authors}
      </ul>
      </div>
    )
  }
}


function mapStateToProps ({ users,questions }) {

    let characters = []; 
    Object.values(users).map((char) =>
    
    characters.push({
    id: char.id,
    avatarURL: char.avatarURL,
    name: char.name,
    questions: char.questions.length,
    answers: Object.keys(char.answers).length,
    score: char.questions.length + Object.keys(char.answers).length,
 
    })
    
    )
    characters.sort((a, b) => b.score - a.score)
  
  return {
    
    characters
    
  }
}

export default connect(mapStateToProps)(Leaderboard);
