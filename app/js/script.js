$(function() {

	function selectItem(item, word) {
		var stringItem = String(item);
		$(item).html($(item).html().replace(word, '<span class="wrapped-item">' + word + '</span>'));
	}

	selectItem('.portfolio p', 'consequat ut sed sem');
})