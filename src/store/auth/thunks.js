import { async } from "@firebase/util";
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

    };

};

export const startGoogleSignIn = () => { 

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };

};

export const startEmailPasswordSignIn = ({email, password}) => {

    return async(dispatch) => {

        dispatch(checkingCredentials());

        const resp = await loginWithEmailPassword(email, password);

        const {displayName, photoURL, ok, errorMessage} = resp;

        if (!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({displayName, email, photoURL}));


    };
};

export const startCreatingUserWithEmailPassword = ({email, password, displayName, displayLastName}) => {

    return async(dispatch) => {

        dispatch(checkingCredentials());

        const resp = await registerUserWithEmailPassword({email, password, displayLastName, displayName});

        const {ok, uid, photoURL, errorMessage} = resp;

        if (!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, displayLastName, email, photoURL}));

        console.log(resp)

    }
}