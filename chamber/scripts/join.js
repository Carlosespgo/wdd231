window.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const now = new Date();
    const formatted = now.toLocaleString('es-CO');
    timestampField.value = formatted;
});

const memberships = [
    {
        level: 0,
        title: "Non Profit Membership Level",
        description: "Designed for non-profit organizations seeking institutional support and visibility in the community.",
        benefits:["Basic access to networking events", "Inclusion in the member directory", "Initial advice on legal and administrative matters"],
        fees: "No fees."
    },
    {
        level: 1,
        title: "Bronze Membership Level",
        description: "Entry level for small businesses or entrepreneurs who want to start positioning themselves.",
        benefits: ["Participation in local trade shows and business roundtables", "Basic advertising in chamber newsletters", "Discounts on training and workshops"],
        fees: "Low annual fee $100–$200 USD"
    },
    {
        level: 2,
        title: "Silver Membership Level",
        description: "Designed for growing companies seeking greater visibility and strategic support.",
        benefits:["Prominent promotion on the chamber's website", "Preferential access to networking events and seminars", "Business consulting in areas such as marketing and finance"],
        fees: "Medium fee $300–$500 USD"
    },
    {
        level: 3,
        title: "Gold Membership Level",
        description: "Premium level for established companies seeking leadership and maximum exposure.",
        benefits:["Sponsorship and prominent presence at chamber events", "Exclusive access to forums with business and government leaders", "Personalized legal, tax, and technology advisory services", "Greater visibility in communication campaigns"],
        fees: "High fee $800–$1000 USD"
    }
]

const membershipInfo = document.querySelector("#membershipInfo");

function displayInfo(membership) {
  membershipInfo.innerHTML = '';
  membershipInfo.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membership.title}</h2>
    <h3>Description:</h3>
    <p>${membership.description}</p>
    <h3>Benefits:</h3>
    <p>${membership.benefits}</p>
    <h3>Fees:</h3>
    <p>${membership.fees}</p>
    `;

  membershipInfo.showModal()
  
  closeModal.addEventListener("click", () => {
    membershipInfo.close();
  });
}

const NPinfo = memberships.find(membership => membership.level === 0);
const NP = document.querySelector("#NP");
NP.addEventListener('click', () => {
  displayInfo(NPinfo);
});

const bronzeInfo = memberships.find(membership => membership.level === 1);
const bronze = document.querySelector("#bronze");
bronze.addEventListener('click', () => {
  displayInfo(bronzeInfo);
});

const silverInfo = memberships.find(membership => membership.level === 2);
const silver = document.querySelector("#silver");
silver.addEventListener('click', () => {
  displayInfo(silverInfo);
});

const goldInfo = memberships.find(membership => membership.level === 3);
const gold = document.querySelector("#gold");
gold.addEventListener('click', () => {
  displayInfo(goldInfo);
});
