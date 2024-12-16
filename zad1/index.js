const app = Vue.createApp({
    <!-- Tuka gi postavuvame podatocite koi ke se koristat vo app -->
    data() {
        return {
            password: ''
        };
    },

    <!-- Tuka se naveduvaat zavisnostite na lozinkata -->
    computed: {
        message() {
            return this.password;
        },
        has_uppercase() {
            return /[A-Z]/.test(this.password);
        },
        has_lowercase() {
            return /[a-z]/.test(this.password);
        },
        has_number() {
            return /\d/.test(this.password);
        },
        has_special() {
            return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
        }
    }
});

<!-- Go povrzuvame Vue so elementot na stranicata koj ima id="app" -->
app.mount('#app');