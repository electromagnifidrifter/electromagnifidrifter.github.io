var groktranslate = {
	translate: function(formData) {
		$.ajax({
			url: "/translator/online_translation/reverso/spanish/english/",
			data: formData,
			success: function(data) {
				console.log(data);
			}
		});
	}
};

