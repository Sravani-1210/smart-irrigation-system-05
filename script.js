document.getElementById("irrigation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Input values
    let moistureLevel = document.getElementById("moisture").value;
    let cropType = document.getElementById("crop").value;
    let weatherCondition = document.getElementById("weather").value;

    let irrigationNeeded = "";
    let waterAmount = 0;

    // Decision logic for irrigation
    if (moistureLevel >= 50) {
        irrigationNeeded = "Irrigation is not needed.";
    } else {
        irrigationNeeded = "Irrigation is needed.";
        waterAmount = calculateWaterAmount(moistureLevel, cropType, weatherCondition);
    }

    // Display results
    document.getElementById("irrigation-need").textContent = irrigationNeeded;
    if (waterAmount > 0) {
        document.getElementById("water-amount").textContent = Water required: ${waterAmount} liters per square meter.;
    } else {
        document.getElementById("water-amount").textContent = "";
    }
});

// Function to calculate water needed
function calculateWaterAmount(moisture, crop, weather) {
    let baseWaterNeed = 0;

    // Base water needs (liters per square meter)
    switch (crop) {
        case "wheat":
            baseWaterNeed = 5;
            break;
        case "rice":
            baseWaterNeed = 8;
            break;
        case "corn":
            baseWaterNeed = 7;
            break;
        case "tomato":
            baseWaterNeed = 6;
            break;
        case "potato":
            baseWaterNeed = 7;
            break;
    }

    // Adjust water needs based on weather conditions
    let weatherMultiplier = 1;
    switch (weather) {
        case "sunny":
            weatherMultiplier = 1.2;
            break;
        case "cloudy":
            weatherMultiplier = 0.9;
            break;
        case "rainy":
            weatherMultiplier = 0.6;
            break;
    }

    // Calculate water amount
    let waterAmount = baseWaterNeed * weatherMultiplier * (50 - moisture) / 50;

    return waterAmount.toFixed(2); // Returns value rounded to 2 decimal places
}
