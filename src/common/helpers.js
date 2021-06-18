export const generateAvatar = function(username){
    let avatarCdn = process.env.AVATAR_BASE_URL || process.env.VUE_APP_AVATAR_BASE_URL;
    return `${avatarCdn}${username}`
}