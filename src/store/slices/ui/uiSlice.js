import { createSlice } from '@reduxjs/toolkit';

const historial = JSON.parse(localStorage.getItem('historial'));

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loaderGeneral: false,
        loaderResetPassword: false,
        resetPassword:false,
        theme: 'light',
        historial: historial || [],
        menuOpen: 'false',
        modalAbm: null,
        popupAlert: null,

    },
    reducers: {

        resetPasswordActive: (state) => {
            state.resetPassword =true;
        },

        resetPasswordFalse: (state) => {
            state.resetPassword = false;
        },

        loaderActive: (state) => {
            state.loaderGeneral = true;
        },
        loaderDisabled: (state) => {
            state.loaderGeneral = false;
        },

        loaderResetPasswordActive: (state) => {
            state.loaderResetPassword = true;
        },
        loaderResetPasswordInactive: (state) => {
            state.loaderResetPassword = false;
        },


        toggleTheme: (state ) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';        
        },

        toggleNavbar: (state) => {
            state.menuOpen = state.menuOpen === 'true' ? 'false' : 'true';
        },

        openNavbar: (state) => {
            state.menuOpen = 'true';
        },

        closeNavbar: (state) => {
            state.menuOpen = 'false';
        },

            openPopUpAlert: (state) => {
                state.popupAlert = true
            },

            closePopUpAlert: (state) => {
                state.popupAlert = false
            },

            togglePopUpAlert: (state) => {
                state.popupAlert = !state.popupAlert
            },

        addHistorial: (state, { payload }) => {

            const existe = state.historial.some(item => JSON.stringify(item.compatibilidad.id) === JSON.stringify(payload.compatibilidad.id));
            if (!existe) {
                state.historial.push(payload);
            }
        },

        clearHistorial :(state) => {

            state.historial = [];

            localStorage.removeItem('historial');


        },

        openModal: (state, {payload}) => {

            state.modalAbm = payload

        },

    }
});


// Action creators are generated for each case reducer function
export const { 
    toggleTheme,
    addHistorial,
    toggleNavbar, 
    loaderActive, 
    loaderDisabled, 
    openNavbar, 
    closeNavbar, 
    clearHistorial, 
    openPopUpAlert, 
    closePopUpAlert, 
    togglePopUpAlert,
    loaderResetPasswordActive,
    loaderResetPasswordInactive,
    resetPasswordActive,
    resetPasswordFalse } = uiSlice.actions;
