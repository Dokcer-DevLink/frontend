export const getTextColor = (variant: string) => {
  return `on${variant.charAt(0).toUpperCase() + variant.substring(1)}`;
};

export const getHoveredColor = (variant: string) => {
  return `hovered${variant.charAt(0).toUpperCase() + variant.substring(1)}`;
};
