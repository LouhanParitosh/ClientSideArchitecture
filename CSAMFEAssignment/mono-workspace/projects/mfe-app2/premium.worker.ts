// premium.worker.ts

addEventListener('message', ({ data }) => {
  // Calculate premium based on data received from the main thread
  const premium = calculatePremium(data);
  postMessage(premium);
});

function calculatePremium(data: any): number {
  // Implement your premium calculation logic here
  // Example: Premium calculation based on age and insurance type
  const age = data.age;
  const insuranceType = data.insuranceType;

  // Sample premium calculation logic
  let premium = 0;
  if (insuranceType === 'Life') {
    premium = age * 10; // Sample calculation, replace with actual calculation logic
  } else if (insuranceType === 'Health') {
    premium = age * 15; // Sample calculation, replace with actual calculation logic
  }
  
  return premium;
}
