app.component('ability-slot', {
    props: {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
    },
    template: /* html */ `
        <div class="ability-slot">
            <span
                class="ability-slot-box"
            >
                <span>{{name}}</span>
            </span>
            <command-type-icon
                :icon="'ability-' + type.toLowerCase()"
                class="overlap"
            ></command-type-icon>
        </div>
    `
});
