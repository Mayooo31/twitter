export function colorWithOpacity(hexColor: string) {
  // Convert the hex color to RGB format
  var r = parseInt(hexColor.substring(0, 2), 16);
  var g = parseInt(hexColor.substring(2, 4), 16);
  var b = parseInt(hexColor.substring(4, 6), 16);

  // Return the color with 80% opacity in RGBA format
  return "rgba(" + r + ", " + g + ", " + b + ", 0.8)";
}
