<template>
    <div class="bg-diabog add-account-modal">
        <div class="account-dialog">
            <h1>Thông tin chi tiết tài khoản</h1>
            <br>
            <textarea class="form-control" type="text" style="height: 200px;">Thông tin khác...</textarea>
            <br><br>
            &nbsp;
            <button class="btn btn-danger" @click="close()">Đóng</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailAccountModal',
    props: {
        accountId: Number
    },
    data() {
        return {
            id: 1
        }
    },
    created() {
        this.id = this.accountId
    },
    methods:{
        close() {
            this.$emit('close');
        },
        update(newId){
            this.id = newId;

            // Fetch data
        }
    }
}
</script>