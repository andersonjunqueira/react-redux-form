import React, { Component } from 'react';

import SimpleForm from './SimpleForm';

class SimplePage extends Component {

    handleSubmit = (values) => {
        // Do something with the form values
        console.log(values);
    }

    render() {
        return (
            <SimpleForm onSubmit={this.handleSubmit} />
        );
    }
} 

export default SimplePage;