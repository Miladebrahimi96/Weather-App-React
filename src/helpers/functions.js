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