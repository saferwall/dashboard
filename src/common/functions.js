import { avgList } from '@/common/data/avg'

/**
 * Get Time ago 
 * 
 * @param {object|string} dateParam 
 * @returns {string}
 */
export function timeAgo(dateParam) {
    if (!dateParam) {
        return null;
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();


    if (seconds < 5) {
        return 'now';
    } else if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (seconds < 90) {
        return 'about a minute ago';
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (isToday) {
        return 'Today'
    } else if (isYesterday) {
        return 'Yesterday'
    } 
    return today.getFullYear();
}

/**
 * Get time ago 
 * Return only one of : (year||month||day||hour||minute||second)
 * 
 * @param {Number|String} dateParam 
 * @returns {string}
 */
export function timeAgoCounts(dateParam) {
    const time = typeof dateParam === 'number' ? dateParam : Date.parse(dateParam);
    let seconds = Math.floor((Date.now() - time) / 1000);
    let intervals = { 'year': 31536000 ,  'month': 2592000,  'day':86400, 'hours':3600 , 'minutes':60 , 'second':1 };
    let interval = 0;
    let intkey = Object.keys(intervals).find(_key=>{
        interval = seconds / intervals[_key];
        return interval > 1;
    });

    let fi = Math.floor(interval);
    return `${fi} ${intkey}${fi === 1 ? '':'s'}`;
}

/**
 * Check if name in the list of avg
 * @param {String} name 
 * @returns {Boolean}
 */
export  function isAnAVG(name)
{
    return avgList.find(avg=> avg.toLowerCase() === name.toLowerCase()) !== undefined;
}