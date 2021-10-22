var app = Vue.createApp({
    data: function() {
        return {
            commands: commands,
            characters: ['Terra', 'Ventus', 'Aqua'],
            activeCharacterFilter: null, 
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
        },
        filteredCommands: function() {
            var result = this.commands;
            var character = this.activeCharacterFilter;
            if (character) {
                result = result.filter(function(command) {
                    return command.availability.includes(character);
                })
            }
            return result;
        },
    },
    methods: {
        setActiveCharacterFilter: function(character) {
            this.activeCharacterFilter = character;
        }
    },
});
