class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity <= 0) {
            throw new Error("Capacity must be greater than 0");
        }
        this.array = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
    }

    /**
     * 
     * @param {number} i 
     * @returns {number}
     */
    get(i) {
        if (i < 0 || i >= this.size) {
            throw new Error("Index out of bounds");            
        }
        return this.array[i];
    }

    /**
     * 
     * @param {number} i 
     * @param {number} n 
     */
    set(i, n) {
        if (i < 0 || i >= this.size) {
            throw new Error("Index out of bounds");
        }
        this.array[i] = n;
    }

    /**
     * 
     * @param {number} n 
     */
    pushBack(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.array[this.size] = n;
        this.size++;
    }

    /**
     * 
     * @returns {number} value
     */
    popBack() {
        if (this.size === 0) {
            throw new Error("Array is empty");
        }
        const value = this.array[this.size - 1];
        this.size--;
        return value;
    }

    /**
     * double the capacity of the array
     */
    resize() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    /**
     * 
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}

// Example Usage:
let arr = new DynamicArray(1);
console.log(arr.getSize());      // Output: 0
console.log(arr.getCapacity());  // Output: 1
arr.pushBack(1);
console.log(arr.getCapacity());  // Output: 1
arr.pushBack(2);
console.log(arr.getCapacity());  // Output: 2
console.log(arr.get(1));         // Output: 2
arr.set(1, 3);
console.log(arr.get(1));         // Output: 3
console.log(arr.popBack());      // Output: 3
console.log(arr.getSize());      // Output: 1
console.log(arr.getCapacity());  // Output: 2