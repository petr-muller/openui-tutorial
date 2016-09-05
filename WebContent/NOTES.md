Views
=====
 * View names are capitalized
 * All views are stored in the view folder
 * Names of XML views always end with *.view.xml
 * The default XML namespace is sap.m
 
Conventions
===========
 * Controller names are capitalized
 * Controllers carry the same name as the related view (if there is a 1:1 relationship)
 * Event handlers are prefixed with on
 * Controller names always end with *.controller.js
 
Resources
=========
  * Often called *modules*
  * Use `sap.ui.define` for controllers and all other JavaScript modules to define a global namespace. With the namespace, the object can be addressed throughout the application.
  * Use `sap.ui.require` for asynchronously loading dependencies but without declaring a namespace, for example code that just needs to be executed, but does not need to be called from other code.
  * Use the name of the artifact to load for naming the function parameters.

   
