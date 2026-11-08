# MLT 107 Bacteriology Explorer — Units 6 and 7

A local, browser-based course reference built with HTML, CSS, and JavaScript. The project includes the original Unit 6 and Unit 7 PDFs so readers can consult the source wording, tables, figures, and printed page numbers directly.

## Run locally

1. Extract the project ZIP archive.
2. Keep all files together in the same folder:
   - `index.html`
   - `styles.css`
   - `data.js`
   - `unit-7-data.js`
   - `app.js`
   - `source.html`
   - `unit-6-bacteriology-part-3.pdf`
   - `unit-7-anaerobes.pdf`
3. For the most reliable embedded PDF viewing, open a terminal in the folder and run:

   ```bash
   py -m http.server 8000
   ```

4. Open `http://localhost:8000` in a browser.

You can also double-click `index.html` to run the explorer. If your browser does not display a local PDF in the embedded viewer, use the **Open in new tab** or **Download PDF** controls.

No installation, Node.js, npm, database, or internet connection is required for local use.

## Navigation

- Use the lesson tabs at the top to switch between lessons.
- On the overview, units are grouped separately and each has a link to its original PDF.
- Expand a plus sign in a taxonomy map to reveal the next taxonomic level.
- Select an organism or topic name to view its course material.
- Expand content headings to read detailed material.
- Expand **Topic objectives** to browse the objectives the tests are based on.
- Use the search field to find organisms, biochemical tests, and objective wording.
- Use **Source PDFs** or the links at the bottom of content sections to open the corresponding original document and, where page references are available, jump to the relevant PDF page.

## Editing content

- `data.js` contains Unit 6 content.
- `unit-7-data.js` contains Unit 7 content and its taxonomy structure.
- `app.js` controls behavior and `styles.css` controls appearance.
- `source.html` provides a shared viewer for both original PDFs.

New units can be added as separate data files and loaded before `app.js`, without redesigning the interface.

## Source and transcription notes

Unit 6 content remains in the project from the previous version. Unit 7 content and printed page references are based on the uploaded **Unit 7 Anaerobes.pdf**. The Unit 7 source tables and figures are retained in the original PDF; some image-based tables and flowcharts are referenced from the relevant source page rather than fully recreated as HTML tables. The course PDF remains the reference for exact visual table layouts and any content not transcribed into the explorer.
