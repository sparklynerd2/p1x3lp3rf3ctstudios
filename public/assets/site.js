// Builds the account-deletion email from the request form and opens it in the
// visitor's email app. Nothing is sent to this website.
document.querySelectorAll('form.delete-form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = form.querySelector('.form-error');
    var ident = form.ident.value.trim();
    var show = function (msg, field) { err.textContent = msg; err.hidden = false; if (field) field.focus(); };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ident)) return show('Please enter a valid email address.', form.ident);
    if (!form.confirm.checked) return show('Please tick the box to confirm you understand deletion is permanent.', form.confirm);
    err.hidden = true;
    var app = form.dataset.app;
    var note = form.elements.note.value.trim();
    var lines = [
      'Please delete my ' + app + ' account and the data associated with it.',
      '',
      'App: ' + app + ' (' + form.dataset.pkg + ')',
      'Email / identifier: ' + ident,
      form.querySelector('label[for="method"]').textContent + ' ' + form.elements.method.value,
      '',
      note ? 'Notes: ' + note : null,
      note ? '' : null,
      'I understand that deletion is permanent and cannot be undone.'
    ].filter(function (l) { return l !== null; });
    var subject = 'Account deletion request - ' + app;
    window.location.href = 'mailto:' + form.dataset.email +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  });
});
