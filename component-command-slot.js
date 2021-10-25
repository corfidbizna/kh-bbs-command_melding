app.component('command-slot', {
    props: {
        type: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    template: /* html */ `
        <div class="command-slot">
            <span 
                class="command-slot-box"
                :class="category"
            >{{name}}</span>
            <command-type-icon 
                :icon="type"
            ></command-type-icon>
        </div>
    `
});
