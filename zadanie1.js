let a = +prompt('Введите значение', '');
// вводим что-то
if (typeof a == 'number'&&!isNaN(a))
{if (a%2==0)
    console.log('четное')
else
    console.log('нечетное')}
else
    console.log('Упс, кажется, вы ошиблись')