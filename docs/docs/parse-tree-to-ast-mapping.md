---
id: parse-tree-to-ast-mapping
title: Parse Tree to AST Mapping
sidebar_label: Parse Tree to AST Mapping
---

# Parse Tree to AST Mapping

Parse tree to AST mapping in Starlasu converts low-level parse trees into high-level abstract syntax trees.

## What is Mapping?

Mapping transforms:

- **Parse Tree Nodes**: Low-level grammar-specific nodes
- **AST Nodes**: High-level language-agnostic nodes
- **Structure**: Convert parse tree structure to AST structure
- **Information**: Extract semantic information from syntax

## Mapping Process

### Node Transformation
- **Terminal Nodes**: Convert to AST leaf nodes
- **Non-terminal Nodes**: Transform to AST internal nodes
- **Rule Nodes**: Apply grammar rule transformations
- **Error Nodes**: Handle parsing errors gracefully

### Structure Conversion
- **Tree Structure**: Maintain hierarchical relationships
- **Node Ordering**: Preserve logical node ordering
- **Grouping**: Group related nodes logically
- **Flattening**: Simplify complex nested structures

## Benefits

- **Abstraction**: Work with high-level language concepts
- **Language Independence**: AST is language-agnostic
- **Tool Integration**: Easier integration with analysis tools
- **Maintenance**: Simpler AST manipulation and transformation

## Implementation

Starlasu provides:

- **Mapping Framework**: Base classes for building mappers
- **Rule-based Mapping**: Define mapping rules declaratively
- **Visitor Pattern**: Standard mapping approach
- **Error Handling**: Graceful handling of mapping errors

## Example

```kotlin
// Parse tree node
class ParseTreeFunctionCall(val functionName: String, val arguments: List<ParseTreeNode>)

// AST node
class ASTFunctionCall(val functionName: String, val arguments: List<ASTExpression>)

// Mapping rule
fun mapFunctionCall(node: ParseTreeFunctionCall): ASTFunctionCall {
    return ASTFunctionCall(
        functionName = node.functionName,
        arguments = node.arguments.map { mapExpression(it) }
    )
}
``` 