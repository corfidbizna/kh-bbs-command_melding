var app = Vue.createApp({
    data: function() {
        return {
            commands: commands,
            patternMap: commandPatternMap,
            abilities: abilities,
            abilityMap: abilityMap,
            mutableAbilities: jsonClone(abilities),
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
            commandTypes: {
                all: 'All',
                attack: 'Attack',
                magic: 'Magic',
                mobility: 'Mobility',
                block: 'Block',
                reprisal: 'Reprisal',
                shotlock: 'Shotlock',
            },
            activeCommandType: 'all',
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
            var activeCommandType = this.activeCommandType;
            var result = this.commands.filter(function(command) {
                var keep = false;
                characterNames.forEach(function(characterName) {
                    if (characters[characterName]) {
                        keep = keep || command.availability.includes(characterName);
                    }
                });
                if (keep && activeCommandType !== 'all') {
                    keep = command.type.toLocaleLowerCase() === activeCommandType;
                }
                return keep;
            });
            return result;
        },
        mutableAbilityMap: function() {
            var result = {};
            this.mutableAbilities.forEach(function(ability) {
                result[ability.name] = ability;
            });
            return result;
        },
    },
    methods: {
        resetCharacterFilter: function() {
            this.characters.Terra = true;
            this.characters.Ventus = true;
            this.characters.Aqua = true;
        },
        updateAbility: function(ability, index) {
            this.mutableAbilities.splice(index, 1, ability);
        },
    },
});
