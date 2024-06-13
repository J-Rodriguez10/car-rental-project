/**
 * Adds ".00" to a number if it doesn't have cents.
 *
 * @param {number} num - The number to format.
 * @returns {string} The formatted number with cents added if necessary.
 */

export function formatPrice(price) {
  if (String(price).indexOf(".") === -1) {
    return price.toFixed(2);
  } else {
    return String(price);
  }
}

/**
 * Checks if two arrays have the same values in the same order.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */
export function areArraysEqual(arr1, arr2) {
  // Check if arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over each element and compare
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
