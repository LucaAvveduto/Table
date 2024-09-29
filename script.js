const table = document.querySelector("#tab");
const form = document.querySelector("#form");

const createTable = (el) => {
    let data = [];
    return {
        render: () => {
            let tab = `<table class="class=table table-striped">`;
            tab += data.map((row) => 
                "<tr>" + row.map((col) => 
                "<td>" + col + "</td>"
                ).join("")
            ).join("") + "</tr>";
            tab += "</table>";
            el.innerHTML = tab;
        },
        add: (dat) => {
            data.push(dat);
        }
    };
}

const t = createTable(table);
t.add(["inter","20"]);
t.add(["inter","20"]);
t.render();
console.log(table)