function solve(obj) {
    if (obj.handsShaking) {
        obj.handsShaking = false;
        let newAlcoholLevel = obj.weight * obj.experience * 0.1;
        obj.bloodAlcoholLevel += newAlcoholLevel;
    }

    return obj;
}

console.log(solve({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));

console.log(solve({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));

console.log(solve({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));