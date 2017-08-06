import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../../../actions'

// import productsActions from '../../../actions/products'
import AddProductView from './view'

class AddProductContainer extends Component {
  constructor (props) {
    super(props)
    this.titleValue = ''
    this.onTitleChange = this.onTitleChange.bind(this)
    this.formSubmitHandler = this.formSubmitHandler.bind(this)
  }

  onTitleChange (event) {
    console.log(11, event.target.value);
    // this.setState({title: event.target.value})
    this.titleValue = event.target.value
  }

  formSubmitHandler () {
    // productsActions.create({title: this.state.title})
    console.log(this.titleValue);
    this.props.dispatch(addProduct(this.titleValue))
    this.titleValue = ''
  }

  render () {
    return (
      <AddProductView
        handleTitleChange={this.onTitleChange}
        addHandle={this.formSubmitHandler}
        titleValue={this.titleValue}
      />
    )
  }
}

AddProductContainer = connect()(AddProductContainer)

export default AddProductContainer
