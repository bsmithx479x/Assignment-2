var year = date.getFullYear();

function isValid(){
    if(year === 2020) {
        return "Success";
    } else {
        alert ("Wrong Year");
    }
};

console.log(isValid());