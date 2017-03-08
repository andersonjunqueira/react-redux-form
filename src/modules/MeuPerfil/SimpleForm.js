import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SimpleForm extends Component {

    handleSubmit(data) {
        console.log(data);
    }

    render() {
        const { pristine, reset, submitting } = this.props
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div>
                    <label>First Name</label>
                    <div>
                    <Field name="firstName" component="input" type="text" placeholder="First Name"/>
                    </div>
                </div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
  form: 'simple',
  fields: ['firstName']
})(SimpleForm)