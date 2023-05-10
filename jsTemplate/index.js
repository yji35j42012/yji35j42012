// 透過 XMLHttpRequest 載入模板
const xhr = new XMLHttpRequest();
xhr.open("GET", "./template.html", true);
xhr.onload = function() {
	if (xhr.status === 200) {
		// 取得模板元素
		const templateElement = document.getElementById("template");
		console.log('templateElement',templateElement);
		
		// 將模板內容設定為載入的模板
		templateElement.innerHTML = xhr.responseText;
		// 取得模板字串
		const templateString = templateElement.innerHTML;
		// 使用 Handlebars.js 編譯模板字串
		const template = Handlebars.compile(templateString);
		// 渲染 HTML
		const renderedHtml = template({ title: "Hello", content: "World!" });
		// 將渲染後的 HTML 插入到網頁中
		const container = document.getElementById("template-container");
		container.innerHTML = renderedHtml;
	}
};
xhr.send();
