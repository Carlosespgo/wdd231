const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(lastModifiedDate)}`;