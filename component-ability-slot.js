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
        slots: {
            // Slots are made from an array of strings. 
            type: Array,
            required: false
        }
    },
    computed: {
        computedSlots: function() {
            // Valid strings are: 'full','partial','empty', and 'spacer'. 
            var result = [
                'spacer',
                'spacer',
                'spacer',
                'spacer',
                'spacer'
            ];
            if (this.slots) {
                this.slots.forEach(function(value, index) {
                    result[index] = value;
                });
            }
            return result; 
        }
    },
    template: /* html */ `
        <div class="ability-slot">
            <span
                class="ability-slot-box"
                :class="type"
            >
                <span
                    class="ability-slot-text"
                >{{name}}</span>
            </span>
            <command-type-icon
                :icon="'ability-' + type.toLowerCase()"
                class="overlap"
            ></command-type-icon>
            <span 
                v-if="slots"
                class="ability-slot-slots"
            >
                <span
                    v-for="(item) in computedSlots"
                    :class="item"
                ></span>
            </span>
        </div>
    `
});
