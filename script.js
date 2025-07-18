document.addEventListener("DOMContentLoaded", function () {
  // Function to animate counting
  function animateCount(element, targetValue, duration) {
    let currentValue = 0;
    const increment = (targetValue / duration) * 10; // Increase increment for faster counting

    const interval = setInterval(function () {
      currentValue += increment;
      element.innerText = Math.floor(currentValue); // Update element with current value

      if (currentValue >= targetValue) {
        clearInterval(interval); // Stop the interval when target value is reached
        element.innerText = targetValue; // Ensure the final value is accurate
      }
    }, 10); // Update every 10 milliseconds for smoother animation
  }

  // Simulate fetching data from a server
  setTimeout(function () {
    // Update total projects
    const totalProjectsElement =
      document.getElementById("total-projects");
    animateCount(totalProjectsElement, 50, 2000); // Replace "100" with actual total projects count and "2000" with duration in milliseconds

    // Update happy customers
    const happyCustomersElement =
      document.getElementById("happy-customers");
    animateCount(happyCustomersElement, 500, 2000); // Replace "500" with actual happy customers count and "2000" with duration in milliseconds

    // Update working hours
    const workingHoursElement = document.getElementById("working-hours");
    animateCount(workingHoursElement, 2000, 2000); // Replace "2000" with actual working hours count and "2000" with duration in milliseconds
  }, 1000); // Simulate a delay of 1 second (1000 milliseconds) for demonstration
});
