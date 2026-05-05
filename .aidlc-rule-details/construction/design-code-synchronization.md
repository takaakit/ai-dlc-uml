# Design-Code Synchronization

## Purpose
**Enforce the Synchronization principle per unit**

Design-Code Synchronization focuses on:
- Detecting any drift between the unit's generated/modified code and the unit's construction-phase artifacts (UML models and design documents)
- Presenting every detected difference to the user in full (no summarization, no omission)
- Letting the user decide, per difference, whether to update the design artifacts or update the code
- Looping until the code and the design artifacts are fully synchronized

**Note**: This stage is the concrete enforcement point for the Synchronization principle. It runs unconditionally after Code Generation for every unit.

## Prerequisites
- Code Generation for this unit must be complete
- Construction-phase artifacts for this unit must exist (whichever of the following stages were executed): Functional Design, NFR Requirements, NFR Design, Infrastructure Design

## Scope of Verification
Compare the unit's code against all of the following that apply to the unit:

- UML models in `aidlc-docs/construction/functional-design.asta`, specifically the packages:
  - `{unit-name}/business-logic` — activity, sequence, and state machine diagrams, including diagram notes that describe business rules
  - `{unit-name}/domain-model` — class diagrams with entities, attributes, operations, relationships, multiplicities, etc.
  - `{unit-name}/frontend-components` (if present) — component hierarchy, props/state, validation rules, API integration points
- Markdown design artifacts for this unit under `aidlc-docs/construction/{unit-name}/`:
  - `nfr-requirements/nfr-requirements.md`
  - `nfr-requirements/tech-stack-decisions.md`
  - `nfr-design/nfr-design-patterns.md`
  - `nfr-design/logical-components.md`
  - `infrastructure-design/infrastructure-design.md`
  - `infrastructure-design/deployment-architecture.md`
  - `code/` markdown summaries
- Generated or modified code at the workspace root that corresponds to this unit (as listed in the unit's code generation plan and `code/` summaries)

## Steps to Execute

### Step 1: Load Artifacts for This Unit
- [ ] Read `aidlc-docs/aidlc-state.md` to confirm which construction-phase stages were executed for this unit
- [ ] Open `aidlc-docs/construction/functional-design.asta` via the Astah Pro MCP (per `common/uml-modeling-guide.md`) and load the packages listed under Scope of Verification
- [ ] Read every applicable markdown design artifact under `aidlc-docs/construction/{unit-name}/`
- [ ] Enumerate the code files produced or modified for this unit by reading:
  - `aidlc-docs/construction/plans/{unit-name}-code-generation-plan.md`
  - `aidlc-docs/construction/{unit-name}/code/` summaries
  - The actual source files at the workspace root referenced by the above

### Step 2: Perform Diff Analysis
Systematically compare the code against the design artifacts across ALL applicable dimensions. Do NOT skip a dimension if evidence for it exists in the unit's artifacts:

- **Structural**: presence and naming of classes, modules, services, components, and units in code vs. design
- **Behavior**: flows represented in activity/sequence/state-machine diagrams vs. actual code paths, including business rules captured in diagram notes
- **Interface**: method/function/API signatures, parameter names and types, return types, exceptions/errors
- **Domain model**: entities, attributes, operations, types, relationships, multiplicities, aggregate boundaries
- **Frontend** (if applicable): component hierarchy, props/state definitions, user interaction flows, form validation rules, backend endpoint bindings
- **NFR**: realized patterns (resilience, scalability, performance, security), selected tech stack, logging/monitoring configuration, compared against `nfr-requirements/` and `nfr-design/`
- **Infrastructure**: IaC, deployment architecture, shared infrastructure usage, compared against `infrastructure-design/`
- **Enabled extensions**: for any extension marked `Enabled: Yes` in `aidlc-docs/aidlc-state.md`, surface extension-rule-relevant discrepancies here as well (e.g., security baseline, property-based testing)

For every discrepancy found, capture:
- Affected design artifact(s) — exact path and UML element path
- Affected code location(s) — file path and symbol
- Design-side expectation (concrete excerpt or description)
- Code-side reality (concrete excerpt or description)

### Step 3: If No Differences Are Detected
- [ ] Create `aidlc-docs/construction/{unit-name}/design-code-sync/sync-report.md` with:
  - Iteration number (first iteration → `1`)
  - List of dimensions checked and the artifacts covered in each
  - `Status: Synchronized — no differences detected`
- [ ] Skip to Step 8 (Present Completion Message)

### Step 4: If Differences Are Found — Create Question File
- [ ] Create `aidlc-docs/construction/{unit-name}/design-code-sync/design-code-sync-questions.md`
- [ ] For EVERY difference detected, include one block — never summarize, never omit. Apply `common/question-format-guide.md`:

```markdown
## Difference [N]: [Short title]

- **Affected design artifact**: [exact artifact path and UML element path]
- **Affected code location**: [file path and symbol]
- **Design-side expectation**: [concrete excerpt or description]
- **Code-side reality**: [concrete excerpt or description]

### Question [N]
How should this difference be resolved?

A) Update the design artifact to match the code
B) Update the code to match the design artifact
X) Other (please describe after [Answer]: tag below)

[Answer]: 
```

- [ ] Inform the user that the question file is ready at `aidlc-docs/construction/{unit-name}/design-code-sync/design-code-sync-questions.md` and wait. Do NOT ask in chat.

### ⛔ GATE: Await User Answers
DO NOT proceed to Step 5 until every `[Answer]:` tag in `design-code-sync-questions.md` is filled. If any answer is `X) Other`, create a follow-up clarification question file per `common/question-format-guide.md` and wait until the follow-up is answered unambiguously.

### Step 5: Apply User's Choices
- [ ] Partition answered items into two sets: **A-set** (design updates) and **B-set** (code updates)
- [ ] Apply the **A-set first**:
  - For UML-model fixes: edit via the Astah Pro MCP following `common/uml-modeling-guide.md`, then adjust the UML model elements and diagrams per the same guide
  - For markdown design document fixes: edit the affected file under `aidlc-docs/construction/{unit-name}/` (or `aidlc-docs/inception/` for application-design elements) so it matches the code
  - Record each applied change in `sync-report.md`
- [ ] Apply the **B-set**:
  - Re-enter `Code Generation (ALWAYS EXECUTE, per-unit)` Part 2 for this unit
  - Before resuming Part 2, append the B-set items as additional steps in `aidlc-docs/construction/plans/{unit-name}-code-generation-plan.md` (lightweight plan update — no Part 1 re-planning required)
  - Execute the added steps via Part 2 until each B-set item is implemented
  - Record each applied change in `sync-report.md`
- [ ] When creating or editing a diagram, you MUST refer back to the Diagram Layout Guide and adjust the diagram's layout to comply with it.

### Step 6: Re-run Synchronization After Code Fix
- [ ] Once the code updates for the B-set are complete, return to Step 1 and re-run the full synchronization for this unit
- [ ] Increment the iteration counter in `sync-report.md`
- [ ] Loop Steps 1–6 until the diff set is empty on a clean pass

### Step 7: Finalize Sync Report
- [ ] Update `aidlc-docs/construction/{unit-name}/design-code-sync/sync-report.md` to include:
  - Total iterations performed
  - Every difference detected across all iterations
  - The user's decision (A / B / Other) per difference
  - How each decision was applied (file paths changed, UML model elements/diagrams updated, code paths regenerated)
  - Final status: `Synchronized`
- [ ] Log the stage-level audit entries in `aidlc-docs/audit.md` (stage start, diff counts per iteration, question file prompt, raw user responses, applied resolutions)

### Step 8: Present Completion Message
Present completion message in this structure:
1. **Completion Announcement** (mandatory): Always start with this:

```markdown
# 🔄 Design-Code Synchronization Complete - [unit-name]
```

2. **AI Summary** (optional): Provide a structured bullet-point summary
   - Format: "Design-code synchronization for [unit-name] completed with the following outcome:"
   - Total differences detected
   - Breakdown of decisions: design-update (A) count vs. code-update (B) count
   - Iterations performed
   - DO NOT include workflow instructions ("please review", "let me know", "proceed to next phase", "before we proceed")
   - Keep factual and content-focused
3. **Formatted Workflow Message** (mandatory): Always end with this exact format:

```markdown
> **📋 <u>**REVIEW REQUIRED:**</u>**  
> Please examine the synchronization artifacts at: `aidlc-docs/construction/[unit-name]/design-code-sync/`



> **🚀 <u>**WHAT'S NEXT?**</u>**
>
> **You may:**
>
> 🔧 **Request Changes** - Ask for modifications to the synchronization outcome based on your review  
> ✅ **Continue to Next Stage** - Approve synchronization and proceed to **[next-unit / Build & Test]**

---
```

### Step 9: Wait for Explicit Approval
- Do not proceed until the user explicitly approves the synchronization outcome
- Approval must be clear and unambiguous
- If user requests changes, update the affected artifacts and repeat the approval process

### Step 10: Record Approval and Update Progress
- Log the approval prompt with timestamp in `aidlc-docs/audit.md`
- Record the user's raw approval response with timestamp
- Mark Design-Code Synchronization stage complete for this unit in `aidlc-docs/aidlc-state.md`
- Prepare for transition to the next unit or to Build and Test

---

## Critical Rules
- **LIST EVERY DIFFERENCE**: never summarize, never omit. Incomplete diff lists lead to undetected drift (see `common/overconfidence-prevention.md`)
- **NO CHAT QUESTIONS**: always use `design-code-sync-questions.md` with `[Answer]:` tags per `common/question-format-guide.md`
- **UML EDITS AND REFERENCES VIA MCP**: any design-side edits and references to UML models must go through the Astah Pro MCP and conform to `common/uml-modeling-guide.md`, including diagram layout adjustment
- **LOOP UNTIL EMPTY**: do not advance to the next unit or to Build and Test while any unresolved differences exist
- **NO EMERGENT BEHAVIOR**: the completion message MUST use the standardized 2-option pattern (Request Changes / Continue to Next Stage). The A/B/Other choices used for individual differences live inside the question file, not in the completion message
- **RESPECT ENABLED EXTENSIONS**: if applying a user's choice would introduce a violation of an enabled extension rule (e.g., security baseline, PBT), surface it as a blocking finding per that extension's rules and ask a follow-up clarification question before applying
- **SKIPPED UPSTREAM STAGES**: if the unit skipped NFR Requirements, NFR Design, or Infrastructure Design, mark those dimensions as N/A in `sync-report.md` rather than treating their absence as a finding
- **RE-ENTRY INTO CODE GENERATION**: Part 2 only — do not restart Part 1 planning when returning from Code Generation

## Completion Criteria
- Diff set is empty on a clean pass
- `sync-report.md` records every difference, every decision, and every applied resolution across all iterations
- `design-code-sync-questions.md` has no unanswered `[Answer]:` tags and no unresolved "Other" responses
- Stage marked complete for the unit in `aidlc-docs/aidlc-state.md`
- User explicitly approved the standardized 2-option completion message

## Error Handling
If design-code synchronization requires changes beyond the current unit's artifacts—specifically, to Inception phase artifacts or to the other unit's artifacts—see [error-handling.md](common/error-handling.md) for guidance on recovery procedures.
