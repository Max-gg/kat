var arr = [1, 4, 7, 6, 1, 7, 5, 6, 4, 7];

function findFrequent(arr) {
    let map = new Map();
    for (let i = 0; i <= arr.length - 1; i++) {
        if (map.has(arr[i]) == false) {
            map.set(arr[i], 1);
        } else {
            let value = map.get(arr[i]);
            value += 1;
            map.set(arr[i], value);
        }
    }
    let max_value = 0,
        value;
    for (let val of map.values()) {
        if (val > max_value) {
            max_value = val;
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) == max_value) {
            return key;
        }
    }
}
console.log(findFrequent(arr));