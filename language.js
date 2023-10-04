//----------------Language----------------------------------------------------------------
const textsToChange = document.querySelectorAll("[data-section]");
const FlagsElement = document.getElementById("flags");

const changeLanguage = async language => {
    const recuestJson = await fetch(`./languages/${language}.json`);
    const texts = await recuestJson.json();
       for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML=texts[section][value];
    }
};

FlagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});