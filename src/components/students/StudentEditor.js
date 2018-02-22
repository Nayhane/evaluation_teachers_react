import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStudent from '../../actions/students/create'
import RaisedButton from 'material-ui/RaisedButton'


class StudentEditor extends PureComponent{
  constructor(props){
    super()

   const {name, photo} = props

   this.state = {
    name,
    photo,
    }
  }

 updateName(event){
   this.setState({
     name: this.refs.name.value
   })
 }

 updatePhoto(event){
   this.setState({
     photo: this.refs.photo.value
   })
 }

 saveStudent() {
    const {
      name,
      photo,
    } = this.state
    this.props.createStudent({name, photo})

  }


    render() {
        return (
          <div className="box">
          <div className="editor">
            <input
              type="text"
              ref="name"
              className="name"
              placeholder="Full name"
              defaultValue={this.state.updateName}
              onChange={this.updateName.bind(this)}
              onKeyDown={this.updateName.bind(this)} />


            <input
              type="text"
              ref="photo"
              className="photo"
              placeholder="Photo URL"
              defaultValue={this.state.updatePhoto}
              onChange={this.updatePhoto.bind(this)}
              onKeyDown={this.updatePhoto.bind(this)} />


            <div className="actions">
            <RaisedButton
              label="Add Student"
              primary={true}
              onClick={this.saveStudent.bind(this)}
               />
          </div>
          </div>
        </div>
        )
      }
    }

    export default connect(null, { createStudent })(StudentEditor)
