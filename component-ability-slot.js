app.component('ability-slot', {
    props: {
        ability: {
            type: Object,
            required: true
        },
        displaySlots: {
            type: Boolean,
            required: false
        },
    },
    computed: {
        computedSlots: function() {
            var max = this.ability.number;
            var current = this.ability.slotsFull;
            var blue = this.ability.slotTargeted;
            // Valid strings are: 'full','partial','empty', and 'spacer'. 
            var result = [
                'spacer',
                'spacer',
                'spacer',
                'spacer',
                'spacer'
            ];
            for (var i = 0; i < max; i++) {
                result[i] = 'empty';
            }
            for (var i = 0; i < current && i < max; i++) {
                result[i] = 'full';
            }
            if (blue && current < max) {
                result[current] = 'partial';
            }
            return result; 
        }
    },
    methods: {
        emitChange: function(change) {
            this.$emit('update:ability', Object.assign(
                {}, 
                this.ability,
                change,
            ));
        },
        updateSlots: function(slotIndex) {
            var current = this.ability.slotsFull;
            this.emitChange({
                slotTargeted: false,
                slotsFull: slotIndex === current - 1 ? slotIndex: slotIndex + 1,
            });
        },
        toggleTargeted: function() {
            var newState = !this.ability.slotTargeted;
            this.emitChange({
                slotTargeted: newState,
            });
        },
    },
    template: /* html */ `
        <div 
            class="ability-slot"
            :title="ability.description"
        >
            <span
                class="ability-slot-box"
                :class="ability.type"
                :class="{
                    targeted: (ability.slotTargeted && (ability.slotsFull < ability.number)),
                    full: (ability.slotsFull >= ability.number),
                }"
            >
                <span
                    class="ability-slot-text"
                    @click="toggleTargeted"
                >{{ability.name}}</span>
            </span>
            <command-type-icon
                :icon="'ability-' + ability.type.toLowerCase()"
                class="overlap"
                :class="{
                    full: (ability.slotsFull >= ability.number),
                }"
            ></command-type-icon>
            <span 
                v-if="displaySlots"
                class="ability-slot-slots"
            >
                <span
                    v-for="(item, index) in computedSlots"
                    :class="item"
                    @click="updateSlots(index)"
                ></span>
            </span>
        </div>
    `
});
