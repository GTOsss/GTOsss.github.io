var groups;
document.addEventListener('DOMContentLoaded', Ready);

function Ready(){
	VK.init(function() { 
  		console.log('vk API initialization succeeded.');
		groups = VK.groups.get("140286227", true, 0, 0, 0, 100, 5.62);
		console.log('callMethod groups.get');
		console.log(groups);
	}, function() { 
		console.error('Error vk API initialization.');
	}, '5.62'); 
}