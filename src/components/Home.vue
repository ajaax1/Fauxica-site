<template>
    <section>
        <div class="title-container">
            <h1>{{ currentTranslations.title }}</h1>
            <p>{{ currentTranslations.paragraph }}</p>
            <div class="button-link">
                <button class="button-collection" v-motion-pop>{{ currentTranslations.button }}</button>
                <a class="collection-link" href="">{{ currentTranslations.link }}</a>
            </div>
            <div v-motion-slide-left class="rectangle-div">
                <h1>50k</h1>
                <p>{{ currentTranslations.rectangle }}</p>
            </div>
        </div>
        <div class="image-container">
            <div class="card first_image">
                <div v-motion-pop class="image-info">
                    <div>
                        <h4>{{ currentTranslations.image1Title }}</h4>
                        <p>{{ currentTranslations.image1Paragraph }}</p>
                    </div>
                    <div>
                        <span>{{ currentTranslations.Image1Price }}</span>
                    </div>
                </div>
            </div>

            <div class="card second_image">
                <div v-motion-pop class="image-info">
                    <div>
                        <h4>{{ currentTranslations.image2Title }}</h4>
                        <p>{{ currentTranslations.image2Paragraph }}</p>
                    </div>
                    <div>
                        <span>{{ currentTranslations.Image2Price }}</span>
                    </div>
                </div>
            </div>
            <div class="card third_image">
                <div v-motion-pop class="image-info">
                    <div>
                        <h4>{{ currentTranslations.image3Title }}</h4>
                        <p>{{ currentTranslations.image3Paragraph }}</p>
                    </div>
                    <div><span>{{ currentTranslations.Image3Price }}</span></div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "TheHeader",
    data() {
        return {
            language: '',
            translations: {
                EN: {
                    title: 'Quality apparel without the price tag',
                    paragraph: 'No need to spend R$xxx on apparel just for the name’s sake. Our premium apparel is made from the same stuff.',
                    button: 'browse our collection',
                    link: 'Spring ‘23 Collection',
                    rectangle: 'We’re proud to announce that we now employ a workforce of over 50,000. It’s all possible because of you.',
                    Image1Price: '$60',
                    image1Title: 'Fauxica sport',
                    image1Paragraph: 'Running shoe',
                    Image2Price: '$69',
                    image2Title: 'Fauxica casual',
                    image2Paragraph: 'Running jacket',
                    Image3Price: '$30',
                    image3Title: 'Fauxica home',
                    image3Paragraph: 'Running blanket',
                },
                BR: {
                    title: 'Roupas de qualidade sem a etiqueta de preço',
                    paragraph: 'Não há necessidade de gastar R$xxx em roupas apenas pelo nome. Nossas roupas premium são feitas do mesmo material.',
                    button: 'explorar nossa coleção',
                    link: 'Coleção Primavera ‘23',
                    rectangle: 'Estamos orgulhosos em anunciar que agora empregamos uma equipe com mais de 50.000 pessoas. Tudo isso é possível por sua causa.',
                    Image1Price: 'R$60',
                    image1Title: 'Fauxica esportiva',
                    image1Paragraph: 'Tênis de corrida',
                    Image2Price: 'R$69',
                    image2Title: 'Fauxica casual',
                    image2Paragraph: 'Jaqueta de corrida',
                    Image3Price: 'R$30',
                    image3Title: 'Fauxica home',
                    image3Paragraph: 'Manta de corrida',
                },
            },
        };
    },
    mounted() {
        this.emitter.on("toggleLanguage", language => {
            this.language = language;
        });
    },
    computed: {
        currentTranslations() {
            return this.translations[this.language] || this.translations.EN;
        },
    },
};
</script>

<style>
section {
    display: flex;
    width: 100%;
    width: 1200px;
    padding: 1px;
    align-items: center;
    justify-content: space-between;
}

.image-info {
    width: 100%;
    height: 5rem;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
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
    max-width: 45rem;
    width: 200rem;
}

.card {
    border-radius: 1rem;
    width: 22rem;
    padding: 1rem;
    display: flex;
    justify-content: end;
    background-size: 100%;
    transition: transform 0.3s ease;
    border-style: none;
}

.card:hover {
    transform: scale(1.1);
}


.first_image {
    background-image: url(../assets/img/Rectangle1.png);
    grid-area: left;
    height: 26em !important;
    background-position: 50%;
}

.second_image {
    background-image: url(../assets/img/Rectangle2.png);
    background-position: 50%;
    grid-area: right;
}

.third_image {
    background-image: url(../assets/img/Rectangle3.png);
    background-position: 50%;
    grid-area: bottom;
}

h4 {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 158%;
}

p {
    color: #505050;
    font-size: 11px;
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
    background: #F2F0DF;
    color: #000;
    border-style: none;
}

.button-collection {
    border-radius: 19px;
    gap: 1em;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 158%;
    padding: 1rem;
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