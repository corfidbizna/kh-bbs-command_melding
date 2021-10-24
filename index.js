var app = Vue.createApp({
    data: function() {
        return {
            commands: commands,
            characters: {
                Terra: true, 
                Ventus: true, 
                Aqua: true,
            },
        };
    },
    computed: {
        numberOfCommands: function() {
            return this.commands.length;
        },
        columns: function() {
            return {
                //type: 'Type',
                type: '',
                name: 'Command Name',
                ingredients: 'Ingredients',
                percent: '%',
                pattern: 'Pattern',
                //availability: 'Availability'
            };
        },
        filteredCommands: function() {
            var characters = this.characters; 
            var characterNames = Object.keys(characters);
            var result = this.commands.filter(function(command) {
                var keep = false;
                characterNames.forEach(function(characterName) {
                    if (characters[characterName]) {
                        keep = keep || command.availability.includes(characterName);
                    }
                })
                return keep;
            })
            return result;
        },
    },
    methods: {
        resetCharacterFilter: function() {
            this.characters.Terra = true;
            this.characters.Ventus = true;
            this.characters.Aqua = true;
        }
    },
});
