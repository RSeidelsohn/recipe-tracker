export const state = () => ({
    selectedRecipe: null,
});

export const actions = {
    selectRecipe(context, payload) {
        context.commit('SELECT_RECIPE', payload);
    },
};

export const mutations = {
    SELECT_RECIPE(state, recipe) {
        state.selectedRecipe = recipe;
    },
};

export const getters = {
    getSelectedRecipe: (state) => state.selectedRecipe,
};
