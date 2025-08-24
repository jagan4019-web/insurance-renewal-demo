function showFields(type) {
  document.querySelector('.motorfield').style.display = (type === 'Motor') ? 'block' : 'none';
  document.querySelector('.healthfield').style.display = (type === 'Health') ? 'block' : 'none';
  document.querySelector('.Groupfield').style.display = (type === 'OTCGH') ? 'block' : 'none';
}



function switchtoEngine(event) {
  event.preventDefault();

  const vehicleField = document.getElementById('vechilefield');
  const engineField = document.getElementById('Enginefield');
  const toggleLink = event.target;

  if (vehicleField.style.display !== 'none') {
    vehicleField.style.display = 'none';
    engineField.style.display = 'block';
    toggleLink.textContent = 'Or Vehicle Registration Number';
  } else {
    vehicleField.style.display = 'block';
    engineField.style.display = 'none';
    toggleLink.textContent = 'Or Engine Number';
  }
}


function updateURL(policyType) {
  const url = new URL(window.location.href);
  url.searchParams.set('policytype', policyType);
  window.history.replaceState({}, '', url);
}