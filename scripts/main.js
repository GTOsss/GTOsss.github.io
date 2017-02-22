var groups;
document.addEventListener('DOMContentLoaded', Ready);

function Ready(){
	VK.init(function() { 
  		console.log('vk API initialization succeeded.');
		groups = VK.('groups.get', {
			'user_id': 140286227,
			'extended': true,
			'filter': 0,
			'fields': 0,
			'offset': 0,
			'count': 100,
			'version': 5.62
		});
		console.log('callMethod groups.get');
		console.log(groups);
	}, function() { 
		console.error('Error vk API initialization.');
	}, '5.62'); 
}