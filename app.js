// 'words.json'
var dataUrl = 'faker/generated-data-30.json'

let freeWifi = Vue.filter('have-free-wifi', function (property) {
  return property.bonus.hasFreeWifi
})

let freeBreakfast = Vue.filter('have-free-breakfast', function (property) {
  return property.bonus.hasFreeBreakfast
})

let tv = Vue.filter('have-tv', function (property) {
  return property.bonus.hasTv
})

let bar = Vue.filter('have-bar', function (property) {
  return property.bonus.hasBar
})

Vue.component('property-item', {
  props: ['property'],
  template: `
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image">
        <div class="header">
          {{ property.name }}
        </div>
        <div class="meta">
          {{ property.address.street }} - {{ property.distance }}km
          <span v-if="property.bonus.hasFreeWifi"> - <i class="wifi icon"></i></span>
          <span v-if="property.bonus.hasFreeBreakfast"> - <i class="coffee icon"></i></span>
          <span v-if="property.bonus.hasTv"> - <i class="desktop icon"></i></span>
          <span v-if="property.bonus.hasBar"> - <i class="bar icon"></i></span>
        </div>
        <div class="description">
         {{ property.description }}
        </div>
      </div>
      <div class="ui bottom attached button">
        {{ property.price }}
        <i class="euro icon"></i>
      </div>
    </div>`
})

Vue.component('filter-button', {
  props: ['filterdata'],
  template: `
    <button class="ui icon=button" v-on:click='filterProperties'>
      <i class="icon" v-bind:class="this.filterdata.icon"></i>
    </button>`,
  methods: {
    filterProperties: function () {
      this.$emit('filterpropertiesby', this.filterdata.filtername)
    }
  }
})

new Vue({
  el: '#app',
  data: {
    properties: [],
    activeFilters: [],
    availableFilters: [
      {
        'filtername': 'have-free-wifi',
        'icon': 'wifi'
      }, {
        'filtername': 'have-free-breakfast',
        'icon': 'coffee'
      }, {
        'filtername': 'have-tv',
        'icon': 'desktop'
      }, {
        'filtername': 'have-bar',
        'icon': 'bar'
      }
    ]
  },
  methods: {
    showedProperties: function (properties) {
      var showedProperties = this.properties;
      for (let activeFilter in this.activeFilters) {
        showedProperties = showedProperties.filter(
          Vue.filter(this.activeFilters[activeFilter])
        )
      }

      return showedProperties
    },
    addnewfilter: function (newFilter) {
      let newFilterName = newFilter.filtername
      let index = this.activeFilters.indexOf(newFilterName)

      if (index > -1) {
        this.activeFilters.splice(index, 1)
      } else {
        this.activeFilters.push(newFilterName)
      }
    }
  },
  computed: {

  },
  created: function () {
    this.$http.get(dataUrl).then((response) => {
      response.json().then((data) => {
        this.properties = Object.values(data)
      })
    })
  }
})
