import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

class MeuPerfilForm extends Component {

    constructor(props) {
        super(props);
        this.ok = this.ok.bind(this);
    }

    ok(data) {
        return this.props.handleSubmit(data);
    }

    render() {
        const {
            firstName
        } = this.props;

        return (
            <div>
            <form className="form-horizontal" onSubmit={this.ok}>
                <div>
                  <label>First Name</label>
                  <div>
                    <Field name="firstName" component="input" type="text" placeholder="First Name" className="form-control"/>
                  </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            -{firstName}-
            </div>
        );
    }

}

export default reduxForm({
    form: 'meuPerfilForm'
})(MeuPerfilForm);

const selector = formValueSelector('meuPerfilForm')
MeuPerfilForm = connect(
  state => {
    const { firstName } = selector(state, 'firstName')
    return {
      firstName
    }
  }
)(MeuPerfilForm)
