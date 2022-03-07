const accentPreset = {};

accentPreset.get = () => {
  return [
    { name: 'Grey', prefix: 'Super extra light', type: 'grey', hsl: { h: 0, s: 0, l: 90 } },
    { name: 'Grey', prefix: 'Extra light', type: 'grey', hsl: { h: 0, s: 0, l: 77 } },
    { name: 'Grey', prefix: 'Light', type: 'grey', hsl: { h: 0, s: 0, l: 63 } },
    { name: 'Grey', prefix: false, type: 'grey', hsl: { h: 0, s: 0, l: 50 } },
    { name: 'Grey', prefix: 'Dark', type: 'grey', hsl: { h: 0, s: 0, l: 37 } },
    { name: 'Grey', prefix: 'Extra dark', type: 'grey', hsl: { h: 0, s: 0, l: 23 } },
    { name: 'Grey', prefix: 'Super extra dark', type: 'grey', hsl: { h: 0, s: 0, l: 10 } },
    { name: 'Red', prefix: 'Super extra light', type: 'primary', hsl: { h: 0, s: 40, l: 90 } },
    { name: 'Red', prefix: 'Extra light', type: 'primary', hsl: { h: 0, s: 60, l: 77 } },
    { name: 'Red', prefix: 'Light', type: 'primary', hsl: { h: 0, s: 80, l: 63 } },
    { name: 'Red', prefix: false, type: 'primary', hsl: { h: 0, s: 100, l: 50 } },
    { name: 'Red', prefix: 'Dark', type: 'primary', hsl: { h: 0, s: 80, l: 37 } },
    { name: 'Red', prefix: 'Extra dark', type: 'primary', hsl: { h: 0, s: 60, l: 23 } },
    { name: 'Red', prefix: 'Super extra dark', type: 'primary', hsl: { h: 0, s: 40, l: 10 } },
    { name: 'Orange', prefix: 'Super extra light', type: 'secondary', hsl: { h: 30, s: 40, l: 90 } },
    { name: 'Orange', prefix: 'Extra light', type: 'secondary', hsl: { h: 30, s: 60, l: 77 } },
    { name: 'Orange', prefix: 'Light', type: 'secondary', hsl: { h: 30, s: 80, l: 63 } },
    { name: 'Orange', prefix: false, type: 'secondary', hsl: { h: 30, s: 100, l: 50 } },
    { name: 'Orange', prefix: 'Dark', type: 'secondary', hsl: { h: 30, s: 80, l: 37 } },
    { name: 'Orange', prefix: 'Extra dark', type: 'secondary', hsl: { h: 30, s: 60, l: 23 } },
    { name: 'Orange', prefix: 'Super extra dark', type: 'secondary', hsl: { h: 30, s: 40, l: 10 } },
    { name: 'Yellow', prefix: 'Super extra light', type: 'primary', hsl: { h: 60, s: 40, l: 90 } },
    { name: 'Yellow', prefix: 'Extra light', type: 'primary', hsl: { h: 60, s: 60, l: 77 } },
    { name: 'Yellow', prefix: 'Light', type: 'primary', hsl: { h: 60, s: 80, l: 63 } },
    { name: 'Yellow', prefix: false, type: 'primary', hsl: { h: 60, s: 100, l: 50 } },
    { name: 'Yellow', prefix: 'Dark', type: 'primary', hsl: { h: 60, s: 80, l: 37 } },
    { name: 'Yellow', prefix: 'Extra dark', type: 'primary', hsl: { h: 60, s: 60, l: 23 } },
    { name: 'Yellow', prefix: 'Super extra dark', type: 'primary', hsl: { h: 60, s: 40, l: 10 } },
    { name: 'Lime', prefix: 'Super extra light', type: 'secondary', hsl: { h: 90, s: 40, l: 90 } },
    { name: 'Lime', prefix: 'Extra light', type: 'secondary', hsl: { h: 90, s: 60, l: 77 } },
    { name: 'Lime', prefix: 'Light', type: 'secondary', hsl: { h: 90, s: 80, l: 63 } },
    { name: 'Lime', prefix: false, type: 'secondary', hsl: { h: 90, s: 100, l: 50 } },
    { name: 'Lime', prefix: 'Dark', type: 'secondary', hsl: { h: 90, s: 80, l: 37 } },
    { name: 'Lime', prefix: 'Extra dark', type: 'secondary', hsl: { h: 90, s: 60, l: 23 } },
    { name: 'Lime', prefix: 'Super extra dark', type: 'secondary', hsl: { h: 90, s: 40, l: 10 } },
    { name: 'Green', prefix: 'Super extra light', type: 'primary', hsl: { h: 120, s: 40, l: 90 } },
    { name: 'Green', prefix: 'Extra light', type: 'primary', hsl: { h: 120, s: 60, l: 77 } },
    { name: 'Green', prefix: 'Light', type: 'primary', hsl: { h: 120, s: 80, l: 63 } },
    { name: 'Green', prefix: false, type: 'primary', hsl: { h: 120, s: 100, l: 50 } },
    { name: 'Green', prefix: 'Dark', type: 'primary', hsl: { h: 120, s: 80, l: 37 } },
    { name: 'Green', prefix: 'Extra dark', type: 'primary', hsl: { h: 120, s: 60, l: 23 } },
    { name: 'Green', prefix: 'Super extra dark', type: 'primary', hsl: { h: 120, s: 40, l: 10 } },
    { name: 'Aqua', prefix: 'Super extra light', type: 'secondary', hsl: { h: 150, s: 40, l: 90 } },
    { name: 'Aqua', prefix: 'Extra light', type: 'secondary', hsl: { h: 150, s: 60, l: 77 } },
    { name: 'Aqua', prefix: 'Light', type: 'secondary', hsl: { h: 150, s: 80, l: 63 } },
    { name: 'Aqua', prefix: false, type: 'secondary', hsl: { h: 150, s: 100, l: 50 } },
    { name: 'Aqua', prefix: 'Dark', type: 'secondary', hsl: { h: 150, s: 80, l: 37 } },
    { name: 'Aqua', prefix: 'Extra dark', type: 'secondary', hsl: { h: 150, s: 60, l: 23 } },
    { name: 'Aqua', prefix: 'Super extra dark', type: 'secondary', hsl: { h: 150, s: 40, l: 10 } },
    { name: 'Cyan', prefix: 'Super extra light', type: 'primary', hsl: { h: 180, s: 40, l: 90 } },
    { name: 'Cyan', prefix: 'Extra light', type: 'primary', hsl: { h: 180, s: 60, l: 77 } },
    { name: 'Cyan', prefix: 'Light', type: 'primary', hsl: { h: 180, s: 80, l: 63 } },
    { name: 'Cyan', prefix: false, type: 'primary', hsl: { h: 180, s: 100, l: 50 } },
    { name: 'Cyan', prefix: 'Dark', type: 'primary', hsl: { h: 180, s: 80, l: 37 } },
    { name: 'Cyan', prefix: 'Extra dark', type: 'primary', hsl: { h: 180, s: 60, l: 23 } },
    { name: 'Cyan', prefix: 'Super extra dark', type: 'primary', hsl: { h: 180, s: 40, l: 10 } },
    { name: 'Teal', prefix: 'Super extra light', type: 'secondary', hsl: { h: 210, s: 40, l: 90 } },
    { name: 'Teal', prefix: 'Extra light', type: 'secondary', hsl: { h: 210, s: 60, l: 77 } },
    { name: 'Teal', prefix: 'Light', type: 'secondary', hsl: { h: 210, s: 80, l: 63 } },
    { name: 'Teal', prefix: false, type: 'secondary', hsl: { h: 210, s: 100, l: 50 } },
    { name: 'Teal', prefix: 'Dark', type: 'secondary', hsl: { h: 210, s: 80, l: 37 } },
    { name: 'Teal', prefix: 'Extra dark', type: 'secondary', hsl: { h: 210, s: 60, l: 23 } },
    { name: 'Teal', prefix: 'Super extra dark', type: 'secondary', hsl: { h: 210, s: 40, l: 10 } },
    { name: 'Blue', prefix: 'Super extra light', type: 'primary', hsl: { h: 240, s: 40, l: 90 } },
    { name: 'Blue', prefix: 'Extra light', type: 'primary', hsl: { h: 240, s: 60, l: 77 } },
    { name: 'Blue', prefix: 'Light', type: 'primary', hsl: { h: 240, s: 80, l: 63 } },
    { name: 'Blue', prefix: false, type: 'primary', hsl: { h: 240, s: 100, l: 50 } },
    { name: 'Blue', prefix: 'Dark', type: 'primary', hsl: { h: 240, s: 80, l: 37 } },
    { name: 'Blue', prefix: 'Extra dark', type: 'primary', hsl: { h: 240, s: 60, l: 23 } },
    { name: 'Blue', prefix: 'Super extra dark', type: 'primary', hsl: { h: 240, s: 40, l: 10 } },
    { name: 'Purple', prefix: 'Super extra light', type: 'secondary', hsl: { h: 270, s: 40, l: 90 } },
    { name: 'Purple', prefix: 'Extra light', type: 'secondary', hsl: { h: 270, s: 60, l: 77 } },
    { name: 'Purple', prefix: 'Light', type: 'secondary', hsl: { h: 270, s: 80, l: 63 } },
    { name: 'Purple', prefix: false, type: 'secondary', hsl: { h: 270, s: 100, l: 50 } },
    { name: 'Purple', prefix: 'Dark', type: 'secondary', hsl: { h: 270, s: 80, l: 37 } },
    { name: 'Purple', prefix: 'Extra dark', type: 'secondary', hsl: { h: 270, s: 60, l: 23 } },
    { name: 'Purple', prefix: 'Super extra dark', type: 'secondary', hsl: { h: 270, s: 40, l: 10 } },
    { name: 'Magenta', prefix: 'Super extra light', type: 'primary', hsl: { h: 300, s: 40, l: 90 } },
    { name: 'Magenta', prefix: 'Extra light', type: 'primary', hsl: { h: 300, s: 60, l: 77 } },
    { name: 'Magenta', prefix: 'Light', type: 'primary', hsl: { h: 300, s: 80, l: 63 } },
    { name: 'Magenta', prefix: false, type: 'primary', hsl: { h: 300, s: 100, l: 50 } },
    { name: 'Magenta', prefix: 'Dark', type: 'primary', hsl: { h: 300, s: 80, l: 37 } },
    { name: 'Magenta', prefix: 'Extra dark', type: 'primary', hsl: { h: 300, s: 60, l: 23 } },
    { name: 'Magenta', prefix: 'Super extra dark', type: 'primary', hsl: { h: 300, s: 40, l: 10 } },
    { name: 'Fuchsia', prefix: 'Super extra light', type: 'secondary', hsl: { h: 330, s: 40, l: 90 } },
    { name: 'Fuchsia', prefix: 'Extra light', type: 'secondary', hsl: { h: 330, s: 60, l: 77 } },
    { name: 'Fuchsia', prefix: 'Light', type: 'secondary', hsl: { h: 330, s: 80, l: 63 } },
    { name: 'Fuchsia', prefix: false, type: 'secondary', hsl: { h: 330, s: 100, l: 50 } },
    { name: 'Fuchsia', prefix: 'Dark', type: 'secondary', hsl: { h: 330, s: 80, l: 37 } },
    { name: 'Fuchsia', prefix: 'Extra dark', type: 'secondary', hsl: { h: 330, s: 60, l: 23 } },
    { name: 'Fuchsia', prefix: 'Super extra dark', type: 'secondary', hsl: { h: 330, s: 40, l: 10 } },
  ];
};

export { accentPreset };
