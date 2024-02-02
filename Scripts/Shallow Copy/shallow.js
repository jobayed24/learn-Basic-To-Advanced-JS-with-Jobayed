const a = { x: 0, y: { z: 0 } };

//deep copy
const deepCopyA=JSON.parse(JSON.stringify(a))

deepCopyA.y.z="10";

console.log(deepCopyA.y.z)