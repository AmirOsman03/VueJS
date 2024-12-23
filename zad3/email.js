const app = Vue.createApp ({
    data() {
        return {
            email: ''
        };
    },
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

app.mount('#email');
