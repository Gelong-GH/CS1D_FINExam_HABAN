
// groceryStacks.js

let stack = []; // Initialize empty stack
const maxItems = 5;

// Peek function to check the top item of the stack
function peek() {
    if (stack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        return stack[stack.length - 1];
    }
}

// Push function to add a new item to the top of the stack
function push(item) {
    if (stack.length >= maxItems) {
        console.log("Stack is full. Cannot add more items.");
        return;
    }
    stack.push(item);
    console.log(`Item pushed: ${item}`);
    console.log("Current Stack:", stack);
    console.log("Top item (peek):", peek());
}

// Pop function to remove the top item from the stack
function pop() {
    if (stack.length === 0) {
        console.log("Cannot pop. Stack is empty.");
        return;
    }
    const removedItem = stack.pop();
    console.log(`Item popped: ${removedItem}`);
    console.log("Current Stack:", stack);
    console.log("Top item (peek):", peek());
}

// Accept 5 grocery items using prompt (for browsers)
for (let i = 0; i < maxItems; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    push(item);
}