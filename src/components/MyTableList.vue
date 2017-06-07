<template>
  <div>
    <table>
      <thead>
      <tr>
        <th><input type="checkbox" v-on:click="checkall">
        </th>
        <th>Name</th>
        <th>money</th>
        <th>Age</th>
        <th>Sex</th>
        <th>isMarried</th>
        <th>BirthDay</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(person ,index ) in people">
        <td>
          <!-- 						<v-mycheckbox v-bind:id="person.id" v-bind:checked="person.married"></v-myCheckbox> -->
          <input type="checkbox" v-bind:id="person.id" v-bind:value="person" v-model="selectArr">
        </td>
        <td>{{ person.name }}</td>
        <td>{{ person.money }}</td>
        <td>{{ person.age }}</td>
        <td v-if="person.sex == 0">男</td>
        <td v-if="person.sex == 1">女</td>
        <td>
          <input type="checkbox" name="personid" v-bind:id="person.id" v-bind:checked="person.married">
        </td>
        <td>{{ person.birthDay }}</td>
        <td :class="'text-center'">
          <button v-on:click="deletePerson(person)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Goto',
    data: function () {
      return {
        newPerson: {
          name: '',
          age: 0,
          sex: 0,
          birthDay: ''
        },
        people: [],
        selectArr: []
      }
    },
    props: [
      'tableurl'
    ],
    created: function () {
      this.$http({
        method: 'jsonp',
        url: this.tableurl
      }).then(function (data) {
        console.log(data.body.results)
        this.people = data.body.results
      }, function (data) {
        alert('url无效，造数据')
        // 造数据
        let results = []
        let newPerson = {}
        for (let i = 0; i < 5; i++) {
          newPerson.id = 'person000' + i
          newPerson.name = 'person000' + i
          newPerson.birthDay = ''
          newPerson.age = i
          newPerson.money = (i * 1000000.00)
          newPerson.sex = (i % 2)
          newPerson.isMarried = (i % 2 === 0)
          results.push(newPerson)
        }
        this.people = results
      })
    },
    methods: {
      deletePerson: function (person) {
        console.log(person)
        // 删一个数组元素
        var index = this.people.indexOf(person)
        this.people.splice(index, 1)
      },
      print: function (v) {
        console.log(v)
      },
      checkall: function () {
        // alert("checkAll")
        var that = this
//        console.log(event.currentTarget)
        if (!event.currentTarget.checked) {
          that.selectArr = []
        } else {
          // 实现全选
          that.selectArr = []
//           console.log(this.people)
          this.people.forEach(function (item, i) {
            that.selectArr.push(item)
          })
        }
      }
    },
    filters: {
      customerName: function (value) {
        if (value.length === 1) {
          return 'personNO' + value
        }
      },
      moneyFormate: function (value) {
//        return accounting.formatMoney(value)
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-size: 12px;
    font-family: Ubuntu, simHei, sans-serif;
    font-weight: 400
  }

  body {
    font-size: 1rem
  }

  table,
  td,
  th {
    border-collapse: collapse;
    border-spacing: 0
  }

  table {
    width: 100%
  }

  td,
  th {
    border: 1px solid #bcbcbc;
    padding: 5px 10px
  }

  th {
    background: #42b983;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    cursor: pointer
  }

  tr:nth-of-type(odd) {
    background: #fff
  }

  tr:nth-of-type(even) {
    background: #eee
  }

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

  .text-center{
    text-align: center;
  }

  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 21px 0;
    border-radius: 3px;
  }

  .pagination > li {
    display: inline;
  }

  .pagination > li > a {
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.5;
    text-decoration: none;
    color: #009a61;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;
    list-style: none;
  }

  .pagination > li > a:hover {
    background-color: #eee;
  }

  .pagination .active {
    color: #fff;
    background-color: #009a61;
    border-left: none;
    border-right: none;
  }

  .pagination .active:hover {
    background: #009a61;
    cursor: default;
  }

  .pagination > li:first-child > a .p {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  .pagination > li:last-child > a {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
</style>
