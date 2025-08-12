---
id: ast-traversal-and-querying
title: AST Traversal and Querying
sidebar_label: AST Traversal and Querying
---

# AST Traversal and Querying

AST traversal and querying are fundamental operations for analyzing and transforming code structures in Starlasu.

## Traversal Patterns

Starlasu provides several traversal patterns:

- **Depth-First**: Visit all children before siblings
- **Breadth-First**: Visit all siblings before children
- **Custom Traversal**: Define your own traversal order

## Querying Capabilities

Query your ASTs using:

- **Type-based Queries**: Find all nodes of a specific type
- **Property-based Queries**: Filter by node properties
- **Relationship Queries**: Navigate parent-child relationships
- **Path Queries**: Find nodes along specific paths

## Common Use Cases

- **Code Analysis**: Find all function calls or variable declarations
- **Refactoring**: Identify code patterns for transformation
- **Metrics**: Count and analyze code structures
- **Validation**: Check code against rules and constraints

## Implementation

Starlasu libraries provide:

- **Visitor Pattern**: Traditional traversal approach
- **Query APIs**: High-level querying capabilities
- **Lazy Evaluation**: Efficient processing of large ASTs
- **Caching**: Optimize repeated queries

## Example

```kotlin
// Find all function calls
val functionCalls = ast.findAll<FunctionCall>()

// Find nodes with specific properties
val publicMethods = ast.findAll<Method> { it.isPublic }

// Navigate relationships
val parentClass = node.parent<ClassDeclaration>()
``` 