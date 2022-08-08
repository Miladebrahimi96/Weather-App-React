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
