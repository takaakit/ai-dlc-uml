# Functional Design

## Purpose
**Detailed business logic design per unit**

Functional Design focuses on:
- Detailed business logic and algorithms for the unit
- Domain models with entities and relationships
- Detailed business rules, validation logic, and constraints
- Technology-agnostic design (no infrastructure concerns)

**Note**: This builds upon high-level component design from Application Design (INCEPTION phase)

## Prerequisites
- Units Generation must be complete
- Unit of work artifacts must be available
- Application Design recommended (provides high-level component structure)
- Execution plan must indicate Functional Design stage should execute

## Overview
Design detailed business logic for the unit, technology-agnostic and focused purely on business functions.

## Steps to Execute

### Step 1: Analyze Unit Context
- Read unit definition from `aidlc-docs/inception/application-design.asta`
- Read assigned stories from `aidlc-docs/inception/application-design.asta`
- Understand unit responsibilities and boundaries

### Step 2: Load UML-Code Mapping Guide
- Load UML-code mapping guide from `.aidlc-rule-details/construction/uml-code-mapping-guide.md`

### Step 3: Create Functional Design Plan
- Generate plan with checkboxes [] for functional design
- Focus on business logic, domain models, business rules
- Each step should have a checkbox []

### Step 4: Generate Context-Appropriate Questions
**DIRECTIVE**: Thoroughly analyze the unit definition and functional design artifacts to identify ALL areas where clarification would improve the functional design. Be proactive in asking questions to ensure comprehensive understanding.

**CRITICAL**: Default to asking questions when there is ANY ambiguity or missing detail that could affect functional design quality. It's better to ask too many questions than to make incorrect assumptions.

- EMBED questions using [Answer]: tag format
- Focus on ANY ambiguities, missing information, or areas needing clarification
- Generate questions wherever user input would improve functional design decisions
- **When in doubt, ask the question** - overconfidence leads to poor designs

**Question categories to consider** (evaluate ALL categories):
- **Business Logic Modeling** - Ask about core entities, workflows, data transformations, and business processes
- **Domain Model** - Ask about domain concepts, entity relationships, data structures, and business objects
- **Business Rules** - Ask about decision rules, validation logic, constraints, and business policies
- **Data Flow** - Ask about data inputs, outputs, transformations, and persistence requirements
- **Integration Points** - Ask about external system interactions, APIs, and data exchange
- **Error Handling** - Ask about error scenarios, validation failures, and exception handling
- **Business Scenarios** - Ask about edge cases, alternative flows, and complex business situations
- **Frontend Components** (if applicable) - Ask about UI component structure, user interactions, state management, and form handling

### Step 5: Store Plan
- Save as `aidlc-docs/construction/plans/{unit-name}-functional-design-plan.md`
- Include all [Answer]: tags for user input

### Step 6: Collect and Analyze Answers
- Wait for user to complete all [Answer]: tags
- **MANDATORY**: Carefully review ALL responses for vague or ambiguous answers
- **CRITICAL**: Add follow-up questions for ANY unclear responses - do not proceed with ambiguity
- Look for responses like "depends", "maybe", "not sure", "mix of", "somewhere between"
- Create clarification questions file if ANY ambiguities are detected
- **Do not proceed until ALL ambiguities are resolved**

### Step 7: Generate Functional Design Artifacts
- Create an Astah Pro project `aidlc-docs/construction/functional-design.asta`
- For each unit, create a package named `{unit-name}/business-logic` in the Astah Pro project and illustrate the unit's business logic as an activity, sequence or state machine diagram under that package. In each diagram, always create a note that describes the business rules in text.
- For each unit, create a package named `{unit-name}/domain-model` in the Astah Pro project and illustrate the unit's domain model as a class diagram under that package.
- If unit includes frontend/UI: Create a package named `{unit-name}/frontend-components` in the Astah Pro project and illustrate the following content within that package using any UML diagram or describe it with notes within the diagrams.
  - Component hierarchy and structure
  - Props and state definitions for each component
  - User interaction flows
  - Form validation rules
  - API integration points (which backend endpoints each component uses)
- When creating or editing a diagram, you MUST refer back to the Diagram Layout Guide and adjust the diagram's layout to comply with it.

### Step 8: Present Completion Message
- Present completion message in this structure:
     1. **Completion Announcement** (mandatory): Always start with this:

```markdown
# 🔧 Functional Design Complete - [unit-name]
```

     2. **AI Summary** (optional): Provide structured bullet-point summary of functional design
        - Format: "Functional design has created [description]:"
        - List key business logic models and entities (bullet points)
        - List business rules and validation logic defined
        - Mention domain model structure and relationships
        - DO NOT include workflow instructions ("please review", "let me know", "proceed to next phase", "before we proceed")
        - Keep factual and content-focused
     3. **Formatted Workflow Message** (mandatory): Always end with this exact format:

```markdown
> **📋 <u>**REVIEW REQUIRED:**</u>**  
> Please examine the functional design artifacts (Astah Pro project) at: `aidlc-docs/construction/functional-design.asta`



> **🚀 <u>**WHAT'S NEXT?**</u>**
>
> **You may:**
>
> 🔧 **Request Changes** - Ask for modifications to the functional design based on your review  
> ✅ **Continue to Next Stage** - Approve functional design and proceed to **[next-stage-name]**

---
```

### Step 9: Wait for Explicit Approval
- Do not proceed until the user explicitly approves the functional design
- Approval must be clear and unambiguous
- If user requests changes, update the design and repeat the approval process

### Step 10: Record Approval and Update Progress
- Log approval in audit.md with timestamp
- Record the user's approval response with timestamp
- Mark Functional Design stage complete in aidlc-state.md
