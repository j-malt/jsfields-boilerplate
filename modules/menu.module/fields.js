const { standardNaming, addChildren } = require("../../js/util");

const buildStyles = () => {
  const text = standardNaming(
    "text",
    {
      type: "group",
      children: [
        standardNaming(
          "color",
          {
            type: "color",
            visibility: { hidden_subfields: { opacity: true } },
          },
          false
        ),
      ],
    },
    false
  );

  const background = addChildren(
    standardNaming("background", { type: "group" }, false),
    standardNaming("color", { type: "color" }, false)
  );
  const border = addChildren(
    standardNaming("border", { type: "group" }, false),
    standardNaming("border", { type: "border" }, false)
  );

  const dropdowns = addChildren(
    standardNaming("drop downs", { type: "group" }, false),
    text,
    background,
    border
  );

  return {
    label: "Styles",
    name: "styles",
    type: "group",
    tab: "STYLE",
    children: [text, dropdowns],
  };
};

module.exports = () => {
  const menu = standardNaming(
    "menu",
    { type: "menu", default: "default" },
    false
  );
  const maxLevels = standardNaming(
    "max levels",
    {
      type: "number",
      help_text:
        "Determines the number of menu tree children that can be expanded in the menu",
      display: "text",
      max: 3,
      min: 1,
      step: 1,
      required: true,
      default: 3,
    },
    false
  );
  return [menu, maxLevels, buildStyles()];
};
