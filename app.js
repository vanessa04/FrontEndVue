
new Vue({
  el: '#app',
  data: {
    Artis: []
  },
  methods: {
  	addArt() {
  		fetch('http://10.225.100.18:8000/articles')
		.then(r => r.json())
		.then(json => {
  		this.Artis = json
	})
  	}
  }
})
