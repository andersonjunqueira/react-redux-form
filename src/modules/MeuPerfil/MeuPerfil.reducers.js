import { MODE_INSERT, MODE_UPDATE, MODE_VIEW, SUCCESS, ERROR } from '../../app/App.reducers';
import { SAVE_PROFILE, LOAD_PROFILE, LOAD_UFS } from './MeuPerfil.actions';

const initialState = {
    mode: MODE_INSERT,
    status: null,
    message: null,
    ufs: [],
    data: {
        id: "",
        nome: "",
        cpf: "",
        rg: "",
        orgaoExpeditor: "",
        dataExpedicao: "",
        dataNascimento: "",
        emails: [],
        telefones: [
            { 
                numero: "",
                tipo: ""
            }
        ],
        endereco: {
            logradouro: "",
            complemento: "",
            numero: "",
            pais: "",
            cep: "",
            uf: "",
            cidade: "",
            bairro: ""
        }
    }
}

const meuPerfilReducer = (state = initialState, action) => {

    let payload = null;

    switch (action.type) {

        case SAVE_PROFILE:
            return Object.assign({}, state, {
                mode: MODE_UPDATE,
                status: SUCCESS,
                message: "Operação executada com sucesso!",
                data: action.payload
            });

        case LOAD_PROFILE:
            console.log("reducer load profile called");
            return Object.assign({}, state, {
                mode: MODE_UPDATE,
                status: SUCCESS,
                message: "Operação executada com sucesso!",
                data: action.payload
            });

        case LOAD_UFS:
            payload = [{ sigla: "DF", nome: "Distrito Federal" }, { sigla: "SP", nome: "São Paulo" }];

            return Object.assign({}, state, {
                mode: MODE_INSERT,
                status: SUCCESS,
                message: "Operação executada com sucesso!",
                ufs: payload
            });

        default:
            return state
    }
}

export default meuPerfilReducer;