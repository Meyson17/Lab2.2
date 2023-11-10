function func1()
{
    let name = "Ilya";

    alert( `hello ${1}` ); // hello 1
    
    alert( `hello ${"name"}` ); // hello name
    
    alert( `hello ${name}` ); // hello I1ya
    
}
function func2()
{
    let names = prompt("Ваше имя?", "");    
    document.writeln(names);
}
function func3()
{
    let a = 1, b = 1;
    let c = ++a; // 2
    let d = b++; // 2
    console.log(a, b, c, d);
}
function func4()
{
    let a = 2;
    let x = 1 + (a *= 2);
    console.log(a,x);
}
function func5()
{
    console.log("" + 1 + 0);
    console.log("" - 1 + 0);
    console.log( true + false);
    console.log(6 / "3");
    console.log("2" * "3");
    console.log(4 + 5 + "px");
    console.log("$" + 4 + 5);
    console.log("4" - 2);
    console.log("4px" - 2);
    console.log(7 / 0);
    console.log("  -9  " + 5);
    console.log("  -9  " - 5);
    console.log(null + 1);
    console.log(undefined + 1);
    console.log(" \t \n" - 2);
}
function func6()
{
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    alert(+a + +b); // 3
}
function func7()
{
    var pi = Math.PI.toFixed(2);
    console.log(pi);
}
function func8()
{
    var number = prompt("Введите число:");
    console.log("Вы ввели число: " + number);
}
function func9()
{
    var number = prompt("Введите число:");
    console.log("вот какое число Вы ввели: " + number);
}
function func10()
{
    var number = prompt("Ввидите сторону квадрата:");
    console.log("периметр"+number*4);
}
function func11()
{
    var number = prompt("Ввидите радиус окружности:");
    console.log("диаметр" + number*2);
}
function func12()
{
    let height = prompt("Введите высоту над Землей (в километрах):");
    let Radius = 6350; // Радиус Земли в километрах
    let Distance = Math.sqrt(Math.pow(Radius, 2)+ Math.pow(height, 2));
    console.log("Расстояние до линии горизонта: " + Distance + " км");
}
function func13()
{
    var edgeLength = prompt("Введите длину ребра куба:");
    var volume = Math.pow(edgeLength, 3);
    console.log("Объем куба: " + volume);
    var surfaceArea = 6 * Math.pow(edgeLength, 2);
    console.log("Площадь боковой поверхности куба: " + surfaceArea);
}
function func14()
{
    var rediant = prompt("Введите радиус окружности:");
    var serclLength = 2*Math.PI*rediant;
    console.log("длина окрудности"+ serclLength);
    var ploshsecl=Math.PI*Math.pow(rediant,2);
    console.log("площадь круга"+ ploshsecl);
}
function func15()
{
    var num1 = prompt("видите 1 число");
    var num2 = prompt("видите 2 число");
    num1 = num1+num2;
    num2 = num1-num2;
    num1 = num1-num2;
    console.log(num1,num2);
}
function func16()
{
    var num1 = prompt("Введите первое число:");
    var num2 = prompt("Введите второе число:");
    var ariv = (num1 + num2) / 2;
    console.log("Среднее арифметическое: " + ariv);
    var gem = Math.sqrt(num1 * num2);
    console.log("Среднее геометрическое: " + gem);
}
function func17() 
{
    let volum = prompt("Введите объем тела:");
    let massa = prompt("Введите массу тела:");
    console.log("Плотность: " + massa / volum);
} 
function func18() 
{
    let ludi = prompt("кол-во жителей:");
    let are = prompt("площадь территории:");
    console.log("Плотность населения: " + ludi / are);
}
function func19() 
{
    let cat1 = prompt("длину 1 катета:");
    let cat2 = prompt("длину 2 катета:");
    console.log("Длина гипотенузы: " + Math.sqrt(Math.pow(cat1,2) + Math.pow(cat2,2)));
}
function func20() 
{
    let vnesh = prompt("Внешний радиус:");
    let vnytr = prompt("Внутренний радиус:");
    console.log("Площадь кольца: " + Math.PI * (Math.pow(vnesh,2) - Math.pow(vnytr,2)));
}
function func21()
{
    let cat1 = prompt("первый катет:");
    let cat2 = prompt("второй катет:");
    let gipoten = Math.sqrt(Math.pow(cat1,2) + Math.pow(cat2,2));
    console.log("Периметр треугольника: " + a + b + gipoten);
}     
function func22() 
{
    var base1 = parseFloat(prompt("Введите значение первого основания:"));
    var base2 = parseFloat(prompt("Введите значение второго основания:"));
    var height = parseFloat(prompt("Введите значение высоты:"));
    var side = Math.sqrt(Math.pow((base2 - base1) / 2, 2) + Math.pow(height, 2));
    var perimeter = base1 + base2 + 2 * side;
    console.log("Периметр равнобедренной трапеции: " + perimeter);

}
