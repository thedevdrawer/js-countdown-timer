// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
	selector: "#clock1",
	targetDate: new Date("September, 21 2022 18:00:00"),
});

// setup timer with date set in the future
const timer2 = new CountdownTimer({
	selector: "#clock2",
	targetDate: new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000),
	backgroundColor: "rgba(0,0,0,.15)",
	foregroundColor: "rgba(0,0,0,.50)",
});

// setup timer with random date set in the future
const startDate = new Date(2023, 0, 1);
const currentDate = new Date().getTime();
const timer3 = new CountdownTimer({
	selector: "#clock3",
	targetDate: new Date(
		startDate.getTime() + Math.random() * (currentDate - startDate.getTime())
	),
	backgroundColor: "#d4af37",
	foregroundColor: null,
});

timer1.startTimer();
timer2.startTimer();
timer3.startTimer();
