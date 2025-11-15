const displayCards = (members, elementId) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let companyName = document.createElement('p');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let webSite = document.createElement('a');
        let detailsLink = document.createElement('a');

        logo.setAttribute('src', member.image)
        logo.setAttribute('alt', `${member.companyName} logo`)
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '100');
        logo.classList.add('logo')

        companyName.textContent = member.name;
        companyName.classList.add('compName');

        address.textContent = member.address;
        number.textContent = member.phoneNumber;

        webSite.setAttribute('href', member.websiteURL);
        webSite.textContent = member.websiteURL;
        webSite.setAttribute('target', "_blank");
        webSite.setAttribute('rel', "noopener noreferrer");
        webSite.classList.add('link');

        detailsLink.setAttribute('href', member.websiteURL);
        detailsLink.textContent = `Details`;
        detailsLink.setAttribute('target', "_blank");
        detailsLink.setAttribute('rel', "noopener noreferrer");
        detailsLink.classList.add('details');

        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(webSite);
        card.appendChild(detailsLink);

        elementId.appendChild(card);
    });
};

export { displayCards };
