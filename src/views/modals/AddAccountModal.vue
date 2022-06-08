<template>
    <div class="bg-diabog add-account-modal">
        <div class="account-dialog">
            <h1>Thêm tài khoản</h1>
            <hr>
            <select class="form-control">
                <option>-- Chọn nhóm</option>
            </select>
            <br>
            <input class="form-control" type="text" placeholder="Website"/>
            <br>
            <input class="form-control" type="text" placeholder="Tên tài khoản"/>
            <br>
            <input class="form-control" type="text" placeholder="Mật khẩu"/>
            <br>
            <textarea class="form-control" type="text" style="height: 200px;">Thông tin khác...</textarea>
            <br><br>
            <button class="btn btn-success">Thêm dữ liệu</button>
            &nbsp;
            <button class="btn btn-danger" @click="close()">Đóng</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddAccountModal',
    methods:{
        close() {
            this.$emit('close');
        }
    }
}
</script>