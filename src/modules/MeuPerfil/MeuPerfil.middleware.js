import { SAVE_PROFILE, LOAD_PROFILE, LOAD_UFS } from './MeuPerfil.actions';

const meuPerfilMiddleware = store => next => action => {

    let payload = null;
    switch(action.type) {

        case LOAD_PROFILE:
            console.log("load profile middleware");
            payload = { nome: 'Anderson Carvalho Junqueira Osório' }; 

            action.payload = payload;
            next(action);
            break;

        case LOAD_UFS:
            console.log("load ufs middleware");
            payload = [{ sigla: "DF", nome: "Distrito Federal" }, { sigla: "SP", nome: "São Paulo" }];

            action.payload = payload;
            next(action);
            break;

        case SAVE_PROFILE:
            console.log("save profile middleware");
            next(action);
            break;

        default:
            next(action);

    }

};

export default meuPerfilMiddleware