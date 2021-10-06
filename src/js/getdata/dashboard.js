export default class DashBoardItem {
	static PERIODS = {
		daily : 'day',
		weeklyv : 'week',
		monthly : 'month'
	}
	constructor(data, container = '.dashboard_content', view = 'weekly') {
		this.data = data;
		this.container = document.querySelector(container);
		this.view = view;
		this._cretateMarcup();
	}
	_cretateMarcup() {
		const {title, timeframes} = this.data;
		const id = title.toLowerCase().replace(/ /g, '-');
		const {current, previous } = timeframes[this.view.toLowerCase()];
		this.container.insertAdjacentHTML('beforeend', `
			<div class="dashboard__item dashboard__item--${id}">
			<div class="tracing-card">
				<header class="tracing-card__header">
					<h4 class="trecing-card__title">${title}</h4>
					<img src="./img/icon-ellipsis.svg" class="tracing-card__menu" alt="menu">
				</header>
				<div class="tracing-card__body">
					<div class="tracing-card__time">${current}hrs</div>
					<div class="tracing-card__prev-period">
					Last ${DashBoardItem.PERIODS[this.view]} - ${previous}hrs
					
					</div>
				</div>
			</div>
		</div>
		`);
		this.time = document.querySelector(`.dashboard__item--${id} .tracing-card__time`);
		this.prev = document.querySelector(`.dashboard__item--${id} .tracing-card__prev-period`);
	};
	changeView(view){
		this.view = view.toLowerCase();
		const {current, previous } = this.data.timeframes[this.view.toLowerCase()];
		this.time.innerText = `${current}hrs`;
		this.prev.innerText = `Last ${DashBoardItem.PERIODS[this.view]} - ${previous} hrs`;
	}
}