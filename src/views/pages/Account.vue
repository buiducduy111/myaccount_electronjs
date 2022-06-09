<template>
    <div style="background: #F6F6F6">
        <div style="background: #F6F6F6;">
            <div style="background: #F6F6F6; display: inline-block;">
                <button id="btnAddNew" type="button" class="btn btn-success" @click="showAddNewDialog"><i class="fa-solid fa-plus" style="background: none;"></i> Thêm mới</button>
            </div>
            <div style="background: #F6F6F6; display: inline-block; margin-left: 10px;">
                <input class="form-control" type="text" placeholder="Tìm kiếm..." style="min-width: 300px">
            </div>
            <div style="background: #F6F6F6; display: inline-block; margin-left: 10px;">
                <VueSelect :options="websites" v-model="selectedWebsite" :on-change="selectedChanged()" style="min-width: 300px"></VueSelect>
            </div>
        </div>
        <br>

       <table class="table table-hover">
            <thead>
                <tr>
                    <td>Website</td>
                    <td>Tài khoản</td>
                    <td>Mật khẩu</td>
                    <td>Chi tiết</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a class="web-link" href="https://a">https://google.com</a></td>
                    <td>buiducduy111</td>
                    <td style="width: 200px"><PasswordViewer password="123456"/></td>
                    <td><a class="btn btn-show" href="#" @click="showDetailDialog(2)">Hiển thị</a></td>
                    <td>
                        <a href="#" class="btn-edit" @click="showEditDialog(2)"><i class="far fa-edit"></i></a>
                        &nbsp;
                        <a href="#" class="btn-del"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td><a class="web-link" href="https://a">https://google.com</a></td>
                    <td>buiducduy111</td>
                    <td style="width: 200px"><PasswordViewer password="34567893"/></td>
                    <td><a class="btn btn-show" href="#">Hiển thị</a></td>
                    <td>
                        <a href="#" class="btn-edit" @click="showEditDialog(3)"><i class="far fa-edit"></i></a>
                        &nbsp;
                        <a href="#" class="btn-del"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td><a class="web-link" href="https://a">https://google.com</a></td>
                    <td>buiducduy111</td>
                    <td style="width: 200px"><PasswordViewer password="@Bujducduy122"/></td>
                    <td><a class="btn btn-show" href="#">Hiển thị</a></td>
                    <td>
                        <a href="#" class="btn-edit" @click="showEditDialog(4)"><i class="far fa-edit"></i></a>
                        &nbsp;
                        <a href="#" class="btn-del"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
        

        <AddAccountModal id="addAccountModal" v-show="modal.isAddNewModalVisible" @close="closeAddNewModal"/>
        <EditAccountModal id="editAccountModal" v-show="modal.isEditModalVisible" @close="closeEditModal" ref="editAccountModal"></EditAccountModal>
        <DetailAccountModal id="editAccountModal" v-show="modal.isDetailModalVisible" @close="closeDetailModal" ref="detailAccountModal"></DetailAccountModal>
        
    </div>
</template>

<script>
/* eslint-disable */
import AddAccountModal from '../modals/AddAccountModal.vue';
import EditAccountModal from '../modals/EditAccountModal.vue';
import DetailAccountModal from '../modals/DetailAccountModal.vue';
import PasswordViewer from '../components/PasswordViewer.vue';
import VueSelect from 'vue-select'

export default {
name: "AccountPage",
data() {
    return {
        modal: {
            isAddNewModalVisible: false,
            isEditModalVisible: false,
            isDetailModalVisible: false
        },
        websites: [
            '-- Lọc website',
            'https://google.com',
            'https://gi.com',
            'https://abc.com'
        ],
        selectedWebsite: '-- Lọc website'
    };
},
methods: {
    // Modal control
    showAddNewDialog() {
        this.modal.isAddNewModalVisible = true;
    },
    closeAddNewModal() {
        this.modal.isAddNewModalVisible = false;
    },
    showEditDialog(id) {
        this.$refs.editAccountModal.update(id);
        this.modal.isEditModalVisible = true;
    },
    closeEditModal() {
        this.modal.isEditModalVisible = false;
    },
    showDetailDialog(id) {
        this.$refs.detailAccountModal.update(id);
        this.modal.isDetailModalVisible = true;
    },
    closeDetailModal() {
        this.modal.isDetailModalVisible = false;
    },

    selectedChanged(){
        console.log(this.selectedWebsite);
    },

    // Fetch data
    refreshData(){
        
    }
},
components: { AddAccountModal, EditAccountModal, PasswordViewer, DetailAccountModal, VueSelect}
}
</script>