import React, { Component } from 'react';

import MeuPerfilForm from './MeuPerfilForm';

class MeuPerfil extends Component {

    handleSubmit(values) {
        // Do something with the form values
        console.log(values);
    }

    render() {
        return (
            <MeuPerfilForm onSubmit={this.handleSubmit} />
        );
    }
} 

export default MeuPerfil;