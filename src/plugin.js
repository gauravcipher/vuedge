import VeButton from "./Buttons/Ve-button.vue";

export default {
  install: (app, options) => {
    // Plugin code goes here
    /* declare global component */
    app.component("ve-button", VeButton);
  },
};