import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook to debounce a function.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
export function useDebounce(func, delay = 1000) {
  // Defining a timer
  const timeoutRef = useRef(null);

  // Creating the debounced function and memoizing it (useCallback) to avoid creating a new function on every render.
  const debouncedFunction = useCallback(
    (...args) => {
      // Resetting timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        // Calling function after delay
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  // Clearing timer on dismount to avoid problems
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedFunction;
}
