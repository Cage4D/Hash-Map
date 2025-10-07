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

    }
}

// const map = new HashMap()
// console.log(map.hash("mary"))
// console.log(map.hash("MaRy"))

