let tl = gsap.timeline({ defaults: { opacity: 0, duration: 1 } });

//* HOME PAGE
tl.from('.home', { duration: 1.3 })
	.from('nav', { y: -100, duration: 0.5, ease: 'power3.out' })
	.from('.nav-list', { x: -950, ease: 'back', duration: 1.5 })
	.from(
		'.first-header h1',
		{ scale: 0, duration: 1.8, ease: 'slow.out' },
		'-=.5'
	)
	.from('.card:nth-child(1)', { rotate: 360, x: 1200 }, '-=1.2')
	.from('.card:nth-child(3)', { rotate: 360, x: -1200 }, '-=1.2')
	.from('.card:nth-child(2)', { y: 100 }, '-=1.2')
	.from('.card:nth-child(2) p', { duration: 2.5 }, '-=1.5');

//* Cards
gsap.set('.card', {
	transformStyle: 'preserve-3d',
	transformPerspective: 1000,
});
gsap.set('.card-flip', {
	transformStyle: 'preserve-3d',
	transformOrigin: '50% 50%',
});
gsap.set('.card-back', {
	rotationY: 180,
	// rotationZ: 180,
});

// gsap.utils.toArray('.card').forEach((c) => {
// 	c.addEventListener('click', (e) => {
// 	});
// });

const card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
	let flip = card[i];

	flip.addEventListener('click', () => {
		tl.to(flip, { rotationY: '+=180', opacity: 1 });

		console.log('clicked');
	});
}
