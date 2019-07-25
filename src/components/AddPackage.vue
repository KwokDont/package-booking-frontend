<template>
  <div id="add">
    <a-button type="primary" @click="showModal">添加</a-button>
    <a-modal
      title="包裹入库"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <a-form
        :form="form"
      >
        <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
              'id',
              {rules: [{ required: true, message: 'Please input the id!' }]}
            ]"
          />
        </a-form-item>
        <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
              'addressee',
              {rules: [{ required: true, message: 'Please input addressee!' }]}
            ]"
          />
        </a-form-item>
        <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
              'phone',
              {rules: [{ required: true, message: 'Please input recipient\' phone!' }]}
            ]"
          />
        </a-form-item>
        <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
              'weight',
              {rules: [{ required: true, message: 'Please input package weight!' }]}
            ]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('addPackage',values);
          this.visible = false;
        }
      });
    },
    handleOk(e) {
      this.handleSubmit(e);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    }
  }
};
</script>

<style>
#add{
  margin-right: 5px;
}
</style>
