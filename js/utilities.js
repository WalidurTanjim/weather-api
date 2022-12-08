const search = () => {
     const inputField = document.getElementById('search-city');
     const inputFieldValue = inputField.value;
     const inputFieldValueToLower = inputFieldValue.toLowerCase();
     loadWeather(inputFieldValueToLower);
     inputField.value = '';
}

document.getElementById('search-city').addEventListener('keypress', function(event){
     if(event.key === 'Enter'){
          search();
     }
})