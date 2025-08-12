---
id: ast-representation
title: AST Representation
sidebar_label: AST Representation
---

# AST Representation

Starlasu operates on Abstract Syntax Trees (ASTs) (or _Code Models_). These are tree-like data structures to represent 
the information contained in a piece of formal language or "code". For example, the statements in a procedural program, 
the data elements in a SQL query, or the steps in a business workflow.

All the Starlasu ASTs are based on a few primitive elements.

The structure is similar to the one used by other Modeling solutions such as [EMF](https://eclipse.dev/modeling/emf/), 
[MPS](https://www.jetbrains.com/mps/), or [LionWeb](https://lionweb.io/). 
In particular we aim to (mostly) converge to the same terminology used in LionWeb 
(see the [LioWeb's specifications](https://lionweb.io/specification/metametamodel/metametamodel.html)).

This is a representation of the whole structure.

```mermaid
---
title: Starlasu M3
---
classDiagram

class Language {
  qualifiedName: String
  simpleName: String
}
Language "1" *--> "0..*" Type: types

class Type {
  <<Abstract>>
  name: String
}
Type <|-- Classifier
Type <|-- DataType

%% Concepts

class Classifier {
    <<Abstract>>
}
Classifier "1" *--> "0..*" Feature: features
Classifier <|-- Concept
Classifier <|-- ConceptInterface
Classifier <|-- Annotation

class Concept
Concept "1" --> "0..1" Concept: extends   
Concept "1" --> "0..*" ConceptInterface: implements 

class ConceptInterface
ConceptInterface "1" --> "0..*" ConceptInterface: extends 

%% Features

class Feature {
  <<Abstract>>
  name: String
  multiplicity: Multiplicity
}
Feature <|-- Property
Feature <|-- Link
Feature "1" --> "1" Type: type

class Property {
    type: DataType
}
class Link {
    <<Abstract>>
    type: Classifier
}
Link <|-- Containment
Link <|-- Reference

class Containment
class Reference

class Annotation {
   multiple: Boolean
}
Annotation "1" --> "0..1" Annotation: extends 
Annotation "1" --> "0..*" ConceptInterface: implements 
Annotation "1" --> "0..1" Classifier: annotates

%% DataTypes

class DataType {
	<<Abstract>>
}

DataType <|-- PrimitiveType
class PrimitiveType

DataType <|-- EnumType
class EnumType
EnumType "1" *--> "0..*" EnumerationLiteral: literals

class EnumerationLiteral {
   name: String
}

%% Supporting enumerations
```

The AST representation in Starlasu follows a hierarchical structure where:

- **Language**: The top-level container that holds all types
- **Type**: Abstract base for all types in the language
- **Classifier**: Abstract base for concepts, interfaces, and annotations
- **Concept**: Concrete classes that can extend other concepts and implement interfaces
- **Feature**: Properties and links that define the structure of classifiers
- **DataType**: Primitive types and enums for basic values

This structure provides a flexible foundation for representing any formal language or code structure while maintaining consistency across different Starlasu implementations. 