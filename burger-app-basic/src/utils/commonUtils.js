const getComponentDisplayName = (DisplayComponent) => {
  return DisplayComponent.name || DisplayComponent.displayName || "Component";
};

export { getComponentDisplayName };
