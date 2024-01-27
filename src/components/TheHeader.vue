<template>
    <header>
        <img src="../assets/img/Group 5.svg" alt="">
        <nav>
            <ul>
                <li><a class="active" href="">HOME</a></li>
                <li><a class="active" href="">PRODUCTS</a></li>
                <li><a class="active" href="">GALLERY</a></li>
                <li><a class="active" href="">CONTACT</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    padding: 1em;
    width: 100%;
    width: 1200px;
    margin-bottom: 10rem;
}

ul {
    display: flex;
    gap: 1em;
}
a{
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
</style>