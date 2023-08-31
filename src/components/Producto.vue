<template>
    <article class="product">
        <img src="../assets/img/DolexGripa.png" alt="">
        <hr>
        <p>Dolex Gripa</p>
        <div class="puntuacion">
            <i class="bi bi-star-fill star_icon"></i>
            <i class="bi bi-star-fill star_icon"></i>
            <i class="bi bi-star-fill star_icon"></i>
            <i class="bi bi-star-fill star_icon"></i>
            <i class="bi bi-star-fill star_icon"></i>
        </div>
        <p>$12.200</p>
        <router-link  to="/medicamentos">
            <button class="btn_buy">Comprar</button>
        </router-link>
    </article>
</template>

<style scoped>

.product{
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    background: #F8F8F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    gap: 3px;   
}

.product > img{
    margin-top: 30px;
    width: 182px;
    height: 60%;
    object-fit: cover;
}

.btn_buy{
    cursor: pointer;
    border: none;
    background-color: #A32B2B;
    color: white;
    height: 36px;
    width: 100%;
    border-radius: 16px;
}

.puntuacion{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.star_icon{
    font-size: 25px;
    color: #A32B2B;
    padding-right: 6px;
}

</style>

<script>
    export default {
        name: 'Producto',
        props: {}
    }
</script>
