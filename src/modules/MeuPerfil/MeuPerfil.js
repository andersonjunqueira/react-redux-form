import React, { Component } from 'react';

import MeuPerfilForm from './MeuPerfilForm';

class MeuPerfil extends Component {

    doSubmit(formData) {
        formData.preventDefault();
        console.log(formData);
    }

    render() {
        return (
            <MeuPerfilForm handleSubmit={this.doSubmit}/>
        );
    }

}

export default MeuPerfil;
