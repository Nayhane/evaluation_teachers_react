import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import StudentsList from '../components/students/StudentsList'



class Batch extends PureComponent {

  constructor(){
    super()

    this.state = {
      batch: undefined
    }
  }

  componentWillMount() {
    const { batchId } = this.props.match.params
    this.props.fetchOneBatch(batchId)
  }

  componentWillReceiveProps(nextProps){
    const { batches } = nextProps
    this.setState({batch: batches[0]})
  }

  render() {
    const { batches } = this.props
    const { batch } = this.state

    if (!batch) { return null }



    return (
      <div className="Batch">
        <h1>Batch # {batches[0].batchNumber}</h1>

        <StudentsList />
        <div>
        <h3> Add new Student </h3>
        <input
           type="text"
           ref="name"
           className="name"
           placeholder="Full name"
           // defaultValue="Full name"
           // onChange={this.props}
           // onKeyDown={this.props}
           />



        <input
         type="text"
         ref="photo"
         className="photo"
         placeholder="Photo URL"
         // defaultValue="Photo"
         // onChange={this.props}
         // onKeyDown={this.props}
         />

         <div className="actions">
           <button className="primary">Save</button>
         </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchOneBatch})(Batch)
