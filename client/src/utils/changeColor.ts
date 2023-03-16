export function darkenColor(color: string, amount: number) {
  // Parse the color as an RGB value
  const rgb = parseInt(color.slice(1), 16);

  // Calculate the new, darker RGB value
  const r = Math.max((rgb >> 16) - amount, 0);
  const g = Math.max(((rgb >> 8) & 0xff) - amount, 0);
  const b = Math.max((rgb & 0xff) - amount, 0);

  // Convert the new RGB value back to a hex color code
  const hex = ((r << 16) + (g << 8) + b).toString(16);
  return "#" + ("000000" + hex).slice(-6);
}
