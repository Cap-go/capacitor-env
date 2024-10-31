import { LiveUpdates } from '@capgo&#x2F;live-updates';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    LiveUpdates.echo({ value: inputValue })
}
