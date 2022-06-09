<template>
    <div style="background: #F6F6F6">
        <label>Đường dẫn lưu trữ</label>
        <br>
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="saveLocation">
            <button class="input-group-text" @click="openDirectoryDialog">...</button>
        </div>

        <label><b>Security</b></label><br>
        <label>Bạn chưa thiết lập mã PIN cho phần mềm, ai cũng có thể truy cập dữ liệu của bạn</label>
        <br>
        <button class="btn btn-secondary" @click="modal.isShowPinContainer = !modal.isShowPinContainer">Đặt mã PIN</button>

        <div class="pin-container" style="padding-top: 15px; max-width: 300px; background: #F6F6F6">
            <input type="text" class="form-control" v-model="pin" v-show="modal.isShowPinContainer">
        </div>

        <br>
        <label><b>Nâng cao</b></label>
        <div style="height: 5px; background: none"></div>
        <input type="checkbox" id="auto_backup" v-model="autoBackup">
        <label for="auto_backup">&nbsp; Tự động backup dữ liệu hằng ngày</label>
        <br><br>

        <button class="btn btn-success" style="width: 100px" @click="save">Lưu</button>
    </div>
</template>

<script>
    const { app, dialog } = require('electron').remote;
    const fs = require('fs');

    export default {
        name: 'SettingPage',
        data(){
            return {
                modal: {
                    isShowPinContainer: false
                },
                saveLocation: '',
                autoBackup: true,
                pin: ''
            }
        },
        methods:{
            openDirectoryDialog(){
                dialog.showOpenDialog({ properties: ['openDirectory'] }).then(result => {
                    this.saveLocation = result.filePaths[0];
                });
            },

            // Save to file
            save() {
                const settingDir = app.getPath('documents')+'\\GPMAccountManager';
                if (!fs.existsSync(settingDir)){
                    fs.mkdirSync(settingDir, { recursive: true });
                }

                let objText = JSON.stringify({
                    saveLocation : this.saveLocation,
                    pin : this.pin,
                    autoBackup: this.autoBackup
                });

                let base64 = Buffer.from(objText, 'utf8').toString('base64');
                fs.writeFileSync(settingDir+'\\seting.dat', base64);
                alert('Lưu thành công');
            }
        },
        // Load from setting file
        created(){
            const settingFile = app.getPath('documents')+'\\GPMAccountManager\\seting.dat';

            if (fs.existsSync(settingFile)){
                const base64String = fs.readFileSync(settingFile, {encoding:'utf8', flag:'r'});
                const text = Buffer.from(base64String, "base64").toString("utf8");
                const obj = JSON.parse(text);

                this.pin = obj.pin;
                this.saveLocation = obj.saveLocation;
                this.autoBackup = obj.autoBackup;
            }
            
        }
    }
</script>