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
                if (current.key === key) {
                    current.value = value
                    return;
                }
                current = current.nextNode
            }
            bucketList.append(key, value)
        }
    }

    get(key) {
        const hash = this.hash(key)
        if (!this.bucketArray[hash]) return null
        const bucketList = this.bucketArray[hash]
        let current = bucketList.head
        while (current !== null) {
            if (current.key === key) {
                return current.value
            }
            current = current.nextNode
        }
        return null
    }

    has(key) {
        const hash = this.hash(key)
        if (!this.bucketArray[hash]) return false
        const bucketList = this.bucketArray[hash]
        let current = bucketList.head
        while (current !== null) {
            if (current.key === key) return true
            current = current.nextNode
        }
        return false
    }

    remove(key) {
        const hash = this.hash(key)
        if (!this.bucketArray[hash]) return;
        const bucketList = this.bucketArray[hash]
        let current = bucketList.head
        if (current.key === key) {
            bucketList.head = current.nextNode
            return;
        }
        while (current.nextNode !== null) {
            if (current.nextNode.key === key) {
                if (current.nextNode.nextNode !== null) {
                    current.nextNode = current.nextNode.nextNode
                    return true;
                } 
                current.nextNode = null               
                return true;
            }
            current = current.nextNode
        }
        return false;
    }

    length() {
        let count = 0
        for (const bucket of this.bucketArray) {
            if (bucket) {
                const size = bucket.size()
                count += size
            }
        }
        return count
    }

    clear() {
        for (const bucket of this.bucketArray) {
            if (bucket) {
                bucket.clear()
            }
        }
    }

}

class Node {
    constructor(key, value, nextNode = null) {
        this.key = key
        this.value = value
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

    clear() {
        this.head = null
    }
}

const map = new HashMap()
map.set("hiddenLeaf", "Naruto")
map.set("Rama", "uhh...")
map.set("Sita", "uhh...")
// map.remove("Sita")
console.log(map.bucketArray)
// console.log(map.hash("mary"))
// console.log(map.hash("MaRy"))

