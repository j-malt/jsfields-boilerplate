const extendObj = (...objs) => {
  return Object.assign({}, ...objs);
};

/**
 * Creates a label (the name with first letter capitalized), and
 * the name (all lowercase with underscores in place of spaces.) If includeId is true then
 * adds a param called id with same value as the name.
 * @param {string} label - A label for the field.
 * @param {Object} field - The field object to add names to.
 * @param {boolean} includeId - (Optional) If false, excludes the id from the returned value.
 */
const standardNaming = (label, field, includeId = true) => {
  const name = label.replaceAll(" ", "_").toLowerCase();
  const naming = {
    label: label.charAt(0).toUpperCase() + label.slice(1),
    name,
  };
  return extendObj(naming, includeId ? { id: name } : {}, field);
};

/**
 * Adds children to field children param, or creates if it doesn't exist.
 * @param {Object} field
 * @param {Object} childrenObj
 */
const addChildren = (field, ...childrenObj) => {
  if ("children" in field) {
    field["children"].push(...childrenObj);
  } else {
    field["children"] = [...childrenObj];
  }
  return field;
};

module.exports = { extendObj, standardNaming, addChildren };
