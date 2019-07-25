<template>
  <div>
    <a-row>
      <a-col :span="14"><h2>菜鸟驿站</h2></a-col>
      <a-col :span="2">
        <a-button @click="filterAll">All</a-button>
      </a-col>
      <a-col :span="2">
        <a-button @click="filterStatus('已预约')">已预约</a-button>
      </a-col>
      <a-col :span="2">
        <a-button @click="filterStatus('已取件')">已取件</a-button>
      </a-col>
      <a-col :span="2">
        <a-button @click="filterStatus('未取件')">未取件</a-button>
      </a-col>
      <a-col :span="2">
        <AddPackage />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-table :columns="columns" :dataSource="packages" :rowKey="record => record.id">
        <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
        <span slot="customTitle">
          <a-icon type="smile-o" />Name
        </span>
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
        </span>
        <span slot="time" slot-scope="time">
          <span>{{time === 0 ? "" :new Date(time).toLocaleString().replace(/d{1,2}$/,' ')  }}</span>
        </span>
        <span slot="action" slot-scope="text, record">
          <a-button type="dashed" @click="confirm(record)">确认收货</a-button>
        </span>
      </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import AddPackage from "@/components/AddPackage.vue";
const columns = [
  {
    dataIndex: "id",
    key: "id",
    title: "运单号"
  },
  {
    title: "收件人",
    dataIndex: "addressee",
    key: "addressee"
  },
  {
    title: "电话",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "预约时间",
    dataIndex: "appointmentTime",
    key: "appointmentTime",
    scopedSlots: { customRender: "time" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      columns
    };
  },
  methods:{
    confirm(record){
      this.$store.dispatch('takePackage',record)
    },
    filterAll(){
      this.$store.dispatch('getPackages')
    },
    filterStatus(status){
      this.$store.dispatch('getPackagesByStatus', status)
    }
  },
  mounted(){
    this.$store.dispatch('getPackages')
  },
  components: {
    AddPackage
  },
  computed: {
    packages(){
      return this.$store.getters.getPackages;
    }
  }
};
</script>