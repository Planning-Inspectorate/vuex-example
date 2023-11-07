import Vuex from 'vuex';

export default new Vuex.Store({
    /**
     * State - similar to data in a Vue components
     * 
     * store.state
     * 
     * Use in a component with
     * - this.$store.state.myState (or $this.$store.state.myModule.myState)
     * - computed: {...mapState('myModule', ['myState'])}
     *   to add this.myState as a property
     */
    state: {
        items: [],
        showFilter: true
    },
    /**
     * Mutations - no equivalent in a Vue component
     * Don't edit state directly, call a mutation by committing a change
     * 
     * store.commit('mutatationName', payload);
     * 
     * Use in a component with
     * - this.$store.commit
     * - import {mapMutations} from 'vuex';
     *   methods: {...mapMutations('myModule', 'myMutation')}
     *   to add this.myMutation as a function
     */
    mutations: {
        setItems(state, items) {
            state.items = items;
        },
        addItem(state, item) {
            state.items.push(item);
        },
        setShowFilter(state, showFilter) {
            state.showFilter = showFilter;
        }
    },
    /**
     * Getters - similar to computed properties in Vue components
     * React to state changes and recompute automatically
     * 
     * store.getters.myGetter
     * 
     * Use in a component with
     * - this.$store.getters.myGetter (or $this.$store.getters['myModule/myGetter'])
     * - import {mapGetters} from 'vuex';
     *   computed: {...mapGetters('myModule', ['myGetter'])}
     *   to add this.myGetter as a property
     */
    getters: {
        itemIds(state) {
            return state.items.map(i => i.id);
        }
    },
    /**
     * Actiosn - similar to methods in Vue components
     * Call APIs and other async functions
     * 
     * store.dispatch('myAction', payload)
     * 
     * Use in a component with
     * - this.$store.dispatch('myAction', payload)
     * - import {mapActions} from 'vuex';
     *   computed: {...mapActions('myModule', ['myAction'])}
     *   to add this.myAction as an async function
     */
    actions: {
        async fetchItems({commit}) {
            const items = await myApi();
            commit('setItems', items);
        }
    },
    /**
     * Wrap store functionality into a self-contained module
     * Useful for grouping functionality by domain or logical entity, you may have 
     * an 'auth' store or a 'tasks' store, for example
     */
    modules: {
        anyNameHere: {
            namespaced: true,
            state: {},
            mutations:{}
        }
    }
});