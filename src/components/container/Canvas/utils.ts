export const downloadImage = () => {
  const $canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const dataURL = $canvas.toDataURL();

  const $a = document.createElement("a");
  $a.setAttribute("href", dataURL);
  $a.setAttribute("download", "download");

  $canvas.appendChild($a);
  $a.click();
  $canvas.removeChild($a);
};

export const shareCurrentPage = () => {
  window.navigator.share({
    url: window.location.href,
    text: "직접 그린 그림을 공유할 수 있어요 🎨",
    title: "paint app"
  });
};
