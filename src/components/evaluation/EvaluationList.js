import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'


class EvaluationList extends PureComponent{


  renderEvaluations(evaluation, index){
    return(
      <div key={index} className="col-md-4">
        {evaluation.color}
      </div>
    )
  }


  render(){
    const { evaluations } = this.props

    return(
    <div>
      <h2>Evaluation List:</h2>
       <div>
         { this.props.evaluations.map(this.renderEvaluations)}
       </div>
     </div>
    )
  }
}


export default EvaluationList
