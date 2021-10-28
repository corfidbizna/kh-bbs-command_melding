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
        },
        percent: {
            type: Number,
            required: true
        }
    },
    template: /* html */ `
        <div class="command-slot">
            <span 
                class="command-slot-box"
                :class="category"
            >
                <span>{{name}}</span>
                <span
                    class="percentage"
                >
                    <span
                        v-if="percent !== 100"
                    >{{percent}}%</span>
                    <command-type-icon
                        v-else
                        icon="crown"
                    ></command-type-icon>
                </span>
            </span>
            <command-type-icon 
                :icon="type"
                class="overlap"
            ></command-type-icon>
        </div>
    `
});
