const a = { x: 0, y: { z: 0 } };

//deep copy
const deepCopyA=structuredClone(a)

deepCopyA.y.z="10";

console.log(a.y.z)