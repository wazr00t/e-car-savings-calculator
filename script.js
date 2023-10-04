document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", calculateSavings);

  function calculateSavings() {
    const efficiency = parseFloat(document.getElementById("efficiency").value);
    const cost = parseFloat(document.getElementById("cost").value);
    const miles = parseFloat(document.getElementById("miles").value);
    const electricCost = parseFloat(document.getElementById("electricCost").value);

    if (isNaN(efficiency) || isNaN(cost) || isNaN(miles) || isNaN(electricCost)) {
      alert("Please enter valid numeric values.");
      return;
    }

    const annualFuelConsumption = miles / efficiency;
    const annualFuelCost = annualFuelConsumption * cost;
    const electricVehicleCost = (miles / 100) * electricCost;
    const savings = (annualFuelCost - electricVehicleCost).toFixed(2);

    const savingsResult = document.getElementById("savingsResult");
    savingsResult.innerHTML = `Savings: $${savings}`;
  }
});
