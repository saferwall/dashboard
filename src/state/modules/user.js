import axios from '@/services/axios'

export const state = {
    user: {},
    profiles: {},
    activities: {}
}

export const getters = {
    getUser(state) {
        return state.user;
    },
    getProfile: (state) => (id) => {
        return id && state.profiles[id] || state.user;
    }
}

export const mutations = {
    SET_PROFILE(state, { id, data }) {
        state.profiles[id] = data;
    },
    SET_CURRENT_PROFILE(state, data) {
        state.user = data;
    },
    SET_SECTION_LIST(state, { username, section, data }) {
        state.activities[username] = {};
        state.activities[username][section] = data;
    }
}

export const actions = {
    fetchProfile({ commit, state }, id) {
        return state.profiles[id] && state.profiles[id].__expire_at > Date.now() && state.profiles[id] || axios
            .get(`users/${id}`)
            .then(response => {
                let data = response.data;
                commit('SET_PROFILE', {
                    id: id,
                    data: mappers.mapProfile(data)
                });
                return data;
            });
    },
    fetchCurrentUser({ commit, state }, username) {
        return state.user && state.user.__expire_at > Date.now() && state.user || axios
            .get(`users/${username}`)
            .then(response => {
                let data = response.data;
                commit('SET_CURRENT_PROFILE', {
                    username: username,
                    data: data,
                    __expire_at: Date.now() + 1000 * 60 * 3 // 3min
                });
                return data;
            });
    },
    fetchSection({ commit }, { username, section }) {
        return axios
            .get(`users/${username}/${section}`)
            .then(response => {
                let data = response.data;
                commit('SET_SECTION_LIST', {
                    username: username,
                    section: section,
                    data: data,
                });
                return data;
            });
    },
    getSection: ({ state }, { username, name }) => {
        return name && state.activities[username] && state.activities[username][name] || [];
    }
}

export const mappers = {
    mapProfile(profile) {
        let data = {};["following_count", "followers_count", "likes_count", "comments_count", "submissions_count"].forEach(key => data[key] = profile[key]);
        return {
            ...data,
            __expire_at: Date.now() + 1000 * 60 * 3 // 3min
        }
    },
}