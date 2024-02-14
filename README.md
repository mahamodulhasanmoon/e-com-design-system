# MonoRepo E-commerce with Lerna, NX, and Yarn Workspace

This project is a monorepo for an e-commerce platform built using Lerna, NX, and Yarn Workspace. It includes a playground for testing CSS and component packages, leveraging a design system defined on Figma.

## Design System

Our design system serves as the visual foundation for our components and styles. It is hosted on Figma and provides a comprehensive set of design assets that guide our UI implementation. You can access the design system here:

[Design System Demo on Figma](https://www.figma.com/file/mJZ1H9VvUbxFB84vkSHsAu/Design-System---Demo?type=design&node-id=99-0&mode=design&t=DYtWLRHsomXNYkq7-0)

## Features

- **CSS and Component Package Management**: Utilizes Lerna and NX to manage CSS styles and component packages efficiently.
- **SCSS Support**: Styles are written using SCSS, allowing for variables, mixins, and nested rules to enhance maintainability and scalability.
- **Playground**: A dedicated playground for testing components and styles during development.

## Getting Started

### Prerequisites

- Node.js v18+
- Yarn v1.x

### Installation

1. Clone the repository to your local machine.
2. Run 
```
yarn install
``` 
to install all dependencies.

### Development

To start the development server, run:

```
 yarn dev
```


### Building

To build the application for production, run:

```
 yarn build
```


### Running the Playground

To run the playground for testing, navigate to the playground directory and start the development server:

```
cd playgrounds
yarn dev
``` 



## Monorepo Structure

The monorepo is structured using Yarn Workspaces and managed by Lerna. Packages are organized in the `packages` directory with shared libraries and functions residing in `packages/scss` for css and `packages/foundations` for basic configuration for text font and colors and `packages/ui` is Whole Components of Atomic Design System .

and Its maintained using `Atomic Design System`



### Yarn Workspace Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the project for production.

## Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.

## License

This project is licensed under the terms of the MIT license.
