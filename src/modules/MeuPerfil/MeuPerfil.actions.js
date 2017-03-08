export const [ SAVE_PROFILE, LOAD_PROFILE, LOAD_UFS ] = [ "SAVE_PROFILE", "LOAD_PROFILE", "LOAD_UFS" ];

export const loadProfile = function() {
    console.log("action load profile called");
    return {
        type: LOAD_PROFILE
    }
}

export const loadUfs = function() {
    return {
        type: LOAD_UFS
    }
}

export const saveProfile = function(payload) {
    return {
        type: SAVE_PROFILE, 
        payload
    }
}
