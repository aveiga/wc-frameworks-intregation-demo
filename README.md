# Demoing Frontend Frameworks Interoperability

## References

### How to build web components with VueJS
https://vuejsdevelopers.com/2018/05/21/vue-js-web-component/

### How to build web components which use React
https://reactjs.org/docs/web-components.html

### How to build web components using Angular
https://www.telerik.com/blogs/getting-started-with-angular-elements
https://angular.io/guide/elements

Don't forget:
* tsconfig.json -> target -> "es6"
* package.json -> "document-register-element" -> "^1.8.1"
* src/app/app.component.ts -> // encapsulation: ViewEncapsulation.Native (No need for view encapsulation)

## Known Issues
* styled-components (a React library) doesn't seem to work in this setup