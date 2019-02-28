function timer() {
   let seconds = 0, timer, isWork = false;

   $('#start-timer').on('click', function () {
      if (!isWork) {
         timer = setInterval(step, 1000);
         isWork = true;
      }
   });

   $('#stop-timer').on('click', function () {
      clearInterval(timer);
      isWork = false;
   });

   function step() {
      seconds++;
      $('#hours').text(('0' + Math.trunc(seconds / 3600)).slice(-2));
      $('#minutes').text(('0' + Math.trunc((seconds / 60) % 60)).slice(-2));
      $('#seconds').text(('0' + Math.trunc(seconds % 60)).slice(-2));
   }
}