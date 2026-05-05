// not resuable, as timeout share state between multiple usage
// not react friendly, instead of this we created hook

let timeout = null;
export function throttling(fn, delay) {
  if (!timeout) {
    fn();

    timeout = setTimeout(() => {
      timeout = null;
    }, delay);

    console.log(timeout);
  }
}
