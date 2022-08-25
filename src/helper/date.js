const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const getWeekday = (date) => weekday[new Date(date).getDay()]

export const getTime = (dateTime) => dateTime?.split('T')[1]

export const customGetHours = (time) => new Date(time?.split('T')[1]).getHours()