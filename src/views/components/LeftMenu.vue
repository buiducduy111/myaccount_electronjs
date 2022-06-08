<template>
    <ul>
        <li v-for="item in menuItems" :key="item.id" :class="{selected: selectedMenuIndex == item.id}">
          <router-link :to="item.link" @click="item_click(item.id)">{{item.display}}</router-link>
        </li>
        <li class="menu-item"><router-link to="#">Hỗ trợ</router-link></li>
    </ul>
</template>

<script>
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
          'link': '/group',
          'display': 'Phân nhóm'
        },
        {
          'id': 3,
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
    }
  }
}
</script>