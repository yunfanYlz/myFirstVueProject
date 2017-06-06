<template>
  <div>
      <fieldset>
        <legend> Search Person </legend>
        <form v-on:submit.prevent="search">
          <div class="form-group">
            <label>Age:</label>
            <input type="text" v-model.number="searchPerson.age" id="age"/>
            <label>Sex:</label>
            <select v-model="searchPerson.sex" name="sex">
              <option value="0">男</option>
              <option value="1">女</option>
            </select>
          </div>
          <div class="form-group">
            <label>Money:</label>
            <input v-on:input="print(searchPerson.money)" type="text" v-model="searchPerson.money" name="money"/>
            <label>birthDay:</label>
            <input type="text" v-model="searchPerson.birthDay" name="birthDay" value="2017/07/16 00:10:00"/>
          </div>
          <formdatepicker></formdatepicker>
          <div class="form-group">
            <label>Attachment:</label>
            <input id="attachment" name="attachment" type="file"/>
          </div>
          <div class="form-group">
            <button @click.prevent="search">search</button>
            <button>searchSubmit</button>
            <button @click.prevent="submitCreate">submitCreate</button>
          </div>
        </form>
      </fieldset>
    <hr>
    <div class="form-group">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="select">select</button>
      <button @click="createPerson">Create</button>
    </div>
  </div>
</template>

<script>
  import FormDatepicker from '@/components/Datepicker'
  export default {
    components: {
      'formdatepicker': FormDatepicker
    },
    name: 'SearchForm',
    data: function () {
      return {
        searchPerson: {
          name: '',
          age: 0,
          sex: 0,
          birthDay: '',
          money: 0
        },
        people: [],
//    selectListData: [{'0':'person00'},{'1':'person01'},{'2':'person02'},{'3':'person03'},{'4':'person04'}],
        selectListData: ['person00', 'person01', 'person02', 'person03', 'person04']
      }
    },
    methods: {
      submitCreate: function () {
      },
      createPerson: function () {
        this.people.push(this.newPerson)
        // 添加完newPerson对象后，重置newPerson对象
        this.newPerson = {
          name: '',
          money: 0.00,
          age: 0,
          sex: 0,
          birthDay: ''
        }
        // console.log(this.newPerson)
      },
      select: function () {
        console.log(this.selectArr)
      },
      search: function () {
        this.$http({
          method: 'jsonp',
          url: 'http://127.0.0.1:8088/consumner/vueJs/search'
        }).then(function (data) {
          console.log(data.body.results)
          this.people = data.body.results
        }, function (data) {

        })
      }
    },
    filters: {
    }
  }
</script>

<style>
  fieldset {
    border: 1px solid #BCBCBC;
    padding: 15px;
  }

  input {
    outline: none
  }

  input[type=text],
  .form-group > ul {
    border: 1px solid #ccc;
    padding: .5rem .3rem;
  }

  input[type=text]:focus {
    border-color: #42b983;
  }

  button {
    outline: none;
    padding: 5px 8px;
    color: #fff;
    border: 1px solid #BCBCBC;
    border-radius: 3px;
    background-color: #009A61;
    cursor: pointer;
  }
  button:hover{
    opacity: 0.8;
  }

  #app {
    margin: 0 auto;
    max-width: 640px
  }

  .form-group {
    margin: 10px;
  }

  .form-group > label {
    display: inline-block;
    width: 6.5rem;
    text-align: right;
  }

  .form-group > input,
  .form-group > select,
  .form-group > ul {
    display: inline-block;
    height: 2.5rem;
    line-height: 2.5rem;
  }
</style>
