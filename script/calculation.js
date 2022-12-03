// Calculate Button On Trigger
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerCost = getValueFromField('perplayer-field');
    const playerTotalCost = playerCost * 5;
    const cost = setValueToElement('player-total', playerTotalCost);
})

// Calculate All Button On Trigger
document.getElementById('btn-total').addEventListener('click', function(){
    const updatePlayerCost = getValueFromElement('player-total');
    const managerCost = getValueFromField('manager-field');
    const coachCost = getValueFromField('coach-field')
    const totalSum = updatePlayerCost + managerCost + coachCost;
    const total = setValueToElement('total-cost', totalSum);
})

// Function For Getting Values From Input field
function getValueFromField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

// Function For Getting Value From Element
function getValueFromElement(elementId){
    const elementPreviousValue = document.getElementById(elementId);
    const elementPreviousValueString = elementPreviousValue.innerText;
    const newElementValue = parseFloat(elementPreviousValueString);
    return newElementValue;
}

// Function For Setting Value To Element 
function setValueToElement(setElementId, value){
    const elementText = document.getElementById(setElementId);
    const elementTextString = elementText.innerText;
    elementText.innerText = value;
}