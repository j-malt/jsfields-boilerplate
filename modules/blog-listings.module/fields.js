const fs = require("fs");
const { extendObj, standardNaming } = require("../../js/util");

module.exports = () => {
  const booleanT = {
    type: "boolean",
    display: "checkbox",
    default: true,
  };
  const booleanF = extendObj(booleanT, { default: false });
  const subheading = standardNaming(
    "subheading",
    { type: "text", required: true },
    false
  );
  const stdNamedFields = [
    [
      "layout style",
      {
        type: "choice",
        choices: [
          ["list", "List"],
          ["card", "Card"],
        ],
        display: "select",
        required: true,
        default: "card",
      },
      false,
    ],
    ["featured image", booleanT],
    ["tags", booleanF],
    ["title", booleanT],
    ["author", booleanF],
    ["publish date", booleanF],
    ["description", booleanT],
    ["button", booleanF],
    [
      "button text",
      {
        type: "text",
        required: true,
        visibility: {
          controlling_field: "button",
          controlling_value_regex: true,
          operator: "EQUAL",
        },
        default: "Read More",
      },
      false,
    ],
    [
      "blog author listing",
      {
        type: "group",
        help_text:
          "These fields allow you to change the labels on your author listing pages.",
        children: [extendObj(subheading, { default: "Posts by" })],
      },
    ],
    [
      "blog tag listing",
      {
        type: "group",
        help_text:
          "These fields allow you to change the labels on your tag listing pages.",
        children: [extendObj(subheading, { default: "Posts about" })],
      },
    ],
  ];
  const fields = stdNamedFields.map((params) => standardNaming(...params));
  const styles = JSON.parse(
    fs.readFileSync("../styles/blog-listings.styles.json")
  );
  return [fields, styles];
};
