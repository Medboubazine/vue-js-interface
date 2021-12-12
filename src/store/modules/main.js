/**
 * IMPORT
 */
import * as ConfigurationsConstants from "../../config/constants"

/**
 * STATES
 */
const state = {
    config_constants: ConfigurationsConstants,
}
/**
 * GETTERS
 */
const getters = {
    getConfigConstants: (state) => state.config_constants,
}
/**
 * MUTATIONS
 */
const mutations = {}
/**
 * ACTIONS
 */
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
