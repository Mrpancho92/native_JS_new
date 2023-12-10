const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault(); 
            }
        });
    });
    txtInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            console.log(input.value.replace(/[a-z]/gi,''));
            input.value = input.value.replace(/[a-z]/gi,'');
        });
    });
};
export default checkTextInputs;


