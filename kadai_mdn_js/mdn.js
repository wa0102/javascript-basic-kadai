const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const fullDate = `${year}年${month}月${day}日`;
console.log(fullDate);
