// All Events Union
type AllEvents =
  | 'click'
  | 'dbclick'
  | 'submit'
  | 'reset'
  | 'keypress';

// Extract only mouse events
type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;

// Exclude form events
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

// Testing
let mouseEvent1: MouseEvents = 'click';
let mouseEvent2: MouseEvents = 'dbclick';

let nonFormEvent1: NonFormEvents = 'click';
let nonFormEvent2: NonFormEvents = 'keypress';

console.log(mouseEvent1);
console.log(mouseEvent2);

console.log(nonFormEvent1);
console.log(nonFormEvent2);
