---
id: pipeline
title: Starlasu Pipeline
sidebar_label: Starlasu Pipeline
---

# Starlasu Pipeline

When working on complex projects we want to decompose them into manageable steps. This is the case when we perform migrations or code analysis on large codebases (up to the tens of millions of lines of code).

In such situations, we use the **Starlasu Pipeline Processing** approach. It is a way to process code that is a modular.  
It draws from well-established compiler pipelines and model-driven engineering practices, extended with tooling and conventions designed for migrations and code analysis.

The pipeline receives as input a heterogeneous collection of artifacts (source code, scripts, database definitions, etc.) and can produce different outputs, depending on the needs:

* Migrated code
* Refactored code
* Reports
* Diagrams

## Key Concepts

A _Starlasu Pipeline_ is composed by multiple steps. Each step can produce a new state (called _Pipeline Snapshot_) and possibly generate artifacts. The next step will take over and consider as input the Pipeline Snapshot produced by the previous step.

### Pipeline Snapshots
A **Pipeline Snapshot** represents the state of a codebase at a specific point in the pipeline.

Each snapshot:

- Records **which steps** it has gone through.
- Can be saved as a **single `.sps` file**.
- Stores code models in a **language-neutral format** (based on [LionWeb](https://lionweb.io)), with migration-specific extensions from Starlasu.

Snapshots enable reproducibility: you can pause, resume, or branch processing without starting over.

They are useful for two reasons:

* When performing complex operations like semantic enrichment on millions of lines of code (which can take hours), we can save the result and re-execute the step only when necessary
* We can inspect these intermediate steps. We can do that for debug the system or to test it

For inspection we can use the [https://github.com/LionWeb-io/lionweb-server-admin-ui](LionWeb Server Admin UI]) or other more specialized tools.

### Processing Steps

A **Pipeline Step**:

- Takes a *Starlasu Pipeline Snapshot* as input.
- Executes one or more *Pipeline Components*.
- Produces a *new Starlasu Pipeline Snapshot* as output.

This modularity means each step can be developed, tested, and improved independently.

### Pipeline Components

A **Pipeline Component** is the unit of work inside a step.

Each component has:

- **Name**
- **Type** (e.g., parser, analyzer, transformer)
- **Version**

Components can be reused across different projects and pipelines, enabling a plug-and-play architecture.

This permits to develop a catalog of components over time. For example, at Strumenta we developed parsers, semantic enrichers or code generators for programming languages such as RPG, COBOL, EGL, DB2 SQL, Java, Python, and more.

### Artifacts

Artifacts are files produced by the pipeline.  
They are not limited to the final step of the process — they can also be generated during intermediate steps whenever useful information or deliverables are produced.

Artifacts can take many forms, for example:

- **Sequence diagrams** generated during code analysis.
- A **migration plan** in JSON format specifying the order in which files should be translated.
- A **PDF report** containing statistics about the codebase.
- A **PDF document** describing the different code idioms detected during analysis.

In general, artifacts are any files that can be created by the pipeline and then:

- Delivered to users or clients.
- Used internally to support further processing.
- Sent to external systems as part of an integration workflow.

### Orchestrator

The **Pipeline Orchestrator** is the command responsible for executing pipeline steps in sequence.

It:

- Reads the configuration of which steps to run.
- Coordinates data flow between components.
- Logs component versions and parameters for reproducibility.

## Typical Processing Flow

While the exact composition varies per project, a Starlasu pipeline often includes:

0. **Loading**  
   Take existing code from a zip or a directory and create an entry in the Starlasu Pipeline Snapshot. The entry contains the relative path of the file with respect to the root of the codebase and its code.

1. **AST Generation**  
   Parse each codebase file loaded into the system from the previous step and for which there is a parser available into a **Starlasu-compliant AST**. The AST is attached to the Codebase File.

2. **Semantic Enrichment**  
   Resolve symbols and types across files and languages, producing a connected, semantically rich model.

3. **Analysis Phase**  
   Add annotations for:
    - Control flow analysis
    - Code idioms
    - Structural patterns (e.g., overlays in RPG)
    - Complexity and dependency metrics

4. **Transformation**  
   Convert source-language ASTs into target-language ASTs, applying both element-level and idiom-level transformations.

5. **Post-processing**  
   Insert imports, reorganize code, simplify constructs, and prepare for output.

6. **Code Generation**  
   Serialize ASTs into fully-formed source files in the target language. The resulting files are generated as artifacts.


## Why This Matters

By structuring migrations into **traceable, modular steps**, the Starlasu Pipeline ensures:
 
- **Repeatability** – every run can be reproduced from stored snapshots.
- **Flexibility** – components can be swapped or refined without breaking the whole pipeline.
- **Transparency** – transformations are auditable, with clear traceability from legacy code to modern code.

The Starlasu Pipeline is more than a technical tool—it is a **methodology** for managing complex code transformations 
with confidence.