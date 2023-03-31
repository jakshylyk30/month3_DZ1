const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (elem, target1, target2, value) => {
    elem.addEventListener('input', async () => {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            if (elem === som) {
                target1.value = (elem.value / data.eur).toFixed(2);
                target2.value = (elem.value / data.usd).toFixed(2);
            } else if (elem === usd) {
                target1.value = (elem.value * data.usd).toFixed(2);
                target2.value = (elem.value * data.usd / data.eur).toFixed(2);
            } else if (elem === eur) {
                target1.value = (elem.value * data.eur).toFixed(2);
                target2.value = (elem.value * data.eur / data.usd).toFixed(2);
            }
            elem.value === '' ? (target1.value = '') : null;
            elem.value === '' ? (target2.value = '') : null;
        } catch (error) {
            console.error(error);
        }
    });
};

convert(som, usd, eur, 42);
convert(usd, som, eur, '');
convert(eur, som, usd, '');