(() => {
  "use strict";
  const data = window.COURSE_DATA;
  const view = document.getElementById("contentView");
  const breadcrumb = document.getElementById("breadcrumb");
  const lessonTabs = document.getElementById("lessonTabs");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  let activeId = "home";
  let activeLessonId = null;
  let expandedIds = new Set();

  const lessons = data.units.flatMap(unit => unit.lessons);
  const unitById = new Map(data.units.map(unit => [unit.id, unit]));
  const unitForLesson = lesson => data.units.find(unit => unit.lessons.some(item => item.id === lesson?.id));

  function sourceLink(lesson, printedPages, label = "View source PDF") {
    const unit = unitForLesson(lesson);
    if (!unit?.sourceFile) return "";
    const firstPrintedPage = Number(String(printedPages || "").match(/\d+/)?.[0]);
    const pdfPage = Number.isFinite(firstPrintedPage) && unit.printedPageStart
      ? Math.max(1, firstPrintedPage - unit.printedPageStart + 1)
      : null;
    const url = `source.html?unit=${encodeURIComponent(unit.id)}${pdfPage ? `&page=${pdfPage}` : ""}`;
    return `<a class="source-inline-link" href="${url}">${escapeHtml(label)}${printedPages ? ` · p. ${escapeHtml(printedPages)}` : ""} ↗</a>`;
  }
  const objectiveById = new Map();
  lessons.forEach(lesson => lesson.topics.forEach(objective => {
    objectiveById.set(objective.id, { ...objective, lesson });
  }));

  const escapeHtml = value => String(value ?? "").replace(/[&<>\"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));

  const allNodes = [];
  const walk = (nodes, lesson, ancestors = []) => (nodes || []).forEach(node => {
    allNodes.push({ ...node, lesson, ancestors });
    if (Array.isArray(node.children)) {
      node.children.forEach(child => {
        if (typeof child === "string") {
          allNodes.push({
            id: `outline-${node.id}-${child}`, title: child, type: "outline", lesson,
            ancestors: [...ancestors, node], parentId: node.id, sections: [], pages: node.pages
          });
        } else {
          walk([child], lesson, [...ancestors, node]);
        }
      });
    }
  });
  lessons.forEach(lesson => walk(lesson.branches, lesson));
  const nodeById = new Map(allNodes.map(node => [node.id, node]));

  function setBreadcrumb(parts) {
    breadcrumb.innerHTML = parts.map((part, index) =>
      `${index ? '<span>/</span>' : ''}${escapeHtml(part)}`
    ).join(" ");
  }

  function renderLessonTabs(selectedId = null) {
    lessonTabs.innerHTML = `
      <button class="lesson-tab${selectedId ? "" : " is-active"}" type="button" data-home="true">Overview</button>
      ${lessons.map(lesson => `
        <button class="lesson-tab${lesson.id === selectedId ? " is-active" : ""}" type="button" data-lesson="${escapeHtml(lesson.id)}">
          <span class="tab-code">${escapeHtml(lesson.code)}</span>
          <span>${escapeHtml(lesson.title)}</span>
        </button>`).join("")}`;
  }

  function renderBullets(items) {
    return `<ul>${(items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderSections(sections, { firstOpen = false, lesson = null } = {}) {
    if (!sections || !sections.length) {
      return `<div class="empty-state"><strong>Outline entry</strong>Detailed source information has not yet been entered for this entry.</div>`;
    }
    return sections.map((section, index) => `
      <details class="detail-section" ${firstOpen && index === 0 ? "open" : ""}>
        <summary>
          <span class="section-title">${escapeHtml(section.title)}</span>
          <span class="section-meta">p. ${escapeHtml(section.page || "—")}</span>
        </summary>
        <div class="section-body">${renderBullets(section.bullets || [])}${lesson ? sourceLink(lesson, section.page) : ""}</div>
      </details>`).join("");
  }

  function branchChildren(branch) {
    if (Array.isArray(branch.children)) {
      const parent = branch.ref ? nodeById.get(branch.ref) : null;
      return branch.children.map(child => {
        if (typeof child !== "string") return child;
        return { ref: `outline-${parent?.id || "group"}-${child}`, label: child, type: "outline" };
      });
    }
    const node = branch.ref ? nodeById.get(branch.ref) : null;
    return (node?.children || []).map(child => typeof child === "string"
      ? { ref: `outline-${node.id}-${child}`, label: child, type: "outline" }
      : { ref: child.id });
  }

  function collectPaths(branch, ancestors, paths, branchById) {
    const node = branch?.ref ? nodeById.get(branch.ref) : null;
    if (node) { paths.set(node.id, ancestors); branchById.set(node.id, branch); }
    const next = node ? [...ancestors, node.id] : ancestors;
    branchChildren(branch || {}).forEach(child => collectPaths(child, next, paths, branchById));
  }

  function renderTreeBranch(branch, paths, ancestors = [], depth = 0) {
    if (typeof branch === "string") branch = { label: branch, type: "outline" };
    const node = branch?.ref ? nodeById.get(branch.ref) : null;
    const id = node?.id || null;
    const children = branchChildren(branch || {});
    const title = branch?.label || node?.title || "Group";
    const rank = branch?.type || node?.type || "group";
    const selected = Boolean(id && id === activeId);
    const expanded = id ? expandedIds.has(id) : expandedIds.has("__root__");
    if (node) paths.set(node.id, ancestors);

    const name = node && ["genus", "species", "outline"].includes(node.type)
      ? `<i>${escapeHtml(title)}</i>` : escapeHtml(title);

    const row = node ? `
      <div class="tree-row" style="--depth:${depth}">
        <button class="tree-toggle${children.length ? "" : " is-leaf"}" type="button"
          ${children.length ? `data-expand="${escapeHtml(id)}" aria-expanded="${expanded}" aria-label="${expanded ? "Collapse" : "Expand"} ${escapeHtml(title)}"` : "disabled aria-hidden=\"true\""}>
          ${children.length ? (expanded ? "−" : "+") : "·"}
        </button>
        <button class="tree-select${selected ? " is-selected" : ""}" type="button" data-node="${escapeHtml(id)}" aria-current="${selected ? "true" : "false"}">
          <span class="tree-rank">${escapeHtml(rank)}</span>
          <span class="tree-name">${name}</span>
          ${children.length ? `<span class="tree-count">${children.length}</span>` : ""}
          ${node.type === "outline" ? `<span class="pending-label">outline</span>` : ""}
        </button>
      </div>` : `
      <div class="tree-root-label">
        <span class="tree-rank">${escapeHtml(rank)}</span>
        <span class="tree-name">${escapeHtml(title)}</span>
      </div>`;

    const nextAncestors = node ? [...ancestors, node.id] : ancestors;
    const childrenMarkup = children.length && expanded
      ? `<div class="tree-children">${children.map(child => renderTreeBranch(child, paths, nextAncestors, depth + 1)).join("")}</div>`
      : "";
    return `<div class="tree-branch${selected ? " is-current" : ""}">${row}${childrenMarkup}</div>`;
  }

  function renderSharedContext(pathIds, lesson) {
    const contexts = pathIds.map(id => nodeById.get(id)).filter(node =>
      node && node.sections?.length && ["family", "tribe", "genus"].includes(node.type)
    );
    if (!contexts.length) return "";
    return `
      <section class="shared-context-wrap">
        <div class="subsection-label">Shared characteristics from parent groups</div>
        ${contexts.map(group => `
          <details class="shared-group">
            <summary>
              <span>${escapeHtml(group.type)} · ${escapeHtml(group.title)}</span>
              <span class="section-meta">pp. ${escapeHtml(group.pages || "—")}</span>
            </summary>
            <div class="shared-group-content">${renderSections(group.sections, { lesson })}</div>
          </details>`).join("")}
      </section>`;
  }

  function renderDetailPanel(node, pathIds) {
    if (!node) {
      return `<aside class="detail-panel"><div class="empty-state"><strong>Select an entry</strong>Choose a family, genus, or species in the taxonomy tree to see its course material.</div></aside>`;
    }
    const isScientific = ["genus", "species", "outline"].includes(node.type);
    const ancestors = pathIds.map(id => nodeById.get(id)).filter(Boolean);
    const path = [...ancestors, node].map((part, index, array) =>
      `${index ? '<span class="path-separator">›</span>' : ""}<span class="${index === array.length - 1 ? "path-current" : ""}">${escapeHtml(part.title)}</span>`
    ).join("");
    const objectives = (node.objectives || []).map(id => objectiveById.get(id)).filter(Boolean);
    const outlineNotice = node.type === "outline" ? `
      <div class="outline-notice">This organism is named in the course PDF, but its detailed entry has not yet been transcribed.</div>` : "";

    return `
      <aside class="detail-panel" aria-label="Selected taxonomy entry">
        <div class="detail-panel-head">
          <div class="detail-kicker">${escapeHtml(node.type || "entry")}</div>
          <h2>${isScientific ? `<i>${escapeHtml(node.title)}</i>` : escapeHtml(node.title)}</h2>
          <div class="detail-path">${path}</div>
          <div class="detail-meta">
            <span>PDF pp. ${escapeHtml(node.pages || "not assigned")}</span>
            ${objectives.length ? `<span>${objectives.map(o => escapeHtml(o.code)).join(" · ")}</span>` : ""}
          </div>
        </div>
        ${outlineNotice}
        ${node.sections?.length ? `<div class="detail-source-content">${renderSections(node.sections, { firstOpen: true, lesson: node.lesson })}</div>` : ""}
        ${renderSharedContext(pathIds, node.lesson)}
        ${!node.sections?.length && node.type !== "outline" ? `<div class="empty-state"><strong>Content not entered yet</strong>This entry is present in the taxonomy, but its detailed source material is not yet in the content database.</div>` : ""}
      </aside>`;
  }

  function renderObjectiveDrawer(lesson) {
    return `
      <details class="objective-drawer">
        <summary>
          <span><strong>Topic objectives</strong><small>Use these to browse the material the tests are based on.</small></span>
          <span class="objective-count">${lesson.topics.length} objectives</span>
        </summary>
        <div class="objective-list">
          ${lesson.topics.map(objective => `
            <button class="objective-row" type="button" data-objective="${escapeHtml(objective.id)}">
              <span class="objective-code">${escapeHtml(objective.code)}</span>
              <span>${escapeHtml(objective.title)}</span>
              <span class="objective-arrow">›</span>
            </button>`).join("")}
        </div>
      </details>`;
  }

  function renderExplorer(lesson, selectedId = null, { expandSelected = true } = {}) {
    if (activeLessonId !== lesson.id) {
      activeLessonId = lesson.id;
      expandedIds = new Set();
    }
    const tree = lesson.taxonomyTree?.root;
    const firstRef = branch => branch?.ref || branchChildren(branch || {}).map(child => child.ref).find(Boolean);
    const startId = selectedId || firstRef(tree);
    const selectedNode = nodeById.get(startId) || nodeById.get(selectedId);
    activeId = selectedId || startId || lesson.id;

    const paths = new Map();
    const branchById = new Map();
    if (tree) collectPaths(tree, [], paths, branchById);
    const selectedPath = paths.get(activeId) || selectedNode?.ancestors?.map(node => node.id) || [];
    selectedPath.forEach(id => expandedIds.add(id));
    const selectedBranch = branchById.get(startId) || { ref: startId };
    if (expandSelected && startId && selectedNode && branchChildren(selectedBranch).length) expandedIds.add(startId);
    if (!expandedIds.size) expandedIds.add("__root__");

    const unit = unitForLesson(lesson);
    setBreadcrumb(["MLT 107", unit?.code || "Course", lesson.code, selectedNode?.title || lesson.title]);
    renderLessonTabs(lesson.id);

    const rootNode = tree?.ref ? nodeById.get(tree.ref) : null;
    const treeMarkup = rootNode
      ? renderTreeBranch(tree, paths)
      : `<div class="tree-root-label root-group-label"><span class="tree-rank">${escapeHtml(tree?.type || "lesson group")}</span><span class="tree-name">${escapeHtml(tree?.label || lesson.title)}</span></div><div class="tree-children root-children">${branchChildren(tree || {}).map(child => renderTreeBranch(child, paths, [], 1)).join("")}</div>`;

    view.innerHTML = `
      <header class="lesson-header">
        <div class="eyebrow-dark">${escapeHtml(lesson.code)} · ${escapeHtml(unit?.code || "COURSE")}</div>
        <div class="lesson-title-row">
          <div><h1>${escapeHtml(lesson.title)}</h1><p>${escapeHtml(lesson.description)}</p></div>
          <span class="page-range">Printed pages<br><strong>${escapeHtml(lesson.pages)}</strong></span>
        </div>
      </header>
      ${renderObjectiveDrawer(lesson)}
      <div class="explorer-layout">
        <section class="taxonomy-panel" aria-label="Taxonomic branching tree">
          <div class="panel-heading">
            <div><h2>Taxonomic map</h2><p>Expand a group to reveal the next level. Select a name to view its material.</p></div>
          </div>
          <div class="taxonomy-scroll"><div class="taxonomy-tree">${treeMarkup}</div></div>
          <div class="map-footer"><span class="map-key"><i class="key-family"></i> Group</span><span class="map-key"><i class="key-organism"></i> Genus / species</span><span class="map-key"><i class="key-outline"></i> Details pending</span></div>
        </section>
        ${renderDetailPanel(selectedNode, selectedPath)}
      </div>`;
  }

  function renderObjective(objective) {
    activeId = objective.id;
    activeLessonId = objective.lesson.id;
    const unit = unitForLesson(objective.lesson);
    setBreadcrumb(["MLT 107", unit?.code || "Course", objective.lesson.code, objective.code]);
    renderLessonTabs(objective.lesson.id);
    const linked = (objective.contentIds || []).map(id => nodeById.get(id)).filter(Boolean);
    view.innerHTML = `
      <header class="lesson-header objective-page-header">
        <div class="eyebrow-dark">${escapeHtml(objective.code)} · ${escapeHtml(objective.lesson.title)}</div>
        <h1>Topic objective</h1>
        <p>${escapeHtml(objective.title)}</p>
      </header>
      <div class="objective-results">
        <div class="results-heading"><strong>Related course material</strong><span>${linked.length} entries</span></div>
        ${linked.map(node => `
          <details class="objective-entry">
            <summary>
              <span class="entry-rank">${escapeHtml(node.type)}</span>
              <span class="entry-name">${["genus", "species"].includes(node.type) ? `<i>${escapeHtml(node.title)}</i>` : escapeHtml(node.title)}</span>
              <span class="section-meta">pp. ${escapeHtml(node.pages || "—")}</span>
            </summary>
            <div class="objective-entry-content">
              ${(node.sections || []).length ? renderSections(node.sections, { lesson: node.lesson }) : `<p class="muted-copy">The PDF names this entry, but detailed material has not yet been transcribed.</p>`}
              <button class="text-link" type="button" data-node="${escapeHtml(node.id)}">Open in taxonomy map →</button>
            </div>
          </details>`).join("")}
      </div>`;
  }

  function renderHome() {
    activeId = "home";
    activeLessonId = null;
    setBreadcrumb(["MLT 107", "Course overview"]);
    renderLessonTabs(null);
    const objectives = lessons.flatMap(lesson => lesson.topics.map(topic => ({ ...topic, lesson })));
    const unitSections = data.units.map(unit => `
      <section class="unit-home-block" aria-label="${escapeHtml(unit.code)} lessons">
        <div class="unit-home-heading">
          <div class="eyebrow-dark">${escapeHtml(unit.code)}</div>
          <h2>${escapeHtml(unit.title)}</h2>
          <p>${escapeHtml(unit.description || "")}</p>
          ${unit.sourceFile ? `<a class="unit-source-link" href="source.html?unit=${encodeURIComponent(unit.id)}">Original ${escapeHtml(unit.code)} PDF ↗</a>` : ""}
        </div>
        <div class="home-lessons">
          ${unit.lessons.map(lesson => `
            <button class="home-lesson" type="button" data-lesson="${escapeHtml(lesson.id)}">
              <span class="home-lesson-code">${escapeHtml(lesson.code)}</span>
              <span class="home-lesson-title">${escapeHtml(lesson.title)}</span>
              <span class="home-lesson-description">${escapeHtml(lesson.description)}</span>
              <span class="home-lesson-meta">${lesson.topics.length} topic objectives <span>·</span> pp. ${escapeHtml(lesson.pages)}</span>
              <span class="home-lesson-arrow">→</span>
            </button>`).join("")}
        </div>
      </section>`).join("");
    view.innerHTML = `
      <section class="home-intro">
        <div class="eyebrow-dark">${escapeHtml(data.title)} · COURSE LIBRARY</div>
        <h1>Bacteriology Explorer</h1>
        <p>Browse each unit by lesson, taxonomy, or topic objective. Original course PDFs are available for direct reference.</p>
      </section>
      ${unitSections}
      <details class="all-objectives-drawer">
        <summary><strong>All topic objectives</strong><span>${objectives.length} objectives across ${data.units.length} units</span></summary>
        <div class="objective-list">
          ${objectives.map(objective => {
            const unit = unitForLesson(objective.lesson);
            return `
              <button class="objective-row" type="button" data-objective="${escapeHtml(objective.id)}">
                <span class="objective-code">${escapeHtml(objective.code)}</span>
                <span><small>${escapeHtml(unit?.code || "")} · ${escapeHtml(objective.lesson.title)}</small>${escapeHtml(objective.title)}</span>
                <span class="objective-arrow">›</span>
              </button>`;
          }).join("")}
        </div>
      </details>
    `;
  }

  function showSearchResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }
    const matches = [];
    for (const node of allNodes) {
      const searchable = [node.title, node.type, ...(node.sections || []).flatMap(section => [section.title, ...(section.bullets || [])])].join(" ").toLowerCase();
      if (searchable.includes(q)) matches.push(node);
    }
    for (const lesson of lessons) {
      for (const objective of lesson.topics) {
        if (`${objective.code} ${objective.title}`.toLowerCase().includes(q)) {
          matches.push({ id: objective.id, title: `${objective.code} · ${objective.title}`, type: "objective", lesson });
        }
      }
    }
    const unique = [...new Map(matches.map(match => [match.id, match])).values()].slice(0, 12);
    searchResults.hidden = false;
    searchResults.innerHTML = unique.length ? unique.map(match => `
      <button class="search-result" type="button" data-result="${escapeHtml(match.id)}">
        <strong>${escapeHtml(match.title)}</strong>
        <small>${escapeHtml(match.type)} · ${escapeHtml(unitForLesson(match.lesson)?.code || "Course")} · ${escapeHtml(match.lesson?.code || "")}</small>
      </button>`).join("") : `<div class="search-empty">No matches. Try an organism, test, or objective.</div>`;
  }

  lessonTabs.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.home) return renderHome();
    if (button.dataset.lesson) {
      const lesson = lessons.find(item => item.id === button.dataset.lesson);
      if (lesson) renderExplorer(lesson);
    }
  });

  view.addEventListener("click", event => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.lesson) {
      const lesson = lessons.find(item => item.id === target.dataset.lesson);
      if (lesson) renderExplorer(lesson);
      return;
    }
    if (target.dataset.objective) {
      const objective = objectiveById.get(target.dataset.objective);
      if (objective) renderObjective(objective);
      return;
    }
    if (target.dataset.expand) {
      const id = target.dataset.expand;
      if (expandedIds.has(id)) expandedIds.delete(id);
      else expandedIds.add(id);
      const lesson = lessons.find(item => item.id === activeLessonId);
      const selected = nodeById.get(activeId);
      if (lesson) renderExplorer(lesson, selected?.id || null, { expandSelected: false });
      return;
    }
    if (target.dataset.node) {
      const node = nodeById.get(target.dataset.node);
      if (node) renderExplorer(node.lesson, node.id);
    }
  });

  searchInput.addEventListener("input", () => showSearchResults(searchInput.value));
  searchResults.addEventListener("click", event => {
    const target = event.target.closest("button[data-result]");
    if (!target) return;
    const id = target.dataset.result;
    searchInput.value = "";
    searchResults.hidden = true;
    const objective = objectiveById.get(id);
    if (objective) return renderObjective(objective);
    const node = nodeById.get(id);
    if (node) return renderExplorer(node.lesson, node.id);
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".topbar-tools")) {
      searchResults.hidden = true;
    }
  });
  document.querySelector(".brand").addEventListener("click", event => {
    event.preventDefault();
    renderHome();
  });

  renderHome();
})();
