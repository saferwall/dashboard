export function getSavedState(key) {
    let state = window.localStorage.getItem(key);
    try {
        return JSON.parse(state)
    } catch (error) {
        console.warn('Parse Saved State', key, state, 'failed');
    }
    return null;
}

export function saveState(key, state) {
    window.localStorage.setItem(key, JSON.stringify(state))
}

export function clearState(key) {
    window.localStorage.removeItem(key);
}
