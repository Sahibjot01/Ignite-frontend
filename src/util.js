export const imageResizeURL = (imageLink, size) => {
  const newURL = imageLink.match(/media\/screenshots/)
    ? imageLink.replace(
        "/media/screenshots",
        `/media/resize/${size}/-/screenshots/`
      )
    : imageLink.replace("/media/games", `/media/resize/${size}/-/games/`);
  return newURL;
};
