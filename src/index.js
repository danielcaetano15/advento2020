import './styles/main.scss';

const chooseChallengeButton = document.getElementById('chooseChallengeButton');
const challengeInput = document.getElementById('challengeDay');
const challengeContent = document.getElementById('challengeContent');

chooseChallengeButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let challengeInputValue = challengeInput.value;
    challengeInputValue = "02"; //force test for quick refresh
    try {
        const challengeModuleToLoad = await import(`./challenge-days/${challengeInputValue}/${challengeInputValue}`);
        challengeModuleToLoad.run(challengeContent);
    } catch (error) {
        challengeContent.textContent = error.message;
    }
});

chooseChallengeButton.click(); //force test for quick refresh