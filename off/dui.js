document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');

  let incrementInterval;
  let decrementInterval;
  const stepValue = 1; // The value to increment/decrement by
  const intervalTime = 100; // Time in milliseconds for the interval

  function startIncrement() {
    stopIntervals(); // Ensure no other intervals are running
    incrementInterval = setInterval(() => {
      if (slider.value < slider.max) {
        slider.value = parseInt(slider.value) + stepValue;
      }
    }, intervalTime);
  }

  function startDecrement() {
    stopIntervals(); // Ensure no other intervals are running
    decrementInterval = setInterval(() => {
      if (slider.value > slider.min) {
        slider.value = parseInt(slider.value) - stepValue;
      }
    }, intervalTime);
  }

  function stopIntervals() {
    clearInterval(incrementInterval);
    clearInterval(decrementInterval);
  }

  incrementButton.addEventListener('mousedown', startIncrement);
  incrementButton.addEventListener('mouseup', stopIntervals);
  incrementButton.addEventListener('mouseleave', stopIntervals);

  decrementButton.addEventListener('mousedown', startDecrement);
  decrementButton.addEventListener('mouseup', stopIntervals);
  decrementButton.addEventListener('mouseleave', stopIntervals);

  // Optional: Add touch events for mobile support
  incrementButton.addEventListener('touchstart', startIncrement);
  incrementButton.addEventListener('touchend', stopIntervals);

  decrementButton.addEventListener('touchstart', startDecrement);
  decrementButton.addEventListener('touchend', stopIntervals);
});
