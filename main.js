class HashMap {
    constructor() {
        this.capacity = 16
        this.loadFactor = 0.75
        this.bucketArray = new Array(this.capacity)
    }
    
    hash(key) {
        let hashCode = 0
        let prime = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity
        }
        return hashCode
    }

    set(key, value) {
        const hash = this.hash(key)
        if (!this.bucketArray[hash]) {
            const newList = new LinkedList()
            this.bucketArray[hash] = newList
            newList.append(key, value)
            return;
        } else {
            const bucketList = this.bucketArray[hash]
            let current = bucketList.head

            //check if the list contains a node with the Key value
            while (current !== null) {
                if (current.hasOwnProperty(key)) {
                    current[key] = value
                    return;
                }
                current = current.nextNode
            }
            bucketList.append(key, value)
        }
    }
}

class Node {
    constructor(key, value, nextNode = null) {
        this[key] = value
        this.nextNode = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(key, value) {
        const newNode = new Node(key, value)
        if (!this.head) {
            this.head = newNode
            return;
        } 
        let current = this.head
        while (current.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = newNode
    }

    size() {
        let count = 0
        let current = this.head
        while (current !== null) {
            count++
            current = current.nextNode
        }
        return count;
    }
}

// const map = new HashMap()
// console.log(map.hash("mary"))
// console.log(map.hash("MaRy"))

