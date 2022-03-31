/*------------------ Button switcher ------------------*/
const clickedButton = document.querySelectorAll('.switcher__item');
const tabsItem = document.querySelectorAll('.pricing');
const contentTitle = document.querySelectorAll('.content-pricing');

if (clickedButton.length > 0) {
	clickedButton.forEach(function(item) {
		item.addEventListener('click', function() {
			let currentButton = item;

			clickedButton.forEach(function(item) {
				item.classList.remove('_active');
			});
	
			let currentClass = currentButton.getAttribute('data-tab');
			let currentTitle = currentButton.getAttribute('data-da');
			let currentTab = document.querySelector(currentClass);
			let actualTitle = document.querySelector(currentTitle);
			
			if (!currentButton.classList.contains('_active')) {
				contentTitle.forEach(function(item) {
					item.classList.remove('_active');
				});
	
				tabsItem.forEach(function(item) {
					item.classList.remove('_active');
				});
		
				currentButton.classList.add('_active');
				actualTitle.classList.add('_active');
				currentTab.classList.add('_active');
			}
		});
	});
}
document.querySelector('.switcher__item').click();
