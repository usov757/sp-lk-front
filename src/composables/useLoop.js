import { onBeforeUnmount } from "vue";

export function useLoop() {
  let interval = -1;

  function loop(cb, ms) {
    clearInterval(interval);
    interval = setInterval(cb, ms);
    return cb();
  }

  onBeforeUnmount(() => {
    clearInterval(interval);
  });

  return {
    loop,
  };
}
