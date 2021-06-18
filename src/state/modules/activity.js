import axios from '@/services/axios'

export const state = {
    activities: []
}

export const getters = {
    getActivities(state){
        return state.activities;
    }
}
export const mutations = {
    SET_ACTIVITIES(state,data){
        state.activities = data;
    }
}

export const actions = {
    fetchActivities({ commit }){
        return axios
            .get('users/activities')
            .then(response => {
                let data = response.data;
                commit('SET_ACTIVITIES', mappers.mapActivities(data));
                return data;
            });
    },
}

export const mappers = {
    mapActivities(activities){
        return activities.map(activity => {
            return {
                type: activity.type,
                author: {
                    username: activity.username,
                    member_since: activity.timestamp 
                },
                file: {
                    name: 'Unknown',
                    sha256: activity.content.sha256,
                    classification: 'Unknown',
                    tags: activity.tags,
                    score : {
                        value: activity.av_count || 0,
                        total: 12
                    },
                },
                activity_date: activity.timestamp,
                comment : activity.content.body || null,
                target : {
                    username : activity.content.user || null,
                    member_since : '2020'
                },
                follow: false,
            }
        })
    }
}