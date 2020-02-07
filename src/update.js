import format from 'date-fns/format';
export default function update() {
	header.textContent = "Hello World!";
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}
