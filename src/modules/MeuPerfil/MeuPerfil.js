import React, { Component } from 'react';

import MeuPerfilForm from './MeuPerfilForm';

class MeuPerfil extends Component {

    doSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <MeuPerfilForm doSubmit={this.doSubmit}/>
        );
    }

}

export default MeuPerfil;
