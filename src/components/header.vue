<template>
    <div>
        <header class="header">
            <div class="item left">
                <slot name="left"></slot>
            </div>
            <div class="title">{{title}}</div>
            <div class="item rig">
                <slot name="right"></slot>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="less" scoped>
    .header{
        position:relative;
        line-height: 38px;
        color:#fff;
        text-align: center;
        background: #222;
        .item{
            position: absolute;
            top:0;
            bottom:0;
            z-index: 1;
            a{
                color:#fff;
            }
        }
        .left{
            left:10px;
        }
        .right{
            right:10px;
        }

    }
    
</style>