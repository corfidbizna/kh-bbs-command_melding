var iconIndexes = {
    attack: 0,
    magic: 1,
    //action: 2,
    mobility: 2,
    block: 3,
    reprisal: 4,
    shotlock: 5,
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
            var iconWidth = 64;
            return `background-position: ${-iconWidth * index}px 0px;`;
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