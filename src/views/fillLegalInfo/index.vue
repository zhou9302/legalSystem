<template>
    <div class="legoInfoFill">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
    .legoInfoFill{
        @include wh(100%,100%);
        background: #f4f7fc;
        overflow: scroll;
    }
</style>
