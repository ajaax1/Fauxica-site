<template>
    <header class="d-flex justify-content-between align-items-center">
        <img src="../assets/img/Group 5.svg" alt="">
        <nav class="d-flex align-items-center">
            <ul class="d-flex align-items-center gap-3">
                <li><a class="active" href="">HOME</a></li>
                <li><a class="active" href="">{{ products }}</a></li>
                <li><a class="active" href="">{{ gallery }}</a></li>
                <li><a class="active" href="">{{ contact }}</a></li>
                <li><button @click="toggleLanguage()" class="btn-lingua">{{ abbreviation }}</button></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            abbreviation: 'BR',
            language:'',
            products:'PRODUCTS',
            gallery:'GALLERY',
            contact:'CONTACT'
        };
    },
    methods: {
        toggleLanguage() {
            if (this.abbreviation === 'BR') {
                this.abbreviation = 'EN'
                this.language = 'BR'
                this.products = 'PRODUTOS'
                this.gallery = 'GALERIA'
                this.contact = 'CONTATO'
                this.emitter.emit("toggleLanguage", this.language);
            } else {
                this.abbreviation = 'BR';
                this.language = 'EN'
                this.products = 'PRODUCTS'
                this.gallery = 'GALLERY'
                this.contact = 'CONTACT'
                this.emitter.emit("toggleLanguage", this.language);
            }
        }
    }
}
</script>

<style>
header {
    color: #000000;
    padding: 1rem;
    height: 5rem;
    width: 100%;
    width: 1200px;
    margin-bottom: 7rem;
}


a {
    position: relative;
}

li a.active::before {
    content: "";
    position: absolute;
    bottom: 1px;
    width: 1px;
    height: 0.5px;
    background-color: #000000;
    transition: width 0.3s ease;
}

li a.active:hover::before {
    width: 50%;
}

.btn-lingua {
    height: 3rem;
    border-radius: 4px;
    font-size: 15px;
    text-align: center;
    transition: transform 0.3s ease;
    width: 4rem;
    font-weight: 600;
}

.btn-lingua:hover {
    transform: scale(1.1);
}
</style>