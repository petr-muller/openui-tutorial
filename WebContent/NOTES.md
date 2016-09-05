Views
=====
 * View names are capitalized
 * All views are stored in the view folder
 * Names of XML views always end with *.view.xml
 * The default XML namespace is sap.m
 * Curly braces indicate values are taken from objects, like models (example: `"{/recipient/name}"`)
 
Controllers
===========
 * Controller names are capitalized
 * Controllers carry the same name as the related view (if there is a 1:1 relationship)
 * Event handlers are prefixed with on
 * Controller names always end with *.controller.js
 * Use Hungarian(!) notation for variable names
 
Resources
=========
  * Often called *modules*
  * Use `sap.ui.define` for controllers and all other JavaScript modules to define a global namespace. With the namespace, the object can be addressed throughout the application.
  * Use `sap.ui.require` for asynchronously loading dependencies but without declaring a namespace, for example code that just needs to be executed, but does not need to be called from other code.
  * Use the name of the artifact to load for naming the function parameters.

Internationalization
====================
 * The resource model for internationalization is called the i18n model.
 * The default filename is i18n.properties.
 * Resource bundle keys are written in (lower) camelCase.
 * Resource bundle values can contain parameters like {0}, {1}, {2}, …
 * Never concatenate strings that are translated, always use placeholders.
 * Use Unicode escape sequences for special characters.

