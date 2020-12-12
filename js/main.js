const lotin = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', "o'", 'z', 'g\'', 'sh', 'ch', 'ng'];
const kiril = ['а', 'б', 'д', 'э', 'ф', 'г', 'ҳ', 'и', 'ж', 'к', 'л', 'м', 'н', 'о', 'п', 'қ', 'р', 'с', 'т', 'у', 'в', 'х', 'й', "ў", 'з', 'ғ', 'ш', 'ч', 'нг', 'ё', 'ю', 'е'];
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let inputLotin = document.querySelector('#inputLotin');
let outputKiril = document.querySelector('#outputKiril');

function toKiril(){
    let isFound = false;
    // let lotinArray = inputLotin.value.toLowerCase().split('');
    let lotinArray = inputLotin.value.split('');
    let result = [];
    for (let i = 0; i < lotinArray.length; i++) {
        for(let j = 0; j < lotin.length; j++){
            if(lotinArray[i] == 'c' && lotinArray[i + 1] == 'h'){
                result.push(kiril[kiril.indexOf('ч')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == 'h' && lotinArray[i - 1] == 'c'){
                continue;
            }

            if(lotinArray[i] == 'y' && lotinArray[i + 1] == 'e'){
                if (lotinArray[i] == lotinArray[i].toUpperCase()) {
                    result.push((kiril[kiril.indexOf('е')]).toUpperCase());
                } else{
                    result.push(kiril[kiril.indexOf('е')]);
                    isFound == true;
                    break;
                }
            }

            if(lotinArray[i] == 'e' && lotinArray[i - 1] == 'y'){
                continue;
            }

            if (lotinArray[i] == 'e' && i != 0) {
                result.push(kiril[kiril.indexOf('е')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == 's' && lotinArray[i + 1] == 'h'){
                result.push(kiril[kiril.indexOf('ш')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == 'h' && lotinArray[i - 1] == 's'){
                continue;
            }

            if(lotinArray[i] == 'y' && lotinArray[i + 1] == 'o'){
                result.push(kiril[kiril.indexOf('ё')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == 'o' && lotinArray[i - 1] == 'y'){
                continue;
            }

            if(lotinArray[i] == 'y' && lotinArray[i + 1] == 'u'){
                result.push(kiril[kiril.indexOf('ю')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == 'u' && lotinArray[i - 1] == 'y'){
                continue;
            }

            if(lotinArray[i] == 'n' && lotinArray[i + 1] == 'g'){
                result.push(kiril[kiril.indexOf('нг')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == 'g' && lotinArray[i - 1] == 'n'){
                continue;
            }

            if(lotinArray[i] == 'g' && lotinArray[i + 1] == "'"){
                result.push(kiril[kiril.indexOf('ғ')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == "'" && lotinArray[i - 1] == 'g'){
                continue;
            }

            if(lotinArray[i] == 'o' && lotinArray[i + 1] == "'"){
                result.push(kiril[kiril.indexOf('ў')]);
                isFound == true;
                break;
            }

            if(lotinArray[i] == "'" && lotinArray[i - 1] == 'o'){
                continue;
            }

            if((lotinArray[i] == lotinArray[i].toUpperCase()) && (lotinArray[i].toLowerCase() == lotin[j])){
                    result.push(kiril[j].toUpperCase());
                    break;
            }

            if(lotinArray[i] == ' '){
                result.push(' ');
                isFound == true;
                break;
            }
            
            

            if(lotinArray[i] == lotin[j]){
                result.push(kiril[j]);
                break;
            }  

            if(lotinArray[i] == number[j]){
                result.push(lotinArray[i]);
                break;
            }

            

        }
        

    }

    outputKiril.innerHTML = result.join('');
    
}