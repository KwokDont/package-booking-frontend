<template>
  <div id="booking">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'id',
          {rules: [{ required: true, message: 'Please input your id!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="取件时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 1 }">
        <a-date-picker
          format="YYYY-MM-DD HH:mm:ss"
          :disabledDate="disabledDate"
          :disabledTime="disabledDateTime"
          :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
          v-decorator="[
          'appointmentTime',
          {rules: [{ required: true, message: 'Please input your appointment time!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">预约</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name:'booking',
  data() {
    return {
      form: this.$form.createForm(this),
    }
  },
  methods: {
    moment,
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
    },
    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(0, 9),
      };
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          values.appointmentTime = moment(values.appointmentTime).valueOf();
          this.$store.dispatch('book',values)
        }
      });
    },
  }
};
</script>
<style>
#booking {
  text-align: center;
}
</style>

