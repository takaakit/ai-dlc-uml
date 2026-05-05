# UML Modeling Guide

## MANDATORY: Check the Astah Pro MCP Version

**CRITICAL**: The connected Astah Pro MCP server must be **version 0.2.2 or later**.

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

## MANDATORY: Recall Insights on UML and Modeling

**Before modeling, you MUST** follow these steps to recall insights on UML and modeling:
1. Retrieve from your internal knowledge any insights presented in the following books.
   - Martin Fowler. UML distilled: a brief guide to the standard object modeling language. Addison-Wesley Professional, 2018.
   - Grady Booch, James Rumbaugh, and Ivar Jacobson. Unified modeling language user guide, the 2nd edition. Addison-Wesley Professional, 2005.
   - James Rumbaugh, Ivar Jacobson, and Grady Booch. The Unified Modeling Language Reference Manual, the 2nd edition. Addison-Wesley Professional, 2004.
   - Scott W. Ambler. The Elements of UML 2.0 Style. Cambridge University Press, 2005.
2. Verbalize those insights explicitly for each book and write them to a temporary file (insights-on-uml-and-modeling.md) in the workspace directory.
3. Load the temporary file into your working context.
4. Give focused attention to the loaded insights so that they are prioritized in your reasoning.

Note: Retrieve only insights that are actually presented in those books. Do NOT include any critique, commentary, explanation, interpretation, review, or personal impressions about the books.

## MANDATORY: Understand modeling in Astah Pro

Use the Astah Pro MCP tools to create, update, and review model elements and diagrams.

**How to find the right tools:** The MCP server exposes tools with names and descriptions. Read the tool descriptions to identify which tools handle the operation you need.

**Load guides using tools:** First of all, make sure to load the MCP server guide. Also, make sure to load the guide for each diagram that you create, update, or review.

**Adjust diagram layout after changes:** After creating or updating a diagram, adjust the diagram layout so that it conforms to the diagram layout guide.

## Validation

Before creating, updating, or reviewing UML model elements and diagrams:
- [ ] Check the Astah Pro MCP version
- [ ] Understand UML
- [ ] Understand Agile Modeling
- [ ] Recall Insights on UML and Modeling
- [ ] Understand modeling in Astah Pro
