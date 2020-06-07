Vue.component("app", {
	template: `
    <div id="app">
    <div class="section1">
        <button id="theme" class="section1--button" @click="generateTheme">Click to generate a theme</button>
        <p id="result" class="section1--result"></p>
    </div>
    <div class="section2">
        <button id="site" class="section2--button" @click="generateType">
            Click to generate a type of site
        </button>
        <p id="resultSite" class="section2--result"></p>
    </div>
</div>
    `,
	data() {
		return {
			themeGenerator: [
				"Fleurs",
				"Immobilier",
				"Marque de t-shirt",
				"Photographie",
				"Bijoux",
				"Photographe",
				"Médecin",
				"Séries",
				"Tourisme",
				"Site de rencontre",
				"Chien",
				"Chat",
				"Écrivain",
				"Pop culture",
				"Montres",
				"Groupe de musique",
				"Chanteur",
			],
			typeOfSite: [
				"Landing page",
				"Application",
				"Site vitrine",
				"Blog",
				"Site informatif",
				"Jeux",
				"Site e-commerce",
				"Portfolio",
			],
		}
	},
	methods: {
		generateTheme() {
			this.themeGenerator.forEach((e) => {
				let result = Math.floor(Math.random() * this.themeGenerator.length)
				document.getElementById("result").innerHTML = this.themeGenerator[result]
			})
		},

		generateType() {
			this.typeOfSite.forEach((e) => {
				let result = Math.floor(Math.random() * this.typeOfSite.length)
				document.getElementById("resultSite").innerHTML = this.typeOfSite[result]
			})
		},
	},
})

new Vue({ el: "#components-demo" })
