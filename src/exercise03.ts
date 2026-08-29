// Function to calculate the total value of inventory items with quantity greater than 5
export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  // Initialize a variable to hold the total value of the inventory items.
  let totalValue: number = 0;
  // Filter the inventory to include only items with quantity greater than 5, then map over the filtered items to calculate the total value.
  inventory.filter(([, quantity, ]) => quantity > 5).map(([ , quantity, price]) => {
    totalValue += quantity * price;
  });
  return totalValue;
}
