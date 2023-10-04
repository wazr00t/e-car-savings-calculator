document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", calculateSavings);

  function calculateSavings() {
    const efficiency = parseFloat(document.getElementById("efficiency").value);
    const system = document.getElementById("system").value;
    const cost = parseFloat(document.getElementById("cost").value);
    const currency = document.getElementById("currency").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const distanceUnit = document.getElementById("distanceUnit").value;
    const electricCost = parseFloat(document.getElementById("electricCost").value);
    const electricCurrency = document.getElementById("electricCurrency").value;

    if (isNaN(efficiency) || isNaN(cost) || isNaN(distance) || isNaN(electricCost)) {
      alert("Please enter valid numeric values.");
      return;
    }

    const milesPerGallon = system === "mpg" ? efficiency : 235.214 / efficiency;
    const litersPerKilometer = system === "kpl" ? efficiency : 100 / efficiency;

    const annualFuelConsumption = distanceUnit === "miles" ? distance / milesPerGallon : distance / litersPerKilometer;
    const annualFuelCost = annualFuelConsumption * cost;

    const electricVehicleCost = (distance / 100) * electricCost;

    const savings = (annualFuelCost - electricVehicleCost).toFixed(2);

    const savingsResult = document.getElementById("savingsResult");
    savingsResult.innerHTML = `Savings: ${currency === "usd" ? "$" : currency === "eur" ? "€" : "£"}${savings}`;
  }
});
