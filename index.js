var app = Vue.createApp({
    data: function() {
        return {
            commands: commands,
            patternMap: commandPatternMap,
            abilities: abilities,
            abilityMap: abilityMap,
            mutableAbilities: [
                Object.assign(
                    {
                        slotsFull: 5, 
                        slotTargeted: true,
                    },
                    abilityMap['Treasure Magnet']
                ),
                Object.assign(
                    {
                        slotsFull: 1, 
                        slotTargeted: true,
                    },
                    abilityMap['Fire Boost']
                ),
                Object.assign(
                    {
                        slotsFull: 1, 
                        slotTargeted: false,
                    },
                    abilityMap['Once More']
                ),
            ],
            characters: {
                Terra: true, 
                Ventus: true, 
                Aqua: true,
            },
            crystals: {
                shimmering: 'Shimmering',
                fleeting: 'Fleeting',
                pulsing: 'Pulsing',
                wellspring: 'Wellspring',
                soothing: 'Soothing',
                hungry: 'Hungry',
                abounding: 'Abounding',
            },
            activeCrystal: 'shimmering',
        };
    },
    computed: {
        numberOfCommands: function() {
            return this.commands.length;
        },
        columns: function() {
            var crystal = this.activeCrystal;
            var result = {
                //type: 'Type',
                //type: '',
                name: 'Name',
                ingredients: 'Ingredients',
                //percent: 'Craft %',
                //pattern: '',
                //availability: 'Availability'
            };
            result[crystal] = this.crystals[crystal];
            return result;
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
