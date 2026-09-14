# UML Modeling Guide

## MANDATORY: Check the Astah Pro MCP Version

**CRITICAL**: The connected Astah Pro MCP server must be **version 0.3.0 or later**.

**Abort Workflow**: If the Astah Pro MCP server is not connected or the version is too old, abort the workflow.

**Mid-Workflow Disconnection**: If the Astah Pro MCP server becomes unreachable after the workflow has started, immediately stop MCP calls, ask the user to reconnect to the Astah Pro MCP server and reply with a resume instruction, and wait for that instruction before continuing.

## MANDATORY: Understand UML

**CRITICAL**: No UML modeling without understanding what UML is and why it matters first.

**Before modeling, you MUST** fetch and read the pages below:
- [What is UML and Why is it Essential for Modern Software Development?](https://www.omg.org/uml/what-is-uml.htm)

Understand what UML is and the significance of using it.

## MANDATORY: Understand Agile Modeling

**CRITICAL**: No UML Modelling Without Understanding Agile Modeling.

**Before modeling, you MUST** fetch and read the pages below:
- [UML Use Case Diagrams: An Agile Introduction](https://agilemodeling.com/artifacts/useCaseDiagram.htm)
- [UML Class Diagrams: An Agile Introduction](https://agilemodeling.com/artifacts/classDiagram.htm)
- [UML Sequence Diagrams: An Agile Introduction](https://agilemodeling.com/artifacts/sequenceDiagram.htm)
- [UML Activity Diagrams: An Agile Introduction](https://agilemodeling.com/artifacts/activityDiagram.htm)
- [UML State Machine Diagrams: An Agile Introduction](https://agilemodeling.com/artifacts/stateMachineDiagram.htm)

Understand the different types of UML diagrams and how they are used.

## MANDATORY: Recall Insights on UML, Modeling, and Architecture

**Before modeling, you MUST** use the corresponding tool function to recall insights on UML, modeling, and architecture.

## MANDATORY: Recall Architectural and Design Smells

**Before modeling, you MUST** use the corresponding tool function to recall architectural smells and design smells that should be avoided.

## MANDATORY: Understand modeling in Astah Pro

Use the Astah Pro MCP tools to create, update, and review model elements and diagrams.

**How to find the right tools:** The MCP server exposes only some of its tools directly; many other tools are available only through an MCP tool script. Read the descriptions of the directly exposed tools, and use the corresponding tool functions to list the tools callable from an MCP tool script and to get their details. Identify which tools handle the operation you need, then call the directly exposed tools as MCP tools and the other tools from an MCP tool script.

**Load guides using tools:** First of all, make sure to load the MCP server guide. Before running an MCP tool script or an Astah API script, make sure to load the guide for that type of script. Also, make sure to load the guide for each diagram that you create, update, or review.

**Adjust diagram layout after changes:** After creating or updating a diagram, adjust the diagram layout so that it conforms to the diagram layout guide.

## MANDATORY: Maintain Consistency Within and Across Model Elements and Diagrams

**After modeling, you MUST** use the corresponding tool functions to maintain terminological consistency and semantic consistency, both within and across model elements and diagrams.

## Validation

Before creating, updating, or reviewing UML model elements and diagrams:
- [ ] Check the Astah Pro MCP version
- [ ] Understand UML
- [ ] Understand Agile Modeling
- [ ] Recall Insights on UML, Modeling, and Architecture
- [ ] Recall Architectural and Design Smells
- [ ] Understand modeling in Astah Pro
- [ ] Maintain Consistency Within and Across Model Elements and Diagrams — understood as mandatory after modeling (not performed here)
