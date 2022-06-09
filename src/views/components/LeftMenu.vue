<template>
    <ul>
        <li v-for="item in menuItems" :key="item.id" :class="{selected: selectedMenuIndex == item.id}">
          <router-link :to="item.link" @click="item_click(item.id)">{{item.display}}</router-link>
        </li>
        <li class="menu-item"><a href="#" @click="support">Hỗ trợ</a></li>
    </ul>
</template>

<script>
const { shell } = require('electron').remote;

export default {
  name: 'LeftMenu',
  data(){
    return {
      menuItems: [
        {
          'id': 1,
          'link': '/account',
          'display': 'Tài khoản'
        },
        {
          'id': 2,
          'link': '/setting',
          'display': 'Cài đặt'
        }
      ],
      selectedMenuIndex: 1
    }
  },
  methods: {
    item_click(id){
      this.selectedMenuIndex = id;
    },
    support(){
      shell.openExternal('https://giaiphapmmo.net');
    }
  }
}
</script>