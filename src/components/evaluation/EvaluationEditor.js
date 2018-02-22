import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createEvaluation from '../../actions/evaluation/create'
import RaisedButton from 'material-ui/RaisedButton'


class EvaluationEditor extends PureComponent{
  constructor(props){
    super()

   const { color, remark, date } = props

   this.state = {
    color,
    remark,
    date
    }
  }

  componentWillMount() {
  this.setState({
    date: new Date()
   })
  }

 updateColor(event){
   this.setState({
     color: this.refs.color.value
   })
 }

 updateRemark(event){
   this.setState({
     remark: this.refs.remark.value
   })
 }

 saveEvaluation() {
  const { studentId } = this.props
  const { color, remark, date } = this.state
  this.props.createEvaluation({color, remark, date}, studentId)

  }

    render() {

        return (
          <div className="box">
          <div className="editor">
          <input
            type="text"
            ref="date"
            className="date"
            placeholder="date"
            defaultValue={this.state.date}
            readOnly='readOnly' />

            <input
              type="text"
              ref="color"
              className="color"
              placeholder="color"
              defaultValue={this.state.updateColor}
              onChange={this.updateColor.bind(this)}
              onKeyDown={this.updateColor.bind(this)} />


            <input
              type="text"
              ref="remark"
              className="remark"
              placeholder="Remark"
              defaultValue={this.state.updateRemark}
              onChange={this.updateRemark.bind(this)}
              onKeyDown={this.updateRemark.bind(this)} />


            <div className="actions">
            <RaisedButton
              label="Add Evaluation"
              primary={true}
              onClick={this.saveEvaluation.bind(this)}
               />
          </div>
          </div>
        </div>
        )
      }
    }

    export default connect(null, { createEvaluation })(EvaluationEditor)
