
function orderNow() {
  const phone = '9649967473';
  const message = 'Hi! I want to place an order from your website.';
  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
