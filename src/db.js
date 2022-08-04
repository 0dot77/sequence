export const popUpSize = {
  x: 500,
  y: 500,
};
export const windowScreenSize = {
  popUpX: document.body.offsetWidth / 2 - popUpSize.x / 2,
  popUpY: document.body.offsetWidth / 2 - popUpSize.y / 2,
};

export const windowPopUpSize = `width=${popUpSize.x}px, height=${popUpSize.y}px, left=${windowScreenSize.popUpX}, top=+${windowScreenSize.popUpY}`;
