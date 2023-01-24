export const getCurrentEpoch = () => {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    return secondsSinceEpoch;
};

export const getCustomDateEpoch = (date) => {
    var someDate = new Date(date);

    return someDate.getTime();
};

export const getCustomDateEpochFromDateAndTime = (date, time) => {
    const concatenatedDate = date + ' ' + time;

    let dateObj = new Date(concatenatedDate);
    let epochTime = dateObj.getTime();
    
    return epochTime;
}

export function epochToHumanReadable(epoch) {
    let x = Number(epoch)
    const date = new Date(x);
    return date.toDateString();
}