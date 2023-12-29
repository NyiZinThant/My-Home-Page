export async function fetchIcon(url) {
  const res = await fetch('https://favicongrabber.com/api/grab/' + url);
  const icons = await res.json();
  return icons.filter(
    (icon) => icon.src.includes('.svg') || icon.sizes === '512x512'
  )[0];
  fetch('https://favicongrabber.com/api/grab/github.com')
    .then((response) => response.json())
    .then(({ icons }) =>
      icons.filter(
        (icon) => icon.src.includes('.svg') || icon.sizes === '512x512'
      )
    )
    .then((icons) => icons.forEach((icon) => console.log(icon)));
}
