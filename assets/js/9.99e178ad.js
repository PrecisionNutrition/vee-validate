(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{196:function(t,e,s){"use strict";s.r(e);var i=s(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("table",[t._m(10),t._v(" "),s("tbody",[t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("tr",[s("td",[t._v("validity")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("td",[t._v("Whether the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Constrained API"),s("OutboundLink")],1),t._v(" should be used to apply error messages.")])]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39)])]),t._v(" "),t._m(40),t._v(" "),t._m(41)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field","aria-hidden":"true"}},[this._v("#")]),this._v(" Field")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("VeeValidate maps HTML elements and Vue components that are under validation to instances of "),e("code",[this._v("fields")]),this._v(", while this class not exposed to be used publicly you can find Its API very useful if you are planning to do some lower-level actions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Any undocumented properties/methods are not intended for public use.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-the-field-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-field-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting the field instance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Getting a field instance is straightforward, you can use the "),e("code",[this._v("Validator.fields.find")]),this._v(" method to get the field instance.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// find the field which has a matching name of 'email'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'email'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// find the field which has a name of email and is in the 'newsletter' scope.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'email'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scope"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'newsletter'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// or use the id to find the field if it is known to you.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" field "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fields"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'fieldId'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Careful when using the field API, as it may disrupt the validator operations and may produce unintended results.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" Constructor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Default")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("id")]),this._v(" "),e("td",[e("code",[this._v("string")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The id of the field (automatically generated).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("el")]),this._v(" "),e("td",[e("code",[this._v("HTMLElement")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The element that is the HTML input or the root element of the component being validated.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("updated")]),this._v(" "),e("td",[e("code",[this._v("boolean")])]),this._v(" "),e("td",[e("code",[this._v("false")])]),this._v(" "),e("td",[this._v("Indicates if the field should be re-scanned to update its properties like validation rules.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("watchers")]),this._v(" "),e("td",[e("code",[this._v("Watcher[]")])]),this._v(" "),e("td",[e("code",[this._v("[]")])]),this._v(" "),e("td",[this._v("Array of wrappers for the event listeners being used by the field instance.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("events")]),this._v(" "),e("td",[e("code",[this._v("string[]")])]),this._v(" "),e("td",[e("code",[this._v("[]")])]),this._v(" "),e("td",[this._v("List of events that trigger validation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("rules")]),this._v(" "),e("td",[e("code",[this._v("{ [string]: Object }")])]),this._v(" "),e("td",[e("code",[this._v("{}")])]),this._v(" "),e("td",[this._v("A map of rules/params being used to validate the field.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("boolean")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("false")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("aria")]),t._v(" "),s("td",[s("code",[t._v("boolean")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("aria-required")]),t._v(" and "),s("code",[t._v("aria-invalid")]),t._v(" attributes should be set/updated after validation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("vm")]),this._v(" "),e("td",[e("code",[this._v("Vue instance")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The context component that is using the directive in its template.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("component")]),this._v(" "),e("td",[e("code",[this._v("Vue instance")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The component being validated if it is one.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("ctorConfig")]),this._v(" "),e("td",[e("code",[this._v("VeeValidateConfig")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("A scoped config for the field.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("flags")]),this._v(" "),e("td",[e("code",[this._v("{ [string]: boolean }")])]),this._v(" "),e("td",[e("code",[this._v("{}")])]),this._v(" "),e("td",[this._v("A string/boolean map of the field current flags state.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("alias")]),this._v(" "),e("td",[e("code",[this._v("string")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("A readonly prop for alternative name to be used by the field.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("getter")]),this._v(" "),e("td",[e("code",[this._v("() => any")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("A getter function that returns the current field value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("name")]),this._v(" "),e("td",[e("code",[this._v("string")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The field name.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("scope")]),this._v(" "),e("td",[e("code",[this._v("string")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The field scope.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("targetOf")]),this._v(" "),e("td",[e("code",[this._v("string")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("The id of the field targeting this field for validation (confirmed/before/after).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("initial")]),this._v(" "),e("td",[e("code",[this._v("boolean")])]),this._v(" "),e("td",[e("code",[this._v("false")])]),this._v(" "),e("td",[this._v("If this field should be validated upon creation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("classes")]),this._v(" "),e("td",[e("code",[this._v("boolean")])]),this._v(" "),e("td",[e("code",[this._v("false")])]),this._v(" "),e("td",[this._v("If flags based classes should be applied on the HTML input.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("classNames")]),this._v(" "),e("td",[e("code",[this._v("Object")])]),this._v(" "),e("td",[e("code",[this._v("{}")])]),this._v(" "),e("td",[this._v("A map containing flag name / class names to be applied based on flags.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("delay")]),this._v(" "),e("td",[e("code",[this._v("number")])]),this._v(" "),e("td",[e("code",[this._v("0")])]),this._v(" "),e("td",[this._v("The amount of delay for this field events triggers.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("listen")]),this._v(" "),e("td",[e("code",[this._v("boolean")])]),this._v(" "),e("td",[e("code",[this._v("true")])]),this._v(" "),e("td",[this._v("If this field should have listeners.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("model")]),t._v(" "),s("td",[s("code",[t._v("{ expression: string, lazy: boolean }")])]),t._v(" "),s("td",[s("code",[t._v("null")])]),t._v(" "),s("td",[t._v("Contains info about the model being bound to this field using "),s("code",[t._v("v-model")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("any")])]),t._v(" "),s("td",[s("code",[t._v("() => undefined")])]),t._v(" "),s("td",[t._v("A readonly version of the "),s("code",[t._v("getter")]),t._v(" prop.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("isRequired")]),this._v(" "),e("td",[e("code",[this._v("boolean")])]),this._v(" "),e("td",[e("code",[this._v("true | false")])]),this._v(" "),e("td",[this._v("Readonly indicator if the field is required. (has required rule)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("isDisabled")]),this._v(" "),e("td",[e("code",[this._v("boolean")])]),this._v(" "),e("td",[e("code",[this._v("true | false")])]),this._v(" "),e("td",[this._v("Readonly indicator if the field is disabled (skips validation).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("validator")]),this._v(" "),e("td",[e("code",[this._v("Validator")])]),this._v(" "),e("td",[e("code",[this._v("null")])]),this._v(" "),e("td",[this._v("Readonly reference to the validator instance that created this field.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("rejectsFalse")]),t._v(" "),s("td",[s("code",[t._v("boolean")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("required")]),t._v(" rule should fail when "),s("code",[t._v("false")]),t._v(" is provided as a value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Signature")]),t._v(" "),s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("matches(options: FieldMatchOptions)")]),t._v(" "),s("td",[s("code",[t._v("boolean")])]),t._v(" "),s("td",[t._v("Checks if the field matches the specified matching object criteria.")])]),t._v(" "),s("tr",[s("td",[t._v("update(options: FieldOptions)")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Updates the field properties and re-adds the listeners and syncs the classes applied.")])]),t._v(" "),s("tr",[s("td",[t._v("reset()")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Resets the field flags to their initial state.")])]),t._v(" "),s("tr",[s("td",[t._v("setFlags(flags: { [string]: boolean })")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Updates the field flags and also updates the specified field counterparts eg. valid/invalid.")])]),t._v(" "),s("tr",[s("td",[t._v("unwatch(tag?: RegExp)")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Removes the listeners that has a matching tag or removes all if none is provided.")])]),t._v(" "),s("tr",[s("td",[t._v("updateClasses()")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Syncs the classes being applied on the element with the flags if enabled.")])]),t._v(" "),s("tr",[s("td",[t._v("updateAriaAttrs()")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Syncs the aria attributes applied on the element with the flags if enabled.")])]),t._v(" "),s("tr",[s("td",[t._v("updateCustomValidity()")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Syncs the constrained API validation message with the first error message for this field.")])]),t._v(" "),s("tr",[s("td",[t._v("destroy()")]),t._v(" "),s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[t._v("Removes all listeners and dependencies of the field.")])])])])}],!1,null,null,null);n.options.__file="field.md";e.default=n.exports}}]);