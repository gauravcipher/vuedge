# Vue-Edge

A Vue 3 library for reusable components with full typescript support

## Ways to use
1. As an external script
    ```Javascript
    <script src="https://unpkg.com/vue@next"></script>
    <script src="path/to/dist/vuedge.js"></script>
    <script type="text/javascript">
        const Counter = {
        data() {
            return {
            counter: 0
            }
        }
        };
        const app = Vue.createApp(Counter);
        app.use(Vuedge);
        app.mount('#app');
    </script>
    ```
2. As an npm package or in a Vue CLI project
    ```Javascript
    npm i vuedge
    ```
    To try it out locally, dist/ folder will have the code. In progress.
3. As a local Dev project
    ```Javascript
    npm start
    ```
    Start editing src/App.vue to see the changes made in library live in a vue project