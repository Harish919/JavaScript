const truncateString = (string, number) => {
    if(string < 0) {
        return "...";
    }
    if(string.length > number){
        return string.slice(0, number) + "...";
    }
    else {
        return string;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket ", 8));

