const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('membership'));
console.log(myInfo.get('description'));
console.log(myInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('firstName')} ${myInfo.get('lastName')} </p>
<p>Proxy ${myInfo.get('title')} on ${myInfo.get('timestamp')} in the ${myInfo.get('organization')} temple</p>
<p>Your phone: ${myInfo.get('phone')}</p>
<p>Your email address: ${myInfo.get('email')}</p>`