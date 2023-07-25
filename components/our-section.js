[].forEach.call(document.getElementsByClassName("our-section"), section=> {
    section.innerHTML=`
    <div class="container">
        <div>
            <h3>Our <span>${section.parentElement.classList[0]}</span></h3>
            <a href="">View All >></a>
        </div>
        <hr>
    </div>
    `
});