const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          no = document.querySelector('.portfolio-no');
    
    const arr = ['.all', '.lovers', '.chef', '.girl', '.guy', '.grandmother', '.granddad'];

    const typeFilter = (markType, wrapper) => {

        wrapper.querySelectorAll('.all').forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
        }
    };

    function optimization(arr, menu, wrapper) {
         arr.forEach(item => {
            menu.querySelector(item).addEventListener('click', () => {
                if (item === '.grandmother' || item === '.granddad') {
                    typeFilter(null, wrapper);
                } else {
                    typeFilter(wrapper.querySelectorAll(item), wrapper);
                };
                });
            });    
        };  
    optimization(arr, menu, wrapper);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');  
        }
    });
};

export default filter;