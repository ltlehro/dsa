const twoSum = (nums, target) => {
    const numMap = {}
    
    for (let i = 0 ; i < nums.length ; i++) {
        const compliment = target - nums[i]
        if (compliment in numMap && numMap[compliment] !== i) {
            return [numMap[compliment] , i]
        }
        numMap[nums[i]] = i
    }
    return []
}

const nums = [2,7,11,15]
const target = 9
console.log(twoSum(nums,target))