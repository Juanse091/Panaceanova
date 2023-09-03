<template>
    <article class="categories">
        <img src="../assets/img/medicamentos.png" alt="">
        <router-link  to="/Categorie" style="text-decoration: none;">
            <p class="txt_categorie"> Categoria 1 </p>
        </router-link>
    </article>
</template>

<style scoped>
    .categories{
        padding: 50px;
        /* border: 2px solid yellow; */
        background: #F8F8F8;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        margin: 0 10px;
        cursor: pointer;
    }

    .categories > img{
        width: 76px;
        height: 76px;
    }

    .txt_categorie{
        color: #000;
        font-family: Montserrat;
        font-size: 28px;
        font-weight: 400;
    }

    @media (max-width: 500px) {
        .categories{
            padding: 20px;
            margin: 20px 0;
        }

        .categories > img{
            width: 32.5px;
            height: 32.5px;
        }

        .txt_categorie{
            font-size: 13px;
        }
    }

</style>

<script>
    export default {
        name: 'CategorieBox',
        props: {}
    }
</script>