import axios from '@/services/axios'

export const fields = {
    fresh: ['md5', 'sha1', 'sha512', 'exif', 'crc32', 'first_submission', 'last_scanned', 'last_submission', 'magic', 'tags']
}

export const state = {
    selectedFile: null
}


export const getters = {
    getFileSummary(state) {
        return state.selectedFile;
    }
}

export const mutations = {
    SET_FILE_SUMMARY(state, file) {
        state.selectedFile = file;
    }
}


export const actions = {
    fetchFileSummary({ commit }, id) {
        return axios.get(`/files/${id}?fields=${fields.fresh.join(',')}`)
            .then(res => {
                let data = res.data;

                commit('SET_FILE_SUMMARY', data);
                return data;
            });
    }
}
