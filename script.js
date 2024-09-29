const table = document.querySelector("#tab");
const form = document.querySelector("#form");

const createTable = (el) => {
    let data = [];
    return {
        render: () => {
            let tab = `<table class="table table-striped">`;
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

const createForm = (el) => {
    let callback = null;
    let data;
    return {
        setLabel: (info) => {
            data = info;
        },
        onsubmit: (cbk) => {
            callback = cbk;
        },
        render: () => {
            el.innerHTML =
            data.map((element,index) => {
                console.log(element);
                let type = "text";
                if(index === 1) type = "number";
                return `
                 <label class="form-label">` + element +`</label>
                 <input type=`+ type + ` class="form-control" id=`+ element + ` placeholder=`+ element +`>
                `
            }).join("");
            el.innerHTML += `<button type="button" class="btn btn-primary" id="sub">SUB</button>`;

            document.querySelector("#sub").onclick = () => {
                const result = data.map((name) => {
                    const values = document.querySelector("#" + name).value;
                    document.querySelector("#" + name).value = ""; 
                    return values;
                });
                callback(result);
            };
        }
    }
}

const t = createTable(table);
const f = createForm(form);
f.setLabel(["squadra","punti"]);
f.onsubmit((result => {
    t.add(result);
    t.render();
}));
f.render();