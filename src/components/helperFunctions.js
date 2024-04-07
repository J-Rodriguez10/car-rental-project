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



