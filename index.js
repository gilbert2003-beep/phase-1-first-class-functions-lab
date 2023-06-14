// Code your solution in this file!
// Define the returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
    // Return a new array with the first two elements of the drivers array
    return drivers.slice(0, 2);
    }
    
    // Define the returnLastTwoDrivers function
    function returnLastTwoDrivers(drivers) {
    // Return a new array with the last two elements of the drivers array
    return drivers.slice(-2);
    }
    
    // Define the selectingDrivers variable
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    
    // Define the createFareMultiplier function
    function createFareMultiplier(multiplier) {
    // Return another function that takes a fare as a parameter
    return function(fare) {
    // Return the product of the fare and the multiplier
    return fare * multiplier;
    }
    }
    
    // Define the fareDoubler variable
    const fareDoubler = createFareMultiplier(2);
    
    // Define the fareTripler variable
    const fareTripler = createFareMultiplier(3);
    
    // Define the selectDifferentDrivers function
    function selectDifferentDrivers(drivers, func) {
    // Return the result of applying the func to the drivers
    return func(drivers);
    }