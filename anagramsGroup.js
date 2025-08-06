function groupAnagrams(strs) {
  const anagramGroups = {};
  
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    
    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }
  
  return Object.values(anagramGroups);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);

console.log(result);