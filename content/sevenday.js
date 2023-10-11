/*\
title: sevenday.js
module-type: echarts-component
type: text/application
description: seven
\*/

// TODO: add click to show tiddlers https://github.com/tiddly-gittly/tw-echarts/blob/e8322a1eeebd224031de44432b7ec0ca4be6e92f/src/echarts/addons/oflg/CalendarHeatmap/CalendarHeatmap.js

const getData = (date) => $tw.wiki.filterTiddlers(`[sameday[${date}]!is[system]!has[draft.of]]`).length

function getSevenDaysBefore(dateString) {
	let currentDate;

	if (!dateString) {
		// 如果没有传入日期参数，默认使用当前日期
		currentDate = new Date();
	} else {
		// 解析传入的日期字符串
		const year = parseInt(dateString.substr(0, 4));
		const month = parseInt(dateString.substr(4, 2)) - 1; // 月份从0开始，需要减1
		const day = parseInt(dateString.substr(6, 2));

		currentDate = new Date(year, month, day);
	}

	const sevenDays = [];

	for (let i = 0; i < 7; i++) {
		// 获取当前日期的年、月、日
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1; // 月份从0开始，需要加1
		const day = currentDate.getDate();

		// 将年、月、日格式化成字符串，并添加到数组
		const dateString = `${year}${month < 10 ? '0' : ''}${month}${day < 10 ? '0' : ''}${day}`;
		sevenDays.unshift(dateString); // 使用unshift方法将日期添加到数组头部

		// 将当前日期减一天，以便生成前一天的日期
		currentDate.setDate(currentDate.getDate() - 1);
	}

	return sevenDays;
}


// function shouldUpdate(state, changedTiddlers, changedAttributes) { return true; }

function onUpdate(echartsInstance, _state, addonAttributes) {

	const data = []
	const sevendays = getSevenDaysBefore(addonAttributes.date)
	sevendays.forEach(date => data.push(getData(date)))

	const option = {
		title: {
			text: '最近七天内文章数量',
			subtext: '',
			left: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: function (params) {
				return params.value ? `今日文章数量: ${params.value}` : '今日没有新的文章'
			}
		},
		// color: [''],
		xAxis: {
			type: 'category',
			data: sevendays,
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data,
				type: 'line',
				emphasis: {
					itemStyle: {
						scale: 1.25,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				smooth: true
			}
		]
	};

	echartsInstance.setOption(option)
}

// function onMount() {}
// function onUnmount(state) { }

module.exports = {
	onUpdate
}