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
