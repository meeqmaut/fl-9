import { calculate } from './interface-module';

import '../styles/styles.css';

const root = document.querySelector('#root');

const calculatorTemplate = ` 
<div class="calculator">
    <h1>Calculator</h1>
    <hr>
        <button class="clean">C</button>
        <input type="text" class="inputValue" maxlength="10">
    <hr>
    <div>
        <div class="buttons-digits">
            <button class="numbers">1</button>
            <button class="numbers">2</button>
            <button class="numbers">3</button>
            <button class="numbers">4</button>
            <button class="numbers">5</button>
            <button class="numbers">6</button>
            <button class="numbers">7</button>
            <button class="numbers">8</button>
            <button class="numbers">9</button>
            <button class="numbers">0</button>
            <button class="so">=</button>
        </div>
        <div class="operations">
            <button class="substract">-</button>
            <button class="add">+</button>
            <button class="divide">/</button>
            <button class="multiply">*</button>
        </div>
    </div>
</div>`;

root.innerHTML = calculatorTemplate;

const calculator = document.querySelector('.calculator');
const input = document.querySelector('.inputValue');

let first = '',
    second = '',
    operation = '',
    result = '';

calculator.addEventListener('click', function (e) {
    const checkClass = e.target.classList; 

    if (checkClass.contains('numbers')) {
        first += e.target.textContent;
        input.value += e.target.textContent;
    }
    if (checkClass.contains('add') || checkClass.contains('substract') || 
    checkClass.contains('multiply') || checkClass.contains('divide')) {
        input.value = '';
        second = first;
        first = '';
        operation = e.target.textContent;
    }
    if (checkClass.contains('clean')) {
        input.value = '';
        first = '';
        second = '';
        operation = '';
        result = '';
    }
    if (checkClass.contains('so')) {
        input.value = calculate(operation, first, second, result);
    }
    
});