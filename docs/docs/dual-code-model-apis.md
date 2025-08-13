---
id: dual-code-model-apis
title: Dual Code Model APIs
sidebar_label: Dual Code Model APIs
---

# Dual Code Model APIs

Starlasu provides two complementary APIs for working with ASTs: homogeneous and heterogeneous APIs.

## Homogeneous API

The homogeneous API treats all AST nodes uniformly:

- **Type Safety**: All nodes have the same interface
- **Generic Operations**: Apply operations to any node type
- **Reflection**: Access properties dynamically
- **Flexibility**: Work with unknown node types

## Heterogeneous API

The heterogeneous API provides type-specific operations:

- **Type-Specific Methods**: Access properties and methods specific to each node type
- **Compile-Time Safety**: Catch errors at compile time
- **IntelliSense**: Better IDE support and autocomplete
- **Performance**: Optimized for specific node types

## When to Use Each

### Use Homogeneous API when:
- Working with unknown or generic node types
- Implementing generic algorithms
- Building tools that work with any AST
- Need for dynamic property access

### Use Heterogeneous API when:
- Working with known node types
- Building type-specific functionality
- Need for compile-time safety
- Performance is critical

## Implementation

Starlasu libraries provide both APIs:

- **Base Classes**: Common functionality for all nodes
- **Type-Specific Classes**: Specialized behavior for each node type
- **Conversion Methods**: Switch between API styles
- **Hybrid Approaches**: Combine both APIs as needed

## Example

```kotlin
// Homogeneous API
val allNodes = ast.findAll<ASTNode>()
allNodes.forEach { node ->
    val name = node.getProperty("name")
    // Work with any node type
}

// Heterogeneous API
val functions = ast.findAll<FunctionDeclaration>()
functions.forEach { func ->
    val name = func.name // Type-safe access
    val params = func.parameters // Type-specific property
}
``` 