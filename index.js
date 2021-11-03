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
            abilityMap: abilityMap,
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
            var crystalKeys = [
                "shimmering",
                "fleeting",
                "pulsing",
                "wellspring",
                "soothing",
                "hungry",
                "abounding",
            ];
            var patternMap = this.patternMap;
            var abilityMap = this.abilityMap;
            var result = jsonClone(this.commands);
            result = result.filter(function(command) {
                var keep = false;
                characterNames.forEach(function(characterName) {
                    if (characters[characterName]) {
                        keep = keep || command.availability.includes(characterName);
                    }
                })
                return keep;
            })
            result.forEach(function(command) {
                crystalKeys.forEach(function(crystalKey) {
                    var abilityName = patternMap[command.pattern || '-'][crystalKey];
                    var ability = abilityMap[abilityName] || {type: 'Blank'};
                    command[crystalKey] = abilityName;
                    command[crystalKey + '_type'] = ability.type;
                });
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
