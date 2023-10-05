let x='123';
result = typeof x;
switch (result) {
    case 'number':
        console.log('х-число');
        break;
    case 'string':
        console.log('x-строка');
        break;
    case 'boolean':
        console.log('x-логический тип');
        break;
    default:
        console.log('Тип х не определен');
}
