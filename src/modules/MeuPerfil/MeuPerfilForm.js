import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import isEmail from 'sane-email-validation';

class renderInput extends Component {
    render() {
        const field = this.props; 
        return (
            <div>
                <label>{field.placeholder}</label>
                <input {...field.input}/>
                {field.meta.error && field.meta.touched && <span>{field.meta.error}</span>}<br/>
            </div>
        );
    }
}

class renderPhones extends Component {

    normalizePhone(value) {
        const nums = value.replace(/[^\d]/g, '');
        return nums;
    }

    render() {
        const { fields, meta } = this.props; 
        return (
            <ul>
                <li><button type="button" onClick={() => fields.push()}>Adicionar Telefone</button></li>
                {fields.map((field, index) =>
                    <li key={index}>
                        <Field name={field} normalize={this.normalizePhone} component={renderInput} placeholder={"Phone #" + (index + 1)}/>
                        <button type="button" onClick={() => fields.remove(index)}>Remover</button>
                    </li>
                )}
                {meta.error && <li>{meta.error}</li>}
            </ul>
        );
    }
}

class MeuPerfilForm extends Component {

    render() {
        const { handleSubmit, doSubmit, invalid, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(doSubmit)}>
                <Field name="username" component={renderInput} placeholder="Username"/><br/>
                <Field name="password" component={renderInput} placeholder="Password"/><br/>
                <Field name="email" component={renderInput} placeholder="Email"/><br/>                    
                <FieldArray name="phones" component={renderPhones} />
                <button type="submit" disabled={invalid || submitting}>Enviar</button>
                
            </form>
        );
    }

}

const validateForm = values => {
    const errors = {};

    if(!values.username) {
        errors.username = "Required";
    }

    if(!values.password) {
        errors.password = "Required";
    }

    if(!values.email) {
        errors.email = "Required";
    } else if(!isEmail(values.email)) {
        errors.email = "Invalid";
    }

    if(values.phones && values.phones.length > 3) {
        errors.phones = [];
        errors.phones._error = "Muitos telefones";
    }
    return errors;
}

MeuPerfilForm = reduxForm({
    form: "meuPerfilForm",
    destroyOnUnmount: false,
    validate: validateForm
})(MeuPerfilForm);

export default MeuPerfilForm;
