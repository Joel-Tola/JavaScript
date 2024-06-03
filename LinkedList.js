/**
 * Class Node
 */
class Node {
    /**
     * Define Node constructor.
     * @param {Number} value 
     * @param {Node} next 
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * Class LinkedList
 */
class LinkedList {
    /**
     * Define LinkedList constructor.
     */
    constructor() {
        this.head = null;
    }

    /**
     * get index value.
     * @param {Number} index 
     * @returns 
     */
    get(index) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current.value;
            }
            count++;
            current = current.next;
        }
        return -1; // index out of bounds 
    }

    /**
     * insert a new head.
     * @param {number} value 
     */
    insertHead(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    /**
     * insert a tail node.
     * @param {number} value 
     */
    insertTail(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    /**
     * remove node by index number.
     * @param {number} index 
     * @returns 
     */
    remove(index) {
        if (this.head === null) {
            return false; //list is empty
        }
        if (index === 0) {
            this.head = this.head.next;
            return true;
        }
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index - 1 && current.next !== null) {
                current.next = current.next.next;
                return true;
            }
            count++;
            current = current.next;
        }
        return false; // index out of bounds
    }

    /**
     * get all node values
     * @returns {Array} values
     */
    getValues() {
        const values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

// Example Usage:
const list = new LinkedList();
list.insertHead(1);
list.insertTail(2);
list.insertHead(0);
console.log(list.remove(1)); // Output: true
console.log(list.getValues()); // Output: [0, 2]
console.log(list.get(5)); // Output: -1