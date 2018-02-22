import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import './StudentsList.css'

class StudentsList extends PureComponent{

  renderStudents(student, index){
    return(
      <div key={index} className='card'>
        <Paper className='Student_paper' zDepth={2} rounded={false}>
        <span className='card'>
        <br />
        <a href={`/student/${student.batch_id}/${student._id}`}>
        {student.name}</a>
        <br />
        <a href={`/student/${student.batch_id}/${student._id}`}>
        <img className="S_photo" alt="" src={ student.photo }/>
        </a>
         <p> Last evaluation: { student.current_color } </p>
         </span>
        </Paper>
      </div>
    )
  }


  render(){
    // const { students } = this.props

    return(
       <div>
       <h2 className='list'>Students List:</h2>
         { this.props.students.map(this.renderStudents)}
       </div>
    )
  }
}


export default StudentsList
