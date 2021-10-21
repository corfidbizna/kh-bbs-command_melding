var app = Vue.createApp({
    data: function() {
        return {
            commands: commands
        };
    },
    computed: {
        numberOfCommands: function() {
            return this.commands.length;
        },
        columns: function() {
            return {
                type: 'Type',
                name: 'Command Name',
                ingredients: 'Ingredients',
                percent: '%',
                pattern: 'Pattern',
                availability: 'Availability'
            };
        }
    }
}).mount('#app');
