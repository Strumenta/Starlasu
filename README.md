# StarLasu

The Starlasu approach provides a flexible, systematic, and extensible framework for creating tools like parsers, 
transpilers, code analyzers, interpreters, code generators, and domain-specific languages (DSLs).

## Documentation

This project has been migrated from Writerside to **Docusaurus** for better maintainability and modern web standards.

### Documentation Structure

- **`docs/`** - Docusaurus-based documentation site
- **`Writerside/`** - Original Writerside documentation (legacy)
- **`webHelpSTRUMENTA2-all/`** - Generated web help files

### Getting Started with Documentation

1. **View Online**: The documentation is available at [https://starlasu.com](https://starlasu.com)

2. **Local Development**:
   ```bash
   cd docs
   npm install
   npm start
   ```

3. **Build for Production**:
   ```bash
   cd docs
   npm run build
   ```

## What is Starlasu?

Starlasu consists of a mental framework and guidelines to build different components. For example, we have a detailed
method to design and implement parsers (see [The Chisel Method](docs/docs/chisel-method)).

Starlasu is supported by a family of libraries, each supporting the application of The Starlasu approach on 
different platforms:

- **Kolasu**: For the JVM (Java, Kotlin), expanding to Node.js and browser environments in version 1.6.
- **Tylasu**: For Node.js and browser environments.
- **Pylasu**: For Python.
- **Sharplasu**: For .NET.

These libraries share a common architecture and are interoperable. This enables cross-platform development and 
consistent tooling.

## Migration Notes

The migration from Writerside to Docusaurus provides:

- **Modern Web Standards**: Better performance and accessibility
- **Improved Navigation**: Enhanced search and navigation capabilities
- **Better Maintainability**: Easier to update and extend
- **Responsive Design**: Works better on mobile and tablet devices
- **Version Control**: Better integration with Git workflows

## Contributing

To contribute to the documentation:

1. Make changes in the `docs/` directory
2. Test locally with `npm start`
3. Submit a pull request

## License

Copyright © Strumenta. Built with Docusaurus.
