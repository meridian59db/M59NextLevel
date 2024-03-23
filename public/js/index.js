import { schools } from "./schools.js";

/**
 * Create a checkbox for each school.
 *
 * @return {Array} box - Array of checkbox elements
 * @return {Array} box.label - Array of label elements
 * @return {Array} box.input - Array of input elements
 * @return {String} box.label.textContent - Name of the school
 * @return {String} box.label.htmlFor - Name of the school
 * @return {String} box.input.type - Type of the input element
 * @return {String} box.input.name - Name of the input element
 * @return {String} box.input.class - Class of the input element
 */
const createCheckBoxs = () => {
  const box = schools.map((school) => {
    const label = document.createElement("label");
    label.textContent = school.name;
    label.htmlFor = school.name;
    label.className = school.name;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = school.name;
    input.class = "school";
    input.id = school.name + "-checkbox";

    return [label, input];
  });
  return box;
};

const createSchools = (name) => {
  const school = document.createElement("div");
  school.className = "schools-box";
  school.id = `${name}-box`;
  const form = formToSchools(name);
  school.append(form);
  return school;
};

// create a form with 3 inputs type number
const formToSchools = (name) => {
  const form = document.createElement("form");
  form.className = "form";
  form.id = "form";

  const title = document.createElement("h2");
  title.textContent = name;
  form.append(title);

  const level = document.createElement("select");
  const levels = [1, 2, 3, 4, 5, 6];
  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.textContent = "Select a level";
  level.append(optionDefault);
  for (let i = 0; i < levels.length; i++) {
    const option = document.createElement("option");
    option.value = levels[i];
    option.textContent = levels[i];
    level.append(option);
  }
  form.append(level);

  for (let i = 0; i < 3; i++) {
    const label = document.createElement("label");
    label.textContent = `Skill ${i + 1}`;
    label.htmlFor = `skill-${i}`;
    const input = document.createElement("input");
    input.type = "number";
    form.append(label, input);
  }
  return form;
};

document.addEventListener("DOMContentLoaded", () => {
  const schoolsNames = document.querySelector("#schools-names");
  schoolsNames.append(...createCheckBoxs().flat());
});

document.addEventListener("change", (e) => {
  if (e.target.type === "checkbox" && e.target.checked) {
    const name = e.target.name;
    const sc = createSchools(name);
    const school = document.querySelector("#schools");
    console.log(sc);
    school.append(sc);
  } else if (e.target.type === "checkbox" && !e.target.checked) {
    const name = e.target.name;
    const school = document.querySelector(`#${name}-box`);
    school.remove();
  }
});
