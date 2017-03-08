import React, { Component } from 'react';

import SimpleForm from './SimpleForm';

class MeuPerfil extends Component {

    doSubmit(formData) {
        formData();
    }

    render() {
        return (
            <SimpleForm handleSubmit={this.doSubmit}/>
        );
    }

}

export default MeuPerfil;
