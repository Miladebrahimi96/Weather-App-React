export const getDayOrNight = () => {
    let dayOrNight = "";
    const date = new Date();
    if(date.getHours() >= 6 && date.getHours() < 20){
        dayOrNight = "Day"
    }else {
        dayOrNight = "Night"
    }
    return dayOrNight
}

export const centigrade = degree => {
    const newDegree = degree - 272.15;
    return newDegree.toFixed(2)
}

export const fahrenheit = degree => {
    const newDegree = (degree * 1.8)  +32;
    return newDegree.toFixed(2);
}

const getHour = time => {
    const date = new Date(time);
    const hour = date.getHours();
    return hour;
}
const getMinute = time => {
    const date = new Date(time);
    const minute = date.getMinutes();
    return minute;
}
const getSecond = time => {
    const date = new Date(time);
    const second = date.getSeconds();
    return second;
}

export { getHour, getMinute, getSecond}