const cy = cytoscape({
    container: document.getElementById("cy"),
    elements: [
      { data: { id: "q0" } },
      { data: { id: "q1" } },
      { data: { id: "q2" } },
      { data: { id: "q3" } },
      { data: { id: "q4" } },
      { data: { id: "q5" } },
      { data: { id: "q6" } },
      { data: { id: "q7" } },
      { data: { id: "q8" } },
      { data: { id: "q9" } },
      { data: { id: "q10" } },
      { data: { id: "q11" } },
      { data: { id: "q12" } },
      { data: { id: "q13" } },
      { data: { id: "q14" } },
      {
        data: { id: "e0", source: "q0", target: "q1", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e1", source: "q1", target: "q2", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e2", source: "q2", target: "q3", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e3", source: "q3", target: "q4", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e4", source: "q3", target: "q5", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e5", source: "q4", target: "q5", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e6", source: "q5", target: "q6", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e7", source: "q6", target: "q7", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e8", source: "q6", target: "q8", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e9", source: "q7", target: "q8", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e10", source: "q8", target: "q9", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e11", source: "q9", target: "q10", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e12", source: "q9", target: "q11", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e13", source: "q10", target: "q11", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e14", source: "q11", target: "q12", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e15", source: "q12", target: "q13", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e16", source: "q12", target: "q14", label: "5" },
        classes: "transition",
      },
      {
        data: { id: "e17", source: "q13", target: "q14", label: "5" },
        classes: "transition",
      },

      {
        data: { id: "e9", source: "q9", target: "q10", label: "5" },
        classes: "transition",
      },
    ],
    style: [
      {
        selector: "node",
        style: {
          "background-color": "#fff",
          color: "white",
          label: "data(id)",
        },
      },
      {
        selector: "edge#e4",
        style: {
          "padding-top": "5px",
          color: "red",
        },
      },
      {
        selector: "edge",
        style: {
          width: 2,
          "line-color": "#9998",
          color: "white",
          "curve-style": "bezier", // Usar 'bezier' para las flechas
          "target-arrow-shape": "triangle",
          label: "data(label)",
          "text-rotation": "autorotate",
        },
      },
      {
        selector: "#q2, #q5, #q8, #q11,#q14",
        style: {
          "border-color": "green", // Color del borde
          "border-width": "2px", // Grosor del borde
          "background-color": "white", // Color de fondo
          "border-opacity": "1",
          shape: "ellipse", // Forma del nodo
          "text-outline-color": "green", // Color del texto
          "text-outline-width": "2px", // Grosor del texto
        },
      },
    ],
    layout: {
      name: "grid",
      rows: 1,
      spacingFactor: 1,
    },
  });

  const node4 = cy.$("#q4");
  node4.position({ x: node4.position("x"), y: node4.position("y") + 60 });
  const node7 = cy.$("#q7");
  node7.position({ x: node7.position("x"), y: node7.position("y") + 60 });
  const node10 = cy.$("#q10");
  node10.position({
    x: node10.position("x"),
    y: node10.position("y") + 60,
  });
  const node13 = cy.$("#q13");
  node13.position({
    x: node13.position("x"),
    y: node13.position("y") + 60,
  });

  cy.fit();
  cy.reset();
  cy.width()