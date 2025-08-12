---
id: position
title: Position
sidebar_label: Position
---

# Position

Position tracking in Starlasu allows you to maintain information about where each element in your AST originated in the source code.

## What is Position?

Position information includes:

- **Line and Column**: Exact location in the source file
- **Offset**: Character position from the start of the file
- **Length**: Number of characters the element spans
- **Source File**: Reference to the original source

## Benefits

- **Error Reporting**: Provide precise error locations
- **Debugging**: Trace AST elements back to source
- **IDE Integration**: Enable features like "Go to Definition"
- **Refactoring**: Support safe code transformations

## Implementation

Starlasu libraries automatically track position information during parsing and maintain it through transformations, making it easy to provide accurate source location information in your language tools. 