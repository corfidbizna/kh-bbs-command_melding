var app = Vue.createApp({
    data: function() {
        return {
            commands: commands,
            patternMap: commandPatternMap,
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
                //type: '',
                name: 'Name',
                ingredients: 'Ingredients',
                //percent: 'Craft %',
                //pattern: '',
                //availability: 'Availability'
                shimmering: "Shimmering",
                fleeting: "Fleeting",
                pulsing: "Pulsing",
                wellspring: "Wellspring",
                soothing: "Soothing",
                hungry: "Hungry",
                abounding: "Abounding"
            };
        },
        filteredCommands: function() {
            var characters = this.characters; 
            var characterNames = Object.keys(characters);
            var result = commands.filter(function(command) {
                var keep = false;
                characterNames.forEach(function(characterName) {
                    if (characters[characterName]) {
                        keep = keep || command.availability.includes(characterName);
                    }
                });
                return keep;
            });
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
