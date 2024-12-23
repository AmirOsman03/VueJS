const app = Vue.createApp ({
    data() {
        <!-- Tuka gi postavuvame podatocite koi ke se koristat vo app -->
        return {
            email: ''
        };
    },

    <!-- Tuka se naveduvaat zavisnostite na mail-ot -->
    computed: {
        isValidLength() {
            return this.email.length > 5;
        },

        hasAtSymbol() {
            return this.email.includes('@');
        },

        hasValidDomain() {
            return /\.(com|org|net|edu|gov|io|mk)$/.test(this.email);
        }
    }
});

<!-- Go povrzuvame Vue so elementot na stranicata koj ima id="app" -->
app.mount('#email');
