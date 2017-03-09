import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SimpleForm extends Component {

    render() {
        const { handleSubmit, pristine, reset, submitting, firstName } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" type="text" placeholder="First Name"/>
                </div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
        )
    }
}

export default reduxForm({
  form: 'simple',
  fields: ['firstName']
})(SimpleForm)