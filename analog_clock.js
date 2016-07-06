Module.register("analog_clock", {

	defaults: {
		imageFace: '',
	},

	getScripts: function() {
		return ["moment.js"];
	},

	getStyles: function() {
		return ["styles.css"];
	},

	start: function() {
		Log.info("Starting module: " + this.name);

		this.loaded = false;
		this.updateClock();

	},

	getDom: function() {
		var wrapper = document.createElement("div");
		var clockCircle = document.createElement("div");
		clockCircle.className = "clockCircle";

		var clockFace = document.createElement("div");
		clockFace.className = "clockFace";

		var clockHour = document.createElement("div");
		clockHour.id = "clockHour";
		clockHour.className = "clockHour";
		var clockMinute = document.createElement("div");
		clockMinute.id = "clockMinute";
		clockMinute.className = "clockMinute";
		var clockSecond = document.createElement("div");
		clockSecond.id = "clockSecond";
		clockSecond.className = "clockSecond";

		clockFace.appendChild(clockHour);
		clockFace.appendChild(clockMinute);
		clockFace.appendChild(clockSecond);

		clockCircle.appendChild(clockFace);

		wrapper.appendChild(clockCircle);

		this.loaded = true;

		return wrapper;
	},

	updateClock: function() {
		var now = moment(),
			second = now.seconds() * 6;
			minute = now.minute() * 6 + second / 60,
			hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

		if (this.loaded) {
			document.getElementById("clockHour").style.transform = "rotate(" + hour + "deg)";
			document.getElementById("clockMinute").style.transform = "rotate(" + minute + "deg)";
			document.getElementById("clockSecond").style.transform = "rotate(" + second + "deg)";
		}

		var self = this;
		setTimeout(function() {
			self.updateClock();
		}, 1000);
	},
});