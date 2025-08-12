---
id: origin-and-destination
title: Origin and Destination
sidebar_label: Origin and Destination
---

# Origin and Destination

Origin and destination tracking in Starlasu maintains information about where AST elements come from and where they are intended to go.

## Origin Tracking

### Source Information
- **File Path**: Original source file location
- **Line Numbers**: Source line and column information
- **Parse Tree**: Original parse tree node reference
- **Grammar Rule**: Grammar rule that created the node

### Metadata
- **Creation Time**: When the node was created
- **Parser Version**: Version of parser that created it
- **Source Format**: Original source format (text, binary, etc.)
- **Encoding**: Source file encoding information

## Destination Tracking

### Target Information
- **Output Format**: Intended output format
- **Target Language**: Target programming language
- **Platform**: Target platform or environment
- **Configuration**: Output configuration settings

### Transformation History
- **Applied Transformations**: List of transformations applied
- **Intermediate States**: Intermediate AST representations
- **Validation Results**: Validation and checking results
- **Generation Settings**: Code generation parameters

## Benefits

- **Traceability**: Track elements through transformations
- **Debugging**: Understand how elements were created
- **Error Reporting**: Provide accurate error locations
- **Optimization**: Identify optimization opportunities

## Implementation

Starlasu provides:

- **Origin Tracking**: Automatic source information tracking
- **Destination Metadata**: Target and output information
- **Transformation History**: Complete transformation chain
- **Debugging Tools**: Tools for investigating origins 