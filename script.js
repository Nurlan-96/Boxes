const boxes = document.querySelectorAll(".storage > .box");
const areas = document.querySelectorAll(".areas > .area");

boxes.forEach(box => {
    box.addEventListener("dragstart", () => {
        box.classList.add("dragging");
    });

    box.addEventListener("dragend", () => {
        box.classList.remove("dragging");
    });
});

areas.forEach(area => {
    area.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        if (dragging.id === area.id) {
            dragging.style.backgroundColor = "green";
        } else {
            dragging.style.backgroundColor = "red";
        }
    });

    area.addEventListener('drop', e => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        if (dragging.id === area.id) {
            area.appendChild(dragging);
            area.style.backgroundColor = "";
        }
        else alert("box number must match area number!")
    });
});
