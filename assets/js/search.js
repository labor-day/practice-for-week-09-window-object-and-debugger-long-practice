export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here

    //create a stack to hold every element we find
    let stack = [document.body];

    //while the stack is not empty
    while (stack.length) {
        //pop off the last element in the stack for inspection
        let currentElement = stack.pop();

        //if the element's id matches target
        if (currentElement.id === id) {
            return currentElement; //return the element
        }

        //otherwise, push all the elements children onto the stack
        stack.push(...currentElement.children);
    }

}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    let queue = [document.body];

    while (queue.length) {
        let currentElement = queue.shift();
        if (currentElement.tagName === tag) {
            return currentElement;
        }
        if (currentElement.children && currentElement.children.length) {
            queue = [...currentElement.children, ...queue];
        }
    }
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here

    let queue = [document.body];

    while (queue.length) {
        let currentElement = queue.shift();
        if (currentElement.className === cls) {
            return currentElement;
        }
        if (currentElement.children && currentElement.children.length) {
            queue = [...currentElement.children, ...queue];
        }
    }
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here

    let stack = [document.body];
    let matchingElements = [];

    while (stack.length) {
        let currentElement = stack.pop();
        if (currentElement.tagName === tag) {
            matchingElements.push(currentElement);
        }
        stack.push(...currentElement.children);
    }
    return matchingElements;

}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here

    let stack = [document.body];
    let matchingElements = [];

    while (stack.length) {
        let currentElement = stack.pop();
        if (currentElement.className === cls) {
            matchingElements.push(currentElement);
        }
        stack.push(...currentElement.children);
    }
    return matchingElements;
}
