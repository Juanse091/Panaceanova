<template>
    <section class="resumen">
        <div class="cart_producto">
            <div class="container_img_info">
                <img class="cart_img_producto" src="../assets/img/DolexGripa.png" alt="#">
                <div class="cart_info">
                    <h2>Dolex Gripa</h2>
                    <h3>$12.200</h3>
                </div>
            </div>
            <div class="container_cantidad_trash">
                <div class="cart_cantidad">
                    <i class="bi bi-dash cart_minus_icon"></i>
                    <input type="text" class="cart_quantity" maxlength="45" value="1">
                    <i class="bi bi-plus-lg cart_plus_icon"></i>
                </div>
                <i class="bi bi-trash-fill cart_trash_icon"></i>
            </div>
        </div>
    </section>
</template>

<style scoped>
.resumen{
    background: #F5F5F5;
    border-radius: 25px;
    width: 60%;
    margin-left: 16%;
    margin-bottom: 40px;
}
.cart_producto{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.container_img_info{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 60px;
}

.cart_img_producto{
    height: auto;
    width: 130px;
}

.cart_info{
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-left: 50px;
}

.cart_info>h2{
    color: black;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 500;
}

.cart_info>h3{
    color: #A32B2B;
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 500;
}

.container_cantidad_trash{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 40px;
}

.cart_cantidad{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.cart_minus_icon{
    width: 31px;
    height: 31px;
    font-size: 30px;
    color:white;
    background-color: rgba(163, 43, 43, 0.76);
    border-radius: 50%;
    margin-right: 25px;
}

.cart_plus_icon{
    width: 31px;
    height: 31px;
    font-size: 30px;
    color:white;
    background-color: #A32B2B;
    border-radius: 50%;
    margin-left: 25px;
}

.cart_quantity{
    width: 33px;
    height: 22px;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 400;
    color: black;
}

.cart_trash_icon{
    font-size: 40px;
    margin-top: 3px;
    margin-left: 60px;
    color: rgba(141, 141, 141, 1);
}

@media (max-width: 500px) {
    
    .resumen{
        background: #F5F5F5;
        border-radius: 15px;
        width: 96%;
        margin-left: 2%;
        margin-bottom: 15px;
    }
    
    .container_img_info{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20px;
    }
    
    .cart_img_producto{
        height: auto;
        width: 90px;
    }
    
    .cart_info{
        display: flex;
        flex-direction: column;
        text-align: justify;
        margin-left: 15px;
    }
    
    .cart_info>h2{
        color: black;
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
    }
    
    .cart_info>h3{
        color: #A32B2B;
        font-family: Montserrat;
        font-size: 26px;
        font-weight: 500;
    }
    
    .container_cantidad_trash{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 10px;
    }
    
    .cart_cantidad{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .cart_minus_icon{
        width: 21px;
        height: 21px;
        font-size: 20px;
        color:white;
        background-color: rgba(163, 43, 43, 0.76);
        border-radius: 50%;
        margin-right: 15px;
    }
    
    .cart_plus_icon{
        width: 21px;
        height: 21px;
        font-size: 20px;
        color:white;
        background-color: #A32B2B;
        border-radius: 50%;
        margin-left: 15px;
    }
    
    .cart_quantity{
        width: 15px;
        height: 15px;
        text-align: center;
        font-family: 'Montserrat';
        font-size: 15px;
        font-weight: 400;
        color: black;
    }
    
    .cart_trash_icon{
        font-size: 25px;
        margin-top: 3px;
        margin-left: 10px;
        color: rgba(141, 141, 141, 1);
    }
 
}

</style>

<script>
    export default {
        name: 'ProductoChekout',
        props: {}
    }
</script>