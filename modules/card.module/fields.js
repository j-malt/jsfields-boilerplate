const fs = require("fs");
const { standardNaming, addChildren } = require("../../js/util");

module.exports = () => {
  const defaultString =
    "<h3>This is a title</h3><p>Contextual advertising can be profitable. It can either pay for your hosting and maintenance costs for you website or it can pay for a lot more.</p>";
  const cardDefault = Array(3).fill({
    image: { loading: "lazy" },
    text: defaultString,
  });

  const image = standardNaming(
    "image",
    {
      type: "image",
      responsive: true,
      resizable: true,
      show_loading: true,
      default: { loading: "lazy" },
    },
    false
  );

  const content = {
    label: "Content",
    name: "text",
    type: "richtext",
    enabled_features: [
      "advanced_emphasis",
      "alignment",
      "block",
      "emoji",
      "font_family",
      "font_size",
      "lists",
      "standard_emphasis",
    ],
    default: defaultString,
  };

  const card = standardNaming(
    "card",
    {
      type: "group",
      occurrence: { default: 3, min: 1, sorting_label_field: "card.title" },
      children: [image, content],
      default: cardDefault,
    },
    false
  );

  const styles = JSON.parse(fs.readFileSync("../styles/card.styles.json"));
  return [card, styles];
};
