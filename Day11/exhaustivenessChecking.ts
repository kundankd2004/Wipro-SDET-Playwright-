// Union Type
type TaskStatus = 'Open' | 'InProgress' | 'Closed';

//Function with Exhaustiveness Checking
function handleTask(status: TaskStatus): string {
    switch (status) {
        case 'Open':
            return "Task is Open";
            
        case 'InProgress':
            return "Task is in Progress";
            
        case 'Closed':
            return "Task is Closed";
            
            default:
                //never type check
                const exhaustiveCheck: never = status;
                return exhaustiveCheck;
    }
}

//Testing
console.log(handleTask('Open'));
console.log(handleTask('InProgress'));
console.log(handleTask('Closed'));