const removeFromArray = function(inputArray) {
    // Create new array to not effect the loops
    newArray = inputArray.slice();
    // Keep track of slices so newArray slice is accurate
    let sliceAmount = 0;

    // Loop through the original array and then the arguments to check for removal
    for (let i = 0; i < inputArray.length; i++)
    {
        for (let j = 1; j < arguments.length; j++)
        {   
            if (inputArray[i] === arguments[j])
            {
                newArray.splice(i-sliceAmount, 1);
                sliceAmount++;
                break
            }
        }
    }
    // Return modified array
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
