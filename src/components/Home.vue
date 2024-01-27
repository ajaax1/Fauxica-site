<template>
    <section>
        <div class="title-container">
            <h1>Quality apparel without the price tag</h1>
            <p>No need to spend $xxx on apparel just for the name’s sake. Our premium apparel is made from the same
                stuff.</p>
            <div class="button-link">
                <button v-motion-pop>Browse our collection</button>
                <a class="collection-link" href="">Spring ‘23 Collection</a>
            </div>
            <div v-motion-slide-left class="rectangle-div">
                <h1>50K</h1>
                <p>We’re proud to announce that we now employ a workforce of over 50,000. It’s all possible because of you.
                </p>
            </div>
        </div>
        <div class="image-container">
            <div   class="card first_image">
                <div v-motion-pop  class="image-info">
                    <div>
                        <h4>Fauxica Sport</h4>
                        <p>Running shoe</p>
                    </div>
                    <div>
                        <span>$59</span>
                    </div>
                </div>
            </div>

            <div class="card second_image">
                <div v-motion-pop  class="image-info">
                    <div>
                        <h4>Fauxica casual</h4>
                        <p>Running jacket</p>
                    </div>
                    <div>
                        <span>$69</span>
                    </div>
                </div>
            </div>
            <div  class="card third_image">
                <div v-motion-pop   class="image-info">
                    <div>
                        <h4>Fauxica Home</h4>
                        <p>Running blanket</p>
                    </div>
                    <div><span>$30</span></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
section {
    display: flex;
    width: 1200px;
    padding: 1px;
    align-items: center;
    justify-content: space-between;
}

.image-info {
    height: 3rem;
    width: 100%;
    gap: 1rem;
    background-color: white;
    border-radius: 1rem;
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.image-container {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
        "left right"
        "left bottom";
}

.card {
    border-radius: 1.9em;
    padding: 1rem;
    background-size: 150%;
    display: flex;
    align-items: end;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.1);
}


.first_image {
    background-image: url(../assets/img/Rectangle1.png);
    grid-area: left;
    height: 26em !important;
}

.second_image {
    background-image: url(../assets/img/Rectangle2.png);
    grid-area: right;
}

.third_image {
    background-image: url(../assets/img/Rectangle3.png);
    background-position: 50%;
    grid-area: bottom;
}

h4 {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 158%;
}

p {
    color: #505050;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 158%;
    flex-grow: 1;
}

.title-container {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1em;
    padding: 1em;
}

.title-container h1 {
    color: #000;
    font-family: "Playfair Display";
    font-size: 5.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.title-container p {
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 158%;
}

button {
    border-radius: 19px;
    background: #F2F0DF;
    display: inline-flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 158%;
    border-style: none;
}

.button-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.collection-link {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 158%;
    text-decoration-line: underline;
}

.rectangle-div {
    padding: 2rem;
    border-style: solid;
    border-width: 0.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    gap: 1em;
}
</style>