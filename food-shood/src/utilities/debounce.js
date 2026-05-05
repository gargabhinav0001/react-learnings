// All components share the same debounce ❌
// Multiple inputs → interfere with each other ❌
// Re-renders / multiple instances → unpredictable ❌

let timeout;

export const Debounce = (fn, delay, ...params) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    fn(...params);
  }, delay);
};
