<template>
    <div>
        <span ref="passwordViewer">{{shower}}</span> &nbsp;
        <i :class="eyeClass" style="cursor: pointer;" title="Click để hiển thị" @click="tooglePassword"></i>
    </div>
</template>

<script>
export default {
    name: 'PasswordViewer',
    props: {
        password: Text
    },
    data(){
        return {
            shower: '**********',
            eyeClass: 'fa-solid fa-eye eye-button'
        }
    },
    methods: {
        tooglePassword(){
            if (this.shower == '**********'){
                this.shower = this.password;
                this.eyeClass = 'fa-solid fa-eye-slash';
            }
            else {
                this.shower = '**********';
                this.eyeClass ='fa-solid fa-eye eye-button';
            }
        }
    }
}
</script>

<style scoped>
    * {
        background: none;
    }
</style>