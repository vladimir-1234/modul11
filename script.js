let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
if(isNaN((minValue + maxValue) / 2))
{
	maxValue = 999;
	minValue = -999;
}
if(minValue >= -1000 || maxValue >= 1000)
{
	maxValue = 999;
	minValue = -999;
}
let answerNumber  = Math.floor((minValue + maxValue) / 2);
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
	maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
	answerNumber  = Math.floor((minValue + maxValue) / 2);
	answerField.innerText = `Вы загадали число ${answerNumber }?`;
	orderNumber = 1;
	orderNumberField.innerText = orderNumber;
	gameRun = true;
	
})

document.getElementById('btnOver').addEventListener('click', function () {
    
	if (gameRun){
        if (minValue === maxValue)
		{
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
		else 
		{
			
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           phraseRandom = Math.round( Math.random()*2);
			if(phraseRandom === 1)
				answerPhrase = `Вы задумали число ${answerNumber }?`;
			else if(phraseRandom === 2)
				answerPhrase = `Это вами задуманное число ${answerNumber }?`;
			else
				answerPhrase = `Вы загадали число ${answerNumber }?`;
			answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue)
		{
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
		else 
		{
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
			phraseRandom = Math.round( Math.random()*2);
			if(phraseRandom === 1)
				answerPhrase = `Вы задумали число ${answerNumber }?`;
			else if(phraseRandom === 2)
				answerPhrase = `Это вами задуманное число ${answerNumber }?`;
			else
				answerPhrase = `Вы загадали число ${answerNumber }?`;
			answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
		phraseRandom = Math.round( Math.random()*2);
			if(phraseRandom === 1)
				answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
			else if(phraseRandom === 2)
				answerPhrase = `Это было легко\n\u{1F60E}`;
			else
				answerPhrase = `Молгли бы и по сложнее задумать число\n\u{1F60E} `;
			answerField.innerText = answerPhrase;
        gameRun = false;
    }
})