var iconIndexes = {
    attack: 0,
    magic: 1,
    mobility: 2,
    block: 3,
    reprisal: 4,
    shotlock: 5,
    crown: 6,
    'ability-prize': 7,
    'ability-stats': 8,
    'ability-support': 9,
    'ability-blank': 10,
};
app.component('command-type-icon', {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    computed: {
        offsetStyle: function() {
            var icon = this.icon.toLocaleLowerCase();
            var index = iconIndexes[icon] || 0;
            return `background-position: ${-100 * index}% 0%;`;
        },
    },
    template: /* html */ `
        <span
            class="command-type-icon"
            :style="offsetStyle"
            :title="icon"
            :alt="icon"
        ></span>
    `,
});