const fs = require("fs");
const { standardNaming } = require("../../js/util");

module.exports = () => {
  const defaultField = (controlling_field, defaultVal) => {
    return {
      type: "text",
      visibility: {
        controlling_field,
        controlling_value_regex: "true",
        operator: "EQUAL",
      },
      default: defaultVal,
    };
  };

  const stdNamedFields = [
    ["show previous and next links", { type: "boolean", default: true }],
    [
      "previous label",
      defaultField("show_previous_and_next_links", "Prev"),
      false,
    ],
    ["next label", defaultField("show_previous_and_next_links", "Next"), false],
    ["show first and last links", { type: "boolean", default: true }],
    ["first label", defaultField("show_first_and_last_links", "First"), false],
    ["last label", defaultField("show_first_and_last_links", "Last"), false],
  ];
  const fields = stdNamedFields.map((params) => standardNaming(...params));
  const styles = JSON.parse(
    fs.readFileSync("../styles/blog-pagination.styles.json")
  );
  return [fields, styles];
};
