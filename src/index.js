Vue.component("app", {
	template: `
    
    <div id="app">
    <h1>{{ name }}</h1>
    <div id="containerSections">
    <div class="section1 sections">
        <button id="theme" class="button" @click="generateTheme">Click to generate a theme</button>
        <p id="result" class="result"></p>
    </div>
    <div class="section2 sections">
        <button id="site" class="button" @click="generateType">
            Click to generate a type of site
        </button>
        <p id="resultSite" class="result"></p>
    </div>
    </div>
 
</div>
    `,
	data() {
		return {
			name: "Generateur theme challenge",
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
