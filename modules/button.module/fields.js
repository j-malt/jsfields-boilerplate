const { standardNaming, addChildren } = require("../../js/util");

const buildStyles = () => {
  const defaultGroup = (name) => standardNaming(name, { type: "group" }, false);
  const defaultStyle = (type) => standardNaming(type, { type }, false);

  const styles = [
    [defaultGroup("text"), defaultStyle("font")],
    [defaultGroup("background"), defaultStyle("color")],
    [defaultGroup("border"), defaultStyle("border")],
    [
      defaultGroup("corner"),
      {
        label: "Radius",
        name: "radius",
        type: "number",
        display: "text",
        max: 100,
        step: 1,
        suffix: "px",
      },
    ],
    [defaultGroup("spacing"), defaultStyle("spacing")],
    [
      defaultGroup("alignment"),
      {
        ...defaultStyle("alignment"),
        alignment_direction: "HORIZONTAL",
      },
    ],
  ];

  return {
    label: "Styles",
    name: "styles",
    type: "group",
    tab: "STYLE",
    children: styles.map((style) => addChildren(...style)),
  };
};

module.exports = () => {
  return [
    {
      label: "Button link",
      name: "link",
      type: "link",
      supported_types: ["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS"],
      default: {
        url: {
          href: "",
          type: "EXTERNAL",
        },
        no_follow: false,
        open_in_new_tab: false,
      },
    },
    standardNaming(
      "button text",
      {
        type: "text",
        required: true,
        default: "Add a button link here",
      },
      false
    ),
    buildStyles(),
  ];
};
