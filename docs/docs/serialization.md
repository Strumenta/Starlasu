---
id: serialization
title: Serialization
sidebar_label: Serialization
---

# Serialization

Serialization in Starlasu allows you to convert ASTs to and from various formats for storage, transmission, or analysis purposes.

## Supported Formats

Starlasu provides serialization support for:

- **JSON**: Human-readable format for debugging and data exchange
- **Binary**: Compact format for efficient storage and transmission
- **XML**: Standard format for integration with other tools

## Usage

Serialization is typically handled through the Starlasu libraries, which provide:

- Automatic serialization of AST nodes
- Custom serialization for specific node types
- Deserialization with validation
- Support for circular references

## Benefits

- **Persistence**: Save ASTs to files or databases
- **Debugging**: Inspect AST structure in human-readable format
- **Integration**: Exchange ASTs with other tools and systems
- **Testing**: Create test fixtures from serialized ASTs 