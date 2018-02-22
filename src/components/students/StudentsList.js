import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import './StudentsList.css'

class StudentsList extends PureComponent{


  renderStudents(student, index){
    return(
      <div key={index} className="col-md-4">
        <Paper className='Student_paper' zDepth={2} rounded={false}>
        <div>
        <br />
        <a href={`/student/${student.batch_id}/${student._id}`}>
        {student.name}</a>
        </div>
         <img className="S_photo" alt="" src={ student.photo }/>
         <p> Last evaluation:  </p>
        </Paper>
      </div>
    )
  }


  render(){
    const { students } = this.props

    return(
    <div>
      <h2>Students List:</h2>
       <div>
         { this.props.students.map(this.renderStudents)}
       </div>
     </div>
    )
  }
}


export default StudentsList
