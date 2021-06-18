export const defaultclass = {
    title: 'Benign',
    icon: 'unsafe',
    color: 'red'
}
export const classes = {
    'Label.BENIGN': {
        title: 'Unknown',
        icon: 'unsafe',
        color: 'red'
    },
}

export const getClass = (c) => {
    return classes[c] || defaultclass
}


export default getClass;