$(function () {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formПовідомленняs = $('.ajax-response');

	// Set up an event listener for the contact form.
	$(form).submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
			.done(function (response) {
				// Make sure that the formПовідомленняs div has the 'success' class.
				$(formПовідомленняs).removeClass('error');
				$(formПовідомленняs).addClass('success');

				// Set the message text.
				$(formПовідомленняs).text(response);

				// Clear the form.
				$('#contact-form input,#contact-form textarea').val('');
			})
			.fail(function (data) {
				// Make sure that the formПовідомленняs div has the 'error' class.
				$(formПовідомленняs).removeClass('success');
				$(formПовідомленняs).addClass('error');

				// Set the message text.
				if (data.responseText !== '') {
					$(formПовідомленняs).text(data.responseText);
				} else {
					$(formПовідомленняs).text('Упс! Сталася помилка і Ваше повідомлення не було надіслано.');
				}
			});
	});

});
