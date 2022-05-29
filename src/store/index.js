import {createStore} from "vuex";

export default createStore({
    strict: true,
    state: {
        kanban: {
            columns: [
                {
                    id: '48bb1294-785c-41ac-a124-b86b3a47bae0',
                    name: 'To Do',
                    cards: [
                        {
                            id: '6e961d83-30df-477d-b7d7-cc662513b591',
                            name: 'Card 1'
                        },
                        {
                            id: '0ba45b58-30d3-44bb-9b95-8baa41fc06b6',
                            name: 'Card 2'
                        },
                    ]
                },
                {
                    id: '0004a203-7803-43bc-a019-54a0dd65d4ab',
                    name: 'In Progress',
                    cards: [
                        {
                            id: 'ef4bfe71-1170-4ccc-9cad-11ed921e99c0',
                            name: 'Card 3',
                        },
                        {
                            id: '4b8dd5eb-4893-420b-8881-466e45f4c3c9',
                            name: 'Card 4',
                        },
                    ]
                },
                {
                    id: '99daf624-b49a-4a59-a17b-f5645acc9ad1',
                    name: 'Done',
                    cards: [
                        {
                            id: '3776a81c-9803-4840-b04b-1f799cd919c5',
                            name: 'Card 5'
                        },
                        {
                            id: 'd5173ecf-8386-43b7-ad2e-55e60e0d5280',
                            name: 'Card 6'
                        }
                    ]
                },
            ]
        }
    },
    mutations: {
        UPDATE_LIST(state, {listId, list}) {
            state.kanban.columns.forEach(column => {
                if (column.id === listId) {
                    column.cards = list;
                }
            });
        },
        REMOVE_FROM_LIST(state, {listId, elementId}) {
            state.kanban.columns.forEach(column => {
                if (column.id === listId) {
                    column.cards = column.cards.filter(card => card.id !== elementId);
                }
            });
        }
    },
    actions: {
        addToList({commit, state}, {listId, element}) {
            // ToDo: Check if list exists before adding
            commit('UPDATE_LIST', {listId, list: [...state.kanban.columns.find(column => column.id === listId).cards, element]});
        },
        updateList({commit}, payload) {
            commit('UPDATE_LIST', payload);
        },
        removeFromList({commit}, payload) {
            commit('REMOVE_FROM_LIST', payload);
        }
    }
});