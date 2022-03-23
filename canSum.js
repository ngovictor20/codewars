const canSum = (target, nums) => {
    const memo = new Map();
    memo.set(0, true);
    const recurse = (targ) => {
        if (memo.has(targ)) return memo.get(targ);
        if (targ < 0) return false;
        for (let i = 0; i < nums.length; i++) {
            memo[targ] = recurse(targ - nums[i]);
            if (memo[targ]) return true;
        }
        memo[targ] = false;
        return memo[targ];
    }
    return recurse(target);
}

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(12, [20, 20, 13, 6]));