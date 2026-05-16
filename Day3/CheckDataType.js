function checktype(value) {
    if (value === null) {
        console.log("The value is null");
        } else {
            console.log(typeof value);
        }
}

checktype(10);
checktype("Hello");
checktype(true);
checktype(null);
checktype(undefined);