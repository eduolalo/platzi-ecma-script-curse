// Suggested code may be subject to a license. Learn more: ~LicenseLog:337484072.
const button = document.getElementById('da61e980');

button.addEventListener('click', async () => {
    const { hello } = await import('./module.js');
    hello();
});