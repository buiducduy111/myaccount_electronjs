<template>
    <div style="background: #F6F6F6">
        <button class="btn btn-success"><i class="fa-solid fa-plus" style="background: none;"></i> Thêm mới</button>
        <br><br>
        <table class="table table-hover">
            <thead>
                <tr>
                    <td>Tên nhóm</td>
                    <td>Thứ tự</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mạng xã hội</td>
                    <td>1</td>
                    <td>
                        <a href="#" class="btn-edit"><i class="far fa-edit"></i></a>
                        <a href="#" class="btn-del"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>Banking</td>
                    <td>2</td>
                    <td>
                        <a href="#" class="btn-edit"><i class="far fa-edit"></i></a>
                        <a href="#" class="btn-del"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'GroupPage'
    }
</script>