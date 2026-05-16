function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

function doforeach(e) {
    console.log(e);
}

const doeach = e => console.log(e);
[1, 2, 3].forEach(doeach); //callback
[1, 2, 3].forEach(e => console.log(e)); // anonymous callback