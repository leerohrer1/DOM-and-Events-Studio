// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  const takeoff = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const shuttleBackground = document.getElementById('shuttleBackground');
  const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
  const landing = document.getElementById('landing');
  const missionAbort = document.getElementById('missionAbort');
  // const up = document.getElementById('up');
  // const down = document.getElementById('down');
  // const left = document.getElementById('left');
  // const right = document.getElementById('right');
  // const rocket = document.getElementById('rocket');

  takeoff.addEventListener('click', function () {
    result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      shuttleBackground.style.backgroundColor = 'blue';
      spaceShuttleHeight.innerHTML = '10000';
      flightStatus.innerHTML = 'Shuttle in flight';
    }
  });

  landing.addEventListener('click', function () {
    result = window.confirm('The shuttle is landing. Landing gear engaged.');
    if (result) {
      shuttleBackground.style.backgroundColor = 'green';
      spaceShuttleHeight.innerHTML = '0';
      flightStatus.innerHTML = 'The shuttle has landed.';
    }
  });

  missionAbort.addEventListener('click', function () {
    result = window.confirm('Confirm that you want to abort the mission.');
    if (result) {
      shuttleBackground.style.backgroundColor = 'green';
      spaceShuttleHeight.innerHTML = '0';
      flightStatus.innerHTML = 'Mission aborted';
    }
  });

  // up.addEventListener('click', function () {});
  // down.addEventListener('click', function () {});
  // left.addEventListener('click', function () {});
  // right.addEventListener('click', function () {});
}

window.addEventListener('load', init);
