window.onload = function() {

    document.querySelectorAll(".link-list li").forEach(item => {
        
        item.addEventListener('click', event => {
            window.open(event.target.children[0].href, "_blank");
        });

    });
};