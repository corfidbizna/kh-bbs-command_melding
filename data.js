// ==================================
//              Patterns
// ==================================

var commandPatternMap = {
    '-': {
        pattern: "-",
        shimmering: "",
        fleeting: "",
        pulsing: "",
        wellspring: "",
        soothing: "",
        hungry: "",
        abounding: ""
    },
    A: {
        pattern: "A",
        shimmering: "Fire Boost",
        fleeting: "Magic Haste",
        pulsing: "Leaf Bracer",
        wellspring: "Air Combo Plus",
        soothing: "HP Boost",
        hungry: "HP Prize Plus",
        abounding: "Link Prize Plus"
    },
    B: {
        pattern: "B",
        shimmering: "Fire Boost",
        fleeting: "Reload Boost",
        pulsing: "Finish Boost",
        wellspring: "Once More",
        soothing: "Damage Syphon",
        hungry: "HP Prize Plus",
        abounding: "EXP Chance"
    },
    C: {
        pattern: "C",
        shimmering: "Fire Screen",
        fleeting: "Attack Haste",
        pulsing: "Finish Boost",
        wellspring: "Combo Plus",
        soothing: "HP Boost",
        hungry: "HP Prize Plus",
        abounding: "Link Prize Plus"
    },
    D: {
        pattern: "D",
        shimmering: "Fire Screen",
        fleeting: "Attack Haste",
        pulsing: "Leaf Bracer",
        wellspring: "Combo Plus",
        soothing: "HP Boost",
        hungry: "HP Prize Plus",
        abounding: "Link Prize Plus"
    },
    E: {
        pattern: "E",
        shimmering: "Blizzard Boost",
        fleeting: "Magic Haste",
        pulsing: "Leaf Bracer",
        wellspring: "Combo Plus",
        soothing: "Item Boost",
        hungry: "HP Prize Plus",
        abounding: "Lucky Strike"
    },
    F: {
        pattern: "F",
        shimmering: "Blizzard Boost",
        fleeting: "Reload Boost",
        pulsing: "Second Chance",
        wellspring: "Air Combo Plus",
        soothing: "Damage Syphon",
        hungry: "HP Prize Plus",
        abounding: "Lucky Strike"
    },
    G: {
        pattern: "G",
        shimmering: "Blizzard Screen",
        fleeting: "Attack Haste",
        pulsing: "Leaf Bracer",
        wellspring: "Air Combo Plus",
        soothing: "Item Boost",
        hungry: "HP Prize Plus",
        abounding: "Luck Boost"
    },
    H: {
        pattern: "H",
        shimmering: "Blizzard Screen",
        fleeting: "Magic Haste",
        pulsing: "Combo F Boost",
        wellspring: "Air Combo Plus",
        soothing: "Item Boost",
        hungry: "HP Prize Plus",
        abounding: "EXP Walker"
    },
    I: {
        pattern: "I",
        shimmering: "Thunder Boost",
        fleeting: "Magic Haste",
        pulsing: "Combo F Boost",
        wellspring: "Air Combo Plus",
        soothing: "HP Boost",
        hungry: "Treasure Magnet",
        abounding: "Link Prize Plus"
    },
    J: {
        pattern: "J",
        shimmering: "Thunder Boost",
        fleeting: "Reload Haste",
        pulsing: "Combo F Boost",
        wellspring: "Once More",
        soothing: "Defender",
        hungry: "Treasure Magnet",
        abounding: "EXP Chance"
    },
    K: {
        pattern: "K",
        shimmering: "Thunder Screen",
        fleeting: "Attack Haste",
        pulsing: "Finish Boost",
        wellspring: "Combo Plus",
        soothing: "HP Boost",
        hungry: "Treasure Magnet",
        abounding: "Link Prize Plus"
    },
    L: {
        pattern: "L",
        shimmering: "Thunder Screen",
        fleeting: "Attack Haste",
        pulsing: "Finish Boost",
        wellspring: "Combo Plus",
        soothing: "HP Boost",
        hungry: "Treasure Magnet",
        abounding: "Lucky Strike"
    },
    M: {
        pattern: "M",
        shimmering: "Cure Boost",
        fleeting: "Magic Haste",
        pulsing: "Combo F Boost",
        wellspring: "Combo Plus",
        soothing: "Item Boost",
        hungry: "Treasure Magnet",
        abounding: "Lucky Strike"
    },
    N: {
        pattern: "N",
        shimmering: "Cure Boost",
        fleeting: "Reload Boost",
        pulsing: "Second Chance",
        wellspring: "Combo Plus",
        soothing: "Defender",
        hungry: "Treasure Magnet",
        abounding: "Lucky Strike"
    },
    O: {
        pattern: "O",
        shimmering: "Dark Screen",
        fleeting: "Attack Haste",
        pulsing: "Finish Boost",
        wellspring: "Air Combo Plus",
        soothing: "Item Boost",
        hungry: "Treasure Magnet",
        abounding: "Lucky Strike"
    },
    P: {
        pattern: "P",
        shimmering: "Dark Screen",
        fleeting: "Magic Haste",
        pulsing: "Combo F Boost",
        wellspring: "Air Combo Plus",
        soothing: "Item Boost",
        hungry: "Treasure Magnet",
        abounding: "EXP Walker"
    }
};

// ==================================
//              Abilities
// ==================================

var prizeAbilities = [
    {
        type: "Prize",
        name: "Treasure Magnet",
        nameJP: "ドロー",
        number: 5,
        description: "Automatically scoops up nearby prizes for you. Multi-install the ability to increase range. ",
        crystal: "Hungry"
    },
    {
        type: "Prize",
        name: "HP Prize Plus",
        nameJP: "HPプライズアップ",
        number: 3,
        description: "Increases the number of HP prizes enemies drop. Multi-install the ability for even more prizes. ",
        crystal: "Hungry"
    },
    {
        type: "Prize",
        name: "Link Prize Plus",
        nameJP: "リンクプライズアップ",
        number: 3,
        description: "Increases the number of D-Link prizes enemies drop. Multi-install the ability for even more prizes. ",
        crystal: "Abounding"
    },
    {
        type: "Prize",
        name: "Lucky Strike",
        nameJP: "ラックアップ",
        number: 5,
        description: "Increases the number of prize boxes enemies drop. Multi-install the ability for even more prizes. ",
        crystal: "Abounding"
    }
];

var statsAbilities = [
    {
        type: "Stats",
        name: "HP Boost",
        nameJP: "HPアップ",
        number: 3,
        description: "Increases your HP. Multi-install the ability to bump it up even further. ",
        crystal: "Soothing"
    },
    {
        type: "Stats",
        name: "Fire Boost",
        nameJP: "ファイアアップ",
        number: 3,
        description: "Increases the damage dealt by your Fire commands. Multi-install the ability to deal even more damage. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Blizzard Boost",
        nameJP: "ブリザドアップ",
        number: 3,
        description: "Increases the damage dealt by your Blizzard commands. Multi-install the ability to deal even more damage. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Thunder Boost",
        nameJP: "サンダーアップ",
        number: 3,
        description: "Increases the damage dealt by your Thunder commands. Multi-install the ability to deal even more damage. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Cure Boost",
        nameJP: "ケアルアップ",
        number: 3,
        description: "Increases the amount of HP you recover with Cure commands. Multi-install the ability to recover even more. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Item Boost",
        nameJP: "アイテムアップ",
        number: 3,
        description: "Increases the effectiveness of recovery item commands. Multi-install the ability for an even larger improvement. ",
        crystal: "Soothing"
    },
    {
        type: "Stats",
        name: "Attack Haste",
        nameJP: "アタックヘイスト",
        number: 5,
        description: "Shortens the reload time for all attack commands installed in your deck. Multi-install the ability for even quicker reloading. ",
        crystal: "Fleeting"
    },
    {
        type: "Stats",
        name: "Magic Haste",
        nameJP: "マジックヘイスト",
        number: 5,
        description: "Shortens the reload time for all magic commands installed in your deck. Multi-install the ability for even quicker reloading. ",
        crystal: "Fleeting"
    },
    {
        type: "Stats",
        name: "Combo F Boost",
        nameJP: "コンボFアップ",
        number: 2,
        description: "Increases the damage dealt by the last blow of your combos. Multi-install the ability to deal even more damage. ",
        crystal: "Pulsing"
    },
    {
        type: "Stats",
        name: "Finish Boost",
        nameJP: "コマンドFアップ",
        number: 2,
        description: "Increases the damage dealt by your Finish command. Multi-install the ability to deal even more damage. ",
        crystal: "Pulsing"
    },
    {
        type: "Stats",
        name: "Fire Screen",
        nameJP: "ファイアガード",
        number: 2,
        description: "Increases your resistance to Fire attacks. Multi-install the ability to bump it up even further. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Blizzard Screen",
        nameJP: "ブリザドガード",
        number: 2,
        description: "Increases your resistance to Blizzard attacks. Multi-install the ability to bump it up even further. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Thunder Screen",
        nameJP: "サンダーガード",
        number: 2,
        description: "Increases your resistance to Thunder attacks. Multi-install the ability to bump it up even further. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Dark Screen",
        nameJP: "ダークガード",
        number: 2,
        description: "Increases your resistance to darkness-based attacks. Multi-install the ability to bump it up even further. ",
        crystal: "Shimmering"
    },
    {
        type: "Stats",
        name: "Reload Boost",
        nameJP: "リロードブースト",
        number: 1,
        description: "Shortens the reload time for all commands installed in your deck whenever your HP falls below 25%. ",
        crystal: "Fleeting"
    },
    {
        type: "Stats",
        name: "Defender",
        nameJP: "ディフェンダー",
        number: 1,
        description: "Increases your Defense whenever your HP falls below 25%. ",
        crystal: "Soothing"
    }
];

var supportAbilities = [
    {
        type: "Support",
        name: "Zero EXP",
        nameJP: "EXPゼロ",
        number: 1,
        description: "Prevents you from gaining any EXP when you defeat enemies. ",
        crystal: "N/A"
    },
    {
        type: "Support",
        name: "Combo Plus",
        nameJP: "コンボプラス",
        number: 3,
        description: "Adds one stroke to your ground combos. Multi-install the ability for even longer combos. ",
        crystal: "Wellspring"
    },
    {
        type: "Support",
        name: "Air Combo Plus",
        nameJP: "エアコンボプラス",
        number: 3,
        description: "Adds one stroke to your aerial combos. Multi-install the ability for even longer combos. ",
        crystal: "Wellspring"
    },
    {
        type: "Support",
        name: "EXP Chance",
        nameJP: "EXPチャンス",
        number: 1,
        description: "Doubles the EXP you receive whenever your HP falls below 25%. ",
        crystal: "Abounding"
    },
    {
        type: "Support",
        name: "EXP Walker",
        nameJP: "EXPウォーク",
        number: 1,
        description: "Awards you 1 EXP for every step you take. ",
        crystal: "Abounding"
    },
    {
        type: "Support",
        name: "Damage Syphon",
        nameJP: "ダメージアスピル",
        number: 1,
        description: "Restores some of the Focus Gauge when you take damage. ",
        crystal: "Soothing"
    },
    {
        type: "Support",
        name: "Second Chance",
        nameJP: "ラストリーヴ",
        number: "1",
        description: "Ensures you always retain 1 HP after an attack that would otherwise finish you off, unless you are already down to 1 HP. ",
        crystal: "Pulsing"
    },
    {
        type: "Support",
        name: "Once More",
        nameJP: "コンボリーヴ",
        number: 1,
        description: "Ensures you always retain 1 HP throughout a combo that would otherwise finish you off, unless you are already down to 1 HP when the first attack hits. ",
        crystal: "Wellspring "
    },
    {
        type: "Support",
        name: "Scan",
        nameJP: "ライブラ",
        number: 1,
        description: "Displays the HP of the targeted enemy. ",
        crystal: "N/A"
    },
    {
        type: "Support",
        name: "Leaf Bracer",
        nameJP: "リーフベール",
        number: 1,
        description: "Prevents you from taking damage while using Cure commands. ",
        crystal: "Pulsing"
    }
];

var abilities = [].concat(
    prizeAbilities,
    statsAbilities,
    supportAbilities
);

// Sets up abilities that aren't covered in the melding system. 
var abilityMap = {
    '-': {
        type: "NONE",
        name: "NONE",
        nameJP: "",
        number: 0,
        description: "",
        crystal: ""
    },
    'Scan': {
        type: "Support",
        name: "Scan",
        nameJP: "ライブラ",
        number: 1,
        description: "Displays the HP of the targeted enemy. ",
        crystal: "N/A"
    },
    'Zero EXP': {
        type: "Support",
        name: "Zero EXP",
        nameJP: "EXPゼロ",
        number: 1,
        description: "Prevents you from gaining any EXP when you defeat enemies. ",
        crystal: "N/A"
    },
    'Luck Boost': {
        type: "Blank",//???
        name: "Luck Boost",
        nameJP: "",
        number: 0,
        description: "",
        crystal: "Abounding"
    },
    'Reload Haste': {
        type: "Blank",//???
        name: "Reload Haste",
        nameJP: "",
        number: 0,
        description: "",
        crystal: "Fleeting"
    }
};
abilities.forEach(function(ability) {
    var slots = [];
    for (var i = 0; i < ability.number; i++) {
        slots.push('empty');
    }
    ability.slots = slots;
    abilityMap[ability.name] = ability;
});

// ==================================
//              Commands
// ==================================

var attackCommands = [
    {
        type: 'Attack',
        name: 'Blitz',
        ingredients: ['Quick Blitz', 'Slot Edge'],
        percent: 90,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Blitz',
        ingredients: ['Barrier Surge', 'Wishing Edge'],
        percent: 90,
        pattern: 'P',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Blitz',
        ingredients: ['Stun Edge', 'Slot Edge'],
        percent: 90,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Meteor Crash',
        ingredients: ['Blitz', 'Quake'],
        percent: 100,
        pattern: 'N',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Meteor Crash',
        ingredients: ['Fire Strike', 'Brutal Blast'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Magic Hour',
        ingredients: ['Blitz', 'Zero Graviga'],
        percent: 90,
        pattern: 'O',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Magic Hour',
        ingredients: ['Barrier Surge', 'Aeroga'],
        percent: 90,
        pattern: 'N',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Dash',
        ingredients: ['Sliding Dash', 'Fire'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Dash',
        ingredients: ['Sliding Dash', 'Fira'],
        percent: 100,
        pattern: 'C',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Dash',
        ingredients: ['Confusion Strike', 'Fire'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Dark Haze',
        ingredients: ['Fire Dash', 'Zero Gravira'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Dark Haze',
        ingredients: ['Fire Dash', 'Blackout'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Dark Haze',
        ingredients: ['Fire Surge', 'Zero Gravity'],
        percent: 100,
        pattern: 'C',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Sonic Blade',
        ingredients: ['Blitz', 'Dark Haze'],
        percent: 90,
        pattern: 'D',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Sonic Blade',
        ingredients: ['Blitz', 'Air Slide'],
        percent: 90,
        pattern: 'N',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Sonic Blade',
        ingredients: ['Fire Dash', 'Thunder Surge'],
        percent: 90,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Chaos Blade',
        ingredients: ['Dark Haze', 'Sonic Blade'],
        percent: 90,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Zantetsuken',
        ingredients: ['Dark Haze', 'Stopga'],
        percent: 80,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Zantetsuken',
        ingredients: ['Sonic Blade', 'Stopga'],
        percent: 80,
        pattern: 'F',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Strike Raid',
        ingredients: ['Quick Blitz', 'Sliding Dash'],
        percent: 100,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Freeze Raid',
        ingredients: ['Strike Raid', 'Blizzara'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Freeze Raid',
        ingredients: ['Blizzard Edge', 'Binding Strike'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Treasure Raid',
        ingredients: ['Strike Raid', 'Slot Edge'],
        percent: 100,
        pattern: 'O',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Treasure Raid',
        ingredients: ['Slot Edge', 'Magnet'],
        percent: 100,
        pattern: 'D',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Treasure Raid',
        ingredients: ['Slot Edge', 'Magnera'],
        percent: 100,
        pattern: 'K',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Spark Raid',
        ingredients: ['Freeze Raid', 'Magnega'],
        percent: 100,
        pattern: 'J',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Spark Raid',
        ingredients: ['Treasure Raid', 'Magnega'],
        percent: 100,
        pattern: 'N',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Spark Raid',
        ingredients: ['Thunder Surge', 'Dodge Roll'],
        percent: 20,
        pattern: 'P',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Spark Raid',
        ingredients: ['Thundaga', 'Dodge Roll'],
        percent: 20,
        pattern: 'L',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Spark Raid',
        ingredients: ['Dodge Roll', 'Stun Block'],
        percent: 20,
        pattern: 'L',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Wind Raid',
        ingredients: ['Freeze Raid', 'Aeroga'],
        percent: 100,
        pattern: 'B',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Wind Raid',
        ingredients: ['Treasure Raid', 'Aeroga'],
        percent: 100,
        pattern: 'F',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Fire Surge',
        ingredients: ['Fire Dash', 'Ignite'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Surge',
        ingredients: ['Fire Strike', 'Fira'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Surge',
        ingredients: ['Confusion Strike', 'Fira'],
        percent: 100,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Surge',
        ingredients: ['Binding Strike', 'Fira'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Barrier Surge',
        ingredients: ['Fire Dash', 'Barrier'],
        percent: 100,
        pattern: 'D',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Barrier Surge',
        ingredients: ['Stun Edge', 'Barrier'],
        percent: 100,
        pattern: 'K',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Thunder Surge',
        ingredients: ['Fire Dash', 'Thundara'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Thunder Surge',
        ingredients: ['Freeze Raid', 'Thundara'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Thunder Surge',
        ingredients: ['Stun Edge', 'Thundara'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Thunder Surge',
        ingredients: ['Confusion Strike', 'Thundara'],
        percent: 95,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Aerial Slam',
        ingredients: ['Fire Dash', 'High Jump'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Aerial Slam',
        ingredients: ['Fire Surge', 'Aero'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Aerial Slam',
        ingredients: ['Fire Strike', 'Aerora'],
        percent: 90,
        pattern: 'C',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Dark Haze', 'Sonic Blade'],
        percent: 20,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Dark Haze', 'Stopga'],
        percent: 20,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Sonic Blade', 'Stopga'],
        percent: 20,
        pattern: 'F',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Sliding Dash', 'Thunder'],
        percent: 5,
        pattern: 'K',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Strike Raid', 'Thunder'],
        percent: 5,
        pattern: 'L',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Strike Raid', 'Thundara'],
        percent: 5,
        pattern: 'K',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Solum',
        ingredients: ['Confusion Strike', 'Thundara'],
        percent: 5,
        pattern: 'I',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Blitz', 'Aerial Slam'],
        percent: 100,
        pattern: 'F',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Quick Blitz', 'Slot Edge'],
        percent: 10,
        pattern: 'O',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Fire Strike', 'Aerora'],
        percent: 10,
        pattern: 'C',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Quick Blitz', 'Blizzard'],
        percent: 5,
        pattern: 'G',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Quick Blitz', 'Blizzara'],
        percent: 5,
        pattern: 'H',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Sliding Dash', 'Blizzard'],
        percent: 5,
        pattern: 'E',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Sliding Dash', 'Blizzara'],
        percent: 5,
        pattern: 'G',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Poison Edge', 'Cura'],
        percent: 5,
        pattern: 'P',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Ars Arcanum',
        ingredients: ['Blizzard Edge', 'Cura'],
        percent: 5,
        pattern: 'G',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Time Splicer',
        ingredients: ['Aerial Slam', 'Stopga'],
        percent: 100,
        pattern: 'F',
        availability: ['Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Time Splicer',
        ingredients: ['Stopga', 'Barrier'],
        percent: 20,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Time Splicer',
        ingredients: ['Barrier Surge', 'Wishing Edge'],
        percent: 10,
        pattern: 'P',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Time Splicer',
        ingredients: ['Stun Edge', 'Slot Edge'],
        percent: 10,
        pattern: 'K',
        availability: ['Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Poison Edge',
        ingredients: ['Quick Blitz', 'Poison'],
        percent: 95,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Poison Edge',
        ingredients: ['Sliding Dash', 'Poison'],
        percent: 95,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Poison Edge',
        ingredients: ['Strike Raid', 'Poison'],
        percent: 95,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Wishing Edge',
        ingredients: ['Strike Raid', 'Barrier Surge'],
        percent: 100,
        pattern: 'O',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Wishing Edge',
        ingredients: ['Barrier Surge', 'Stun Edge'],
        percent: 100,
        pattern: 'K',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Wishing Edge',
        ingredients: ['Stun Edge', 'Binding Strike'],
        percent: 100,
        pattern: 'J',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Blizzard Edge',
        ingredients: ['Quick Blitz', 'Blizzard'],
        percent: 95,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Blizzard Edge',
        ingredients: ['Quick Blitz', 'Blizzara'],
        percent: 95,
        pattern: 'H',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Blizzard Edge',
        ingredients: ['Sliding Dash', 'Blizzard'],
        percent: 95,
        pattern: 'E',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Blizzard Edge',
        ingredients: ['Sliding Dash', 'Blizzara'],
        percent: 95,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Stun Edge',
        ingredients: ['Sliding Dash', 'Thunder'],
        percent: 95,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Stun Edge',
        ingredients: ['Strike Raid', 'Thunder'],
        percent: 95,
        pattern: 'L',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Stun Edge',
        ingredients: ['Strike Raid', 'Thundara'],
        percent: 95,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Wishing Edge', 'Cure'],
        percent: 100,
        pattern: 'O',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Poison Edge', 'Cura'],
        percent: 95,
        pattern: 'P',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Blizzard Edge', 'Cura'],
        percent: 95,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Curaga', 'Renewal Block'],
        percent: 90,
        pattern: 'N',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Curaga', 'Focus Block'],
        percent: 90,
        pattern: 'P',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Curaga', 'Renewal Barrier'],
        percent: 90,
        pattern: 'N',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Slot Edge',
        ingredients: ['Curaga', 'Focus Barrier'],
        percent: 90,
        pattern: 'P',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Strike',
        ingredients: ['Poison Edge', 'Fira'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Strike',
        ingredients: ['Wishing Edge', 'Ignite'],
        percent: 100,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Fire Strike',
        ingredients: ['Stun Edge', 'Fire'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Confusion Strike',
        ingredients: ['Quick Blitz', 'Confuse'],
        percent: 100,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Confusion Strike',
        ingredients: ['Sliding Dash', 'Zero Gravity'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Confusion Strike',
        ingredients: ['Strike Raid', 'Confuse'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Binding Strike',
        ingredients: ['Quick Blitz', 'Bind'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Binding Strike',
        ingredients: ['Strike Raid', 'Bind'],
        percent: 100,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Binding Strike',
        ingredients: ['Stun Edge', 'Zero Gravity'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Brutal Blast',
        ingredients: ['Stun Edge', 'Mine Shield'],
        percent: 70,
        pattern: 'O',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Brutal Blast',
        ingredients: ['Binding Strike', 'Mine Square'],
        percent: 70,
        pattern: 'L',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Tornado Strike',
        ingredients: ['Confusion Strike', 'Aeroga'],
        percent: 100,
        pattern: 'G',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Tornado Strike',
        ingredients: ['Binding Strike', 'Aeroga'],
        percent: 100,
        pattern: 'F',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Magnet Spiral',
        ingredients: ['Binding Strike', 'Collision Magnet'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Magnet Spiral',
        ingredients: ['Binding Strike', 'Magnega'],
        percent: 100,
        pattern: 'J',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Magnet Spiral',
        ingredients: ['Quick Blitz', 'Magnera'],
        percent: 20,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Magnet Spiral',
        ingredients: ['Stun Edge', 'Magnera'],
        percent: 20,
        pattern: 'L',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Magnet Spiral',
        ingredients: ['Zero Gravira', 'Magnet'],
        percent: 20,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Windcutter',
        ingredients: ['Binding Strike', 'Aeroga'],
        percent: 100,
        pattern: 'F',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Windcutter',
        ingredients: ['Confusion Strike', 'Aeroga'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Limit Storm',
        ingredients: ['Brutal Blast', 'Confusion Strike'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Limit Storm',
        ingredients: ['Brutal Blast', 'Binding Strike'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Salvation',
        ingredients: ['Wind Raid', 'Curaga'],
        percent: 100,
        pattern: 'N',
        availability: ['Ventus']
    },
    {
        type: 'Attack',
        name: 'Collision Magnet',
        ingredients: ['Quick Blitz', 'Magnera'],
        percent: 80,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Collision Magnet',
        ingredients: ['Stun Edge', 'Magnera'],
        percent: 80,
        pattern: 'L',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Collision Magnet',
        ingredients: ['Zero Gravira', 'Magnet'],
        percent: 80,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Attack',
        name: 'Geo Impact',
        ingredients: ['Brutal Blast', 'Brutal Blast'],
        percent: 70,
        pattern: 'N',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Sacrifice',
        ingredients: ['Dark Haze', 'Warp'],
        percent: 100,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Sacrifice',
        ingredients: ['Poison Edge', 'Warp'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra']
    },
    {
        type: 'Attack',
        name: 'Break Time',
        ingredients: ['Curaga', 'Renewal Block'],
        percent: 10,
        pattern: 'N',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Attack',
        name: 'Break Time',
        ingredients: ['Curaga', 'Renewal Barrier'],
        percent: 10,
        pattern: 'N',
        availability: ['Aqua']
    },
    {
        type: 'Attack',
        name: 'Break Time',
        ingredients: ['Curaga', 'Focus Block'],
        percent: 10,
        pattern: 'P',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Attack',
        name: 'Break Time',
        ingredients: ['Curaga', 'Focus Barrier'],
        percent: 10,
        pattern: 'P',
        availability: ['Aqua']
    }
];
attackCommands.forEach(function(item) {
    item.category = 'battle';
})

var magicCommands = [
    {
        type: 'Magic',
        name: 'Fira',
        ingredients: ['Fire Dash', 'Fire'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Fira',
        ingredients: ['Fire Strike', 'Fire'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Fira',
        ingredients: ['Fire', 'Fire'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Fira',
        ingredients: ['Fire', 'Ignite'],
        percent: 100,
        pattern: 'C',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga',
        ingredients: ['Fire Dash', 'Fira'],
        percent: 90,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga',
        ingredients: ['Fire', 'Fira'],
        percent: 90,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga',
        ingredients: ['Fira', 'Fira'],
        percent: 90,
        pattern: 'B',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Dark Firaga',
        ingredients: ['Dark Haze', 'Firaga'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Dark Firaga',
        ingredients: ['Firaga', 'Blackout'],
        percent: 100,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Fission Firaga',
        ingredients: ['Fira', 'Aeroga'],
        percent: 80,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Fission Firaga',
        ingredients: ['Firaga', 'Aerora'],
        percent: 80,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Fission Firaga',
        ingredients: ['Firaga', 'Aeroga'],
        percent: 80,
        pattern: 'B',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Triple Firaga',
        ingredients: ['Fira', 'Firaga'],
        percent: 95,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Triple Firaga',
        ingredients: ['Blitz', 'Firaga'],
        percent: 90,
        pattern: 'D',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Triple Firaga',
        ingredients: ['Firaga', 'Firaga'],
        percent: 90,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Crawling Fire',
        ingredients: ['Firaga', 'Slow'],
        percent: 80,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Crawling Fire',
        ingredients: ['Firaga', 'Stopra'],
        percent: 80,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Crawling Fire',
        ingredients: ['Firaga', 'Stopga'],
        percent: 80,
        pattern: 'B',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzara',
        ingredients: ['Strike Raid', 'Blizzard'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzara',
        ingredients: ['Blizzard Edge', 'Blizzard'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzara',
        ingredients: ['Blizzard', 'Blizzard'],
        percent: 100,
        pattern: 'E',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzara',
        ingredients: ['Blizzard', 'Aero'],
        percent: 100,
        pattern: 'H',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzaga',
        ingredients: ['Blizzard Edge', 'Blizzara'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzaga',
        ingredients: ['Blizzard', 'Blizzara'],
        percent: 100,
        pattern: 'E',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blizzaga',
        ingredients: ['Blizzara', 'Blizzara'],
        percent: 100,
        pattern: 'F',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Triple Blizzaga',
        ingredients: ['Blitz', 'Blizzaga'],
        percent: 100,
        pattern: 'G',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Triple Blizzaga',
        ingredients: ['Blizzara', 'Blizzaga'],
        percent: 100,
        pattern: 'E',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Triple Blizzaga',
        ingredients: ['Blizzaga', 'Blizzaga'],
        percent: 100,
        pattern: 'F',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundara',
        ingredients: ['Stun Edge', 'Thunder'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundara',
        ingredients: ['Thunder', 'Thunder'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundara',
        ingredients: ['Zero Gravity', 'Magnet'],
        percent: 100,
        pattern: 'L',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundaga',
        ingredients: ['Binding Strike', 'Thundara'],
        percent: 90,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundaga',
        ingredients: ['Thunder', 'Thundara'],
        percent: 90,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundaga',
        ingredients: ['Thundara', 'Thundara'],
        percent: 90,
        pattern: 'J',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundaga Shot',
        ingredients: ['Strike Raid', 'Thundaga'],
        percent: 85,
        pattern: 'I',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundaga Shot',
        ingredients: ['Freeze Raid', 'Thundaga'],
        percent: 85,
        pattern: 'E',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Thundaga Shot',
        ingredients: ['Firaga', 'Thundaga'],
        percent: 85,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Cura',
        ingredients: ['Thunder', 'Cure'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Cura',
        ingredients: ['Cure', 'Cure'],
        percent: 100,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Cura',
        ingredients: ['Cure', 'Aero'],
        percent: 100,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Curaga',
        ingredients: ['Cure', 'Cura'],
        percent: 100,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Curaga',
        ingredients: ['Cura', 'Cura'],
        percent: 100,
        pattern: 'N',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mine Shield',
        ingredients: ['Fira', 'Zero Gravity'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mine Shield',
        ingredients: ['Fira', 'Block'],
        percent: 100,
        pattern: 'C',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Magic',
        name: 'Mine Shield',
        ingredients: ['Ignite', 'Stop'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mine Shield',
        ingredients: ['Stopra', 'Block'],
        percent: 100,
        pattern: 'M',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Magic',
        name: 'Mine Square',
        ingredients: ['Fira', 'Stop'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mine Square',
        ingredients: ['Fira', 'Barrier'],
        percent: 100,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Mine Square',
        ingredients: ['Aerora', 'Ignite'],
        percent: 100,
        pattern: 'D',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mine Square',
        ingredients: ['Stopra', 'Barrier'],
        percent: 100,
        pattern: 'M',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Seeker Mine',
        ingredients: ['Mine Shield', 'Mine Square'],
        percent: 100,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Seeker Mine',
        ingredients: ['Mine Shield', 'Magnega'],
        percent: 100,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Seeker Mine',
        ingredients: ['Mine Square', 'Magnega'],
        percent: 100,
        pattern: 'D',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Zero Gravira',
        ingredients: ['Thunder', 'Zero Gravity'],
        percent: 90,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Zero Gravira',
        ingredients: ['Zero Gravity', 'Zero Gravity'],
        percent: 90,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Zero Gravira',
        ingredients: ['Magnet', 'Aero'],
        percent: 90,
        pattern: 'P',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Zero Graviga',
        ingredients: ['Thundara', 'Zero Gravira'],
        percent: 80,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Zero Graviga',
        ingredients: ['Zero Gravity', 'Zero Gravira'],
        percent: 80,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Zero Graviga',
        ingredients: ['Zero Gravira', 'Zero Gravira'],
        percent: 80,
        pattern: 'N',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Magnera',
        ingredients: ['Stun Edge', 'Magnet'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Magnera',
        ingredients: ['Thunder', 'Magnet'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Magnera',
        ingredients: ['Magnet', 'Magnet'],
        percent: 100,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Magnega',
        ingredients: ['Magnet', 'Magnera'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Magnega',
        ingredients: ['Magnera', 'Magnera'],
        percent: 100,
        pattern: 'J',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Munny Magnet',
        ingredients: ['Wishing Edge', 'Magnera'],
        percent: 100,
        pattern: 'K',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Munny Magnet',
        ingredients: ['Thundara', 'Magnera'],
        percent: 100,
        pattern: 'I',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Energy Magnet',
        ingredients: ['Cure', 'Magnera'],
        percent: 100,
        pattern: 'M',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Energy Magnet',
        ingredients: ['Cura', 'Magnera'],
        percent: 100,
        pattern: 'N',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'D-Link Magnet',
        ingredients: ['Zero Gravira', 'Magnera'],
        percent: 100,
        pattern: 'L',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'D-Link Magnet',
        ingredients: ['Magnera', 'Stopra'],
        percent: 100,
        pattern: 'I',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Aerora',
        ingredients: ['Quick Blitz', 'Aero'],
        percent: 95,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Aerora',
        ingredients: ['Thunder', 'Aero'],
        percent: 95,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Aerora',
        ingredients: ['Aero', 'Aero'],
        percent: 95,
        pattern: 'E',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Aeroga',
        ingredients: ['Quick Blitz', 'Aerora'],
        percent: 90,
        pattern: 'O',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Aeroga',
        ingredients: ['Aero', 'Aerora'],
        percent: 90,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Aeroga',
        ingredients: ['Aerora', 'Aerora'],
        percent: 90,
        pattern: 'N',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Warp',
        ingredients: ['Thundara', 'Zero Gravira'],
        percent: 20,
        pattern: 'I',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Warp',
        ingredients: ['Zero Gravity', 'Zero Gravira'],
        percent: 20,
        pattern: 'M',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Warp',
        ingredients: ['Zero Gravira', 'Zero Gravira'],
        percent: 20,
        pattern: 'N',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Warp',
        ingredients: ['Thunder', 'Zero Gravity'],
        percent: 10,
        pattern: 'I',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Warp',
        ingredients: ['Magnet', 'Aero'],
        percent: 10,
        pattern: 'P',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Warp',
        ingredients: ['Zero Gravity', 'Zero Gravity'],
        percent: 10,
        pattern: 'M',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Faith',
        ingredients: ['Wind Raid', 'Break Time'],
        percent: 100,
        pattern: 'N',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Deep Freeze',
        ingredients: ['Freeze Raid', 'Blizzaga'],
        percent: 100,
        pattern: 'G',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Deep Freeze',
        ingredients: ['Binding Strike', 'Blizzaga'],
        percent: 100,
        pattern: 'H',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Deep Freeze',
        ingredients: ['Blizzaga', 'Triple Blizzaga'],
        percent: 100,
        pattern: 'F',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Glacier',
        ingredients: ['Blizzaga', 'Deep Freeze'],
        percent: 100,
        pattern: 'E',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Glacier',
        ingredients: ['Triple Blizzaga', 'Deep Freeze'],
        percent: 100,
        pattern: 'F',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Ice Barrage',
        ingredients: ['Blizzaga', 'Mine Shield'],
        percent: 100,
        pattern: 'F',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Ice Barrage',
        ingredients: ['Blizzaga', 'Mine Square'],
        percent: 100,
        pattern: 'H',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga Burst',
        ingredients: ['Fira', 'Aeroga'],
        percent: 20,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga Burst',
        ingredients: ['Firaga', 'Aerora'],
        percent: 20,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga Burst',
        ingredients: ['Firaga', 'Aeroga'],
        percent: 20,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga Burst',
        ingredients: ['Firaga', 'Slow'],
        percent: 20,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga Burst',
        ingredients: ['Firaga', 'Stopra'],
        percent: 20,
        pattern: 'D',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Firaga Burst',
        ingredients: ['Firaga', 'Stopga'],
        percent: 20,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Fission Firaga', 'Firaga Burst'],
        percent: 100,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Blitz', 'Firaga'],
        percent: 10,
        pattern: 'D',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Fire Dash', 'Fira'],
        percent: 10,
        pattern: 'D',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Fire Surge', 'Cartwheel'],
        percent: 10,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Fire', 'Fira'],
        percent: 10,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Fira', 'Fira'],
        percent: 10,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Fira', 'Firaga'],
        percent: 10,
        pattern: 'A',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Raging Storm',
        ingredients: ['Firaga', 'Firaga'],
        percent: 10,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Magic',
        name: 'Mega Flare',
        ingredients: ['Fission Firaga', 'Crawling Fire'],
        percent: 100,
        pattern: 'B',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Quake',
        ingredients: ['Brutal Blast', 'Zero Graviga'],
        percent: 90,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Quake',
        ingredients: ['Brutal Blast', 'Magnega'],
        percent: 90,
        pattern: 'C',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Quake',
        ingredients: ['Stun Edge', 'Mine Shield'],
        percent: 30,
        pattern: 'O',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Quake',
        ingredients: ['Binding Strike', 'Mine Square'],
        percent: 30,
        pattern: 'L',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Quake',
        ingredients: ['Brutal Blast', 'Brutal Blast'],
        percent: 30,
        pattern: 'N',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Meteor',
        ingredients: ['Geo Impact', 'Quake'],
        percent: 100,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Meteor',
        ingredients: ['Brutal Blast', 'Zero Graviga'],
        percent: 10,
        pattern: 'B',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Meteor',
        ingredients: ['Brutal Blast', 'Magnega'],
        percent: 10,
        pattern: 'C',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Magnega', 'Aeroga'],
        percent: 100,
        pattern: 'N',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Quick Blitz', 'Aerora'],
        percent: 10,
        pattern: 'O',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Aero', 'Aerora'],
        percent: 10,
        pattern: 'M',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Aerora', 'Aerora'],
        percent: 10,
        pattern: 'N',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Quick Blitz', 'Aero'],
        percent: 5,
        pattern: 'G',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Thunder', 'Aero'],
        percent: 5,
        pattern: 'I',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Tornado',
        ingredients: ['Aero', 'Aero'],
        percent: 5,
        pattern: 'E',
        availability: ['Ventus']
    },
    {
        type: 'Magic',
        name: 'Transcendence',
        ingredients: ['Magnet Spiral', 'Zero Graviga'],
        percent: 100,
        pattern: 'J',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mini',
        ingredients: ['Magnera', 'Warp'],
        percent: 100,
        pattern: 'N',
        availability: ['Terra']
    },
    {
        type: 'Magic',
        name: 'Mini',
        ingredients: ['Magnega', 'Magnega'],
        percent: 100,
        pattern: 'J',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Mini',
        ingredients: ['Magnega', 'Bind'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blackout',
        ingredients: ['Zero Gravity', 'Confuse'],
        percent: 100,
        pattern: 'M',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blackout',
        ingredients: ['Zero Gravira', 'Confuse'],
        percent: 100,
        pattern: 'N',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Blackout',
        ingredients: ['Zero Gravira', 'Poison'],
        percent: 100,
        pattern: 'P',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Ignite',
        ingredients: ['Fire', 'Bind'],
        percent: 100,
        pattern: 'A',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Ignite',
        ingredients: ['Fira', 'Bind'],
        percent: 100,
        pattern: 'C',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Stopra',
        ingredients: ['Slow', 'Slow'],
        percent: 100,
        pattern: 'L',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Stopra',
        ingredients: ['Slow', 'Stop'],
        percent: 100,
        pattern: 'K',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Stopra',
        ingredients: ['Stop', 'Stop'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Stopga',
        ingredients: ['Stop', 'Stopra'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Magic',
        name: 'Stopga',
        ingredients: ['Stopra', 'Stopra'],
        percent: 100,
        pattern: 'J',
        availability: ['Terra', 'Ventus', 'Aqua']
    }
];
magicCommands.forEach(function(item) {
    item.category = 'battle';
})

var actionCommands = [
    {
        type: 'Mobility',
        name: 'Homing Slide',
        ingredients: ['Sliding Dash', 'Magnera'],
        percent: 100,
        pattern: 'P',
        availability: ['Ventus', 'Aqua']
    },
    {
        type: 'Mobility',
        name: 'Homing Slide',
        ingredients: ['Sliding Dash', 'Air Slide'],
        percent: 100,
        pattern: 'C',
        availability: ['Ventus', 'Aqua']
    },
    {
        type: 'Mobility',
        name: 'Homing Slide',
        ingredients: ['Magnet', 'Air Slide'],
        percent: 100,
        pattern: 'L',
        availability: ['Ventus', 'Aqua']
    },
    {
        type: 'Mobility',
        name: 'Thunder Roll',
        ingredients: ['Thunder Surge', 'Dodge Roll'],
        percent: 80,
        pattern: 'P',
        availability: ['Ventus']
    },
    {
        type: 'Mobility',
        name: 'Thunder Roll',
        ingredients: ['Thundaga', 'Dodge Roll'],
        percent: 80,
        pattern: 'L',
        availability: ['Ventus']
    },
    {
        type: 'Mobility',
        name: 'Thunder Roll',
        ingredients: ['Stun Block', 'Dodge Roll'],
        percent: 80,
        pattern: 'L',
        availability: ['Ventus']
    },
    {
        type: 'Mobility',
        name: 'Firewheel',
        ingredients: ['Firaga', 'Cartwheel'],
        percent: 100,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Mobility',
        name: 'Firewheel',
        ingredients: ['Fission Firaga', 'Cartwheel'],
        percent: 100,
        pattern: 'B',
        availability: ['Aqua']
    },
    {
        type: 'Mobility',
        name: 'Firewheel',
        ingredients: ['Fire Surge', 'Cartwheel'],
        percent: 90,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Mobility',
        name: 'Ice Slide',
        ingredients: ['Blizzard Edge', 'Air Slide'],
        percent: 100,
        pattern: 'F',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Mobility',
        name: 'Ice Slide',
        ingredients: ['Blizzaga', 'Air Slide'],
        percent: 100,
        pattern: 'H',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Mobility',
        name: 'Fire Glide',
        ingredients: ['Fire Surge', 'Glide'],
        percent: 100,
        pattern: 'C',
        availability: ['Ventus']
    },
    {
        type: 'Mobility',
        name: 'Fire Glide',
        ingredients: ['Firaga', 'Glide'],
        percent: 100,
        pattern: 'B',
        availability: ['Ventus']
    },
    {
        type: 'Block',
        name: 'Renewal Block',
        ingredients: ['Curaga', 'Block'],
        percent: 100,
        pattern: 'P',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Block',
        name: 'Renewal Block',
        ingredients: ['Esuna', 'Block'],
        percent: 100,
        pattern: 'C',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Block',
        name: 'Stun Block',
        ingredients: ['Stun Edge', 'Block'],
        percent: 100,
        pattern: 'L',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Block',
        name: 'Stun Block',
        ingredients: ['Thundaga', 'Block'],
        percent: 100,
        pattern: 'I',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Block',
        name: 'Poison Block',
        ingredients: ['Poison Edge', 'Block'],
        percent: 80,
        pattern: 'H',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Block',
        name: 'Poison Block',
        ingredients: ['Poison', 'Block'],
        percent: 80,
        pattern: 'P',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Block',
        name: 'Renewal Barrier',
        ingredients: ['Curaga', 'Barrier'],
        percent: 100,
        pattern: 'P',
        availability: ['Aqua']
    },
    {
        type: 'Block',
        name: 'Renewal Barrier',
        ingredients: ['Esuna', 'Barrier'],
        percent: 100,
        pattern: 'N',
        availability: ['Aqua']
    },
    {
        type: 'Block',
        name: 'Confuse Barrier',
        ingredients: ['Confusion Strike', 'Barrier'],
        percent: 100,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Block',
        name: 'Confuse Barrier',
        ingredients: ['Confuse', 'Barrier'],
        percent: 100,
        pattern: 'L',
        availability: ['Aqua']
    },
    {
        type: 'Block',
        name: 'Stop Barrier',
        ingredients: ['Stopga', 'Barrier'],
        percent: 80,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Reprisal',
        name: 'Payback Fang',
        ingredients: ['Sliding Dash', 'Counter Hammer'],
        percent: 100,
        pattern: 'P',
        availability: ['Terra']
    },
    {
        type: 'Reprisal',
        name: 'Payback Raid',
        ingredients: ['Sliding Dash', 'Strike Raid'],
        percent: 100,
        pattern: 'P',
        availability: ['Ventus']
    },
    {
        type: 'Reprisal',
        name: 'Payback Surge',
        ingredients: ['Sliding Dash', 'Fire Surge'],
        percent: 100,
        pattern: 'C',
        availability: ['Aqua']
    },
    {
        type: 'Reprisal',
        name: 'Payback Surge',
        ingredients: ['Sliding Dash', 'Thunder Surge'],
        percent: 100,
        pattern: 'L',
        availability: ['Aqua']
    }
];
actionCommands.forEach(function(item) {
    item.category = 'action';
})

var shotlockCommands = [
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Blitz', 'Dark Haze'],
        percent: 10,
        pattern: '-',
        availability: ['Terra']
    },
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Blitz', 'Air Slide'],
        percent: 10,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Fire Dash', 'Thunder Surge'],
        percent: 10,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Binding Strike', 'Thundara'],
        percent: 10,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Thunder', 'Thundara'],
        percent: 10,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Thundara', 'Thundara'],
        percent: 10,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Lightning Ray',
        ingredients: ['Aeroga', 'Barrier Surge'],
        percent: 10,
        pattern: '-',
        availability: ['Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Meteor Shower',
        ingredients: ['Strike Raid', 'Thundaga'],
        percent: 15,
        pattern: '-',
        availability: ['Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Meteor Shower',
        ingredients: ['Freeze Raid', 'Thundaga'],
        percent: 15,
        pattern: '-',
        availability: ['Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Meteor Shower',
        ingredients: ['Firaga', 'Thundaga'],
        percent: 15,
        pattern: '-',
        availability: ['Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Meteor Shower',
        ingredients: ['Blitz', 'Zero Graviga'],
        percent: 10,
        pattern: '-',
        availability: ['Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Bio Barrage',
        ingredients: ['Poison Edge', 'Block'],
        percent: 20,
        pattern: '-',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Shotlock',
        name: 'Bio Barrage',
        ingredients: ['Poison', 'Block'],
        percent: 20,
        pattern: '-',
        availability: ['Terra', 'Ventus']
    },
    {
        type: 'Shotlock',
        name: 'Bio Barrage',
        ingredients: ['Quick Blitz', 'Poison'],
        percent: 5,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Bio Barrage',
        ingredients: ['Sliding Dash', 'Poison'],
        percent: 5,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    },
    {
        type: 'Shotlock',
        name: 'Bio Barrage',
        ingredients: ['Strike Raid', 'Poison'],
        percent: 5,
        pattern: '-',
        availability: ['Terra', 'Ventus', 'Aqua']
    }
];
shotlockCommands.forEach(function(item) {
    item.category = 'shotlock';
})

var commands = [].concat(
    attackCommands,
    magicCommands,
    actionCommands,
    shotlockCommands
);

// ==================================
//       Enrichment Functions
// ==================================

// Use this to make a deep clone of any data. 
var jsonClone = function(data) {
    return JSON.parse(JSON.stringify(data));
};

// Expands the "pattern" aspect of var commands, 
// defining the specific abilities associated
// with a crystal and what type of ability it is. 
var crystalKeys = [
    "shimmering",
    "fleeting",
    "pulsing",
    "wellspring",
    "soothing",
    "hungry",
    "abounding",
];
commands.forEach(function(command) {
    crystalKeys.forEach(function(crystalKey) {
        var abilityName = commandPatternMap[command.pattern || '-'][crystalKey];
        var ability = abilityMap[abilityName] || {type: 'Blank'};
        command[crystalKey] = abilityName;
        command[crystalKey + '_type'] = ability.type;
    });
});



