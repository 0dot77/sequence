export const popUpSize = {
  x: 500,
  y: 500,
};
export const windowScreenSize = {
  popUpX: document.body.offsetWidth / 2 - popUpSize.x / 2,
  popUpY: document.body.offsetWidth / 2 - popUpSize.y / 2,
};

export const windowPopUpSize = `width=${popUpSize.x}px, height=${popUpSize.y}px, left=${windowScreenSize.popUpX}, top=+${windowScreenSize.popUpY}`;

export const firstImgs = [
  'assets/first/1.jpeg',
  'assets/first/2.jpeg',
  'assets/first/3.jpeg',
  'assets/first/4.jpeg',
  'assets/first/5.jpeg',
  'assets/first/6.jpeg',
];
