export class PriorityQueue {
    static leftChild = (index) => index * 2 + 1;
    static rightChild = (index) => index * 2 + 2;
    static parent = (index) => Math.floor((index - 1) / 2);

    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    swap(indexOne, indexTwo) {
        const tmp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = tmp;
    }

    peek() {
        // the root is always the highest priority item
        return this.heap[0];
    }

    enqueue(element) {
        // push element to the end of the heap
        this.heap.push(element);

        // the index of the element we have just pushed
        let index = this.heap.length - 1;

        // if the element is greater than its parent:
        // swap element with its parent
        while (
            index !== 0 &&
            this.heap[index].priority >
                this.heap[PriorityQueue.parent(index)].priority
        ) {
            this.swap(index, PriorityQueue.parent(index));
            index = PriorityQueue.parent(index);
        }
    }

    dequeue() {
        // remove the first element from the heap
        const root = this.heap.shift();

        // put the last element to the front of the heap
        // and remove the last element from the heap as it now
        // sits at the front of the heap
        this.heap.unshift(this.heap[this.heap.length - 1]);
        this.heap.pop();

        // correctly re-position heap
        this.heapify(0);

        return root;
    }

    heapify(index) {
        let left = PriorityQueue.leftChild(index);
        let right = PriorityQueue.rightChild(index);
        let smallest = index;

        // if the left child is bigger than the node we are looking at
        if (
            left < this.heap.length &&
            this.heap[smallest].priority < this.heap[left].priority
        ) {
            smallest = left;
        }

        // if the right child is bigger than the node we are looking at
        if (
            right < this.heap.length &&
            this.heap[smallest].priority < this.heap[right].priority
        ) {
            smallest = right;
        }

        // if the value of smallest has changed, then some swapping needs to be done
        // and this method needs to be called again with the swapped element
        if (smallest != index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    }
}
