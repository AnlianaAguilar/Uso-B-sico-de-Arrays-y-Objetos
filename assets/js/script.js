document.write('<p>Estadisticas centro medico ñuñoa</p>');

let radiologia = [
    {
        HORA: "11:00",
        ESPECIALISTA: "IGNACIO SCHULZ",
        PACIENTE: "FRANCISCA ROJAS",
        RUT: "9878782-1",
        PREVISION: "FONASA"
    },
    {
        HORA: "11:30",
        ESPECIALISTA: "FEDERICO SUBERCASEAUX",
        PACIENTE: "PAMELA ESTRADA",
        RUT: "15345241-3",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "15:00",
        ESPECIALISTA: "FERNANDO WURTHZ",
        PACIENTE: "ARMANDO LUNA",
        RUT: "16445345-9",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "15:30",
        ESPECIALISTA: "ANA MARIA GODOY",
        PACIENTE: "MANUEL GODOY",
        RUT: "17666419-0",
        PREVISION: "FONASA"
    },
    {
        HORA: "16:00",
        ESPECIALISTA: "PATRICIA SUAZO",
        PACIENTE: "RAMON ULLOA",
        RUT: "14989389-K",
        PREVISION: "FONASA"
    },
]


let traumatologia = [
    {
        HORA: "08:00",
        ESPECIALISTA: "MARIA PAZ ALTUZARRA",
        PACIENTE: "PAULA SANCHEZ",
        RUT: "15554774-5",
        PREVISION: "FONASA"
    },
    {
        HORA: "10:00",
        ESPECIALISTA: "RAUL ARAYA",
        PACIENTE: "ANGÉLICA NAVAS",
        RUT: "15444147-9",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "10:30",
        ESPECIALISTA: "MARIA ARRIAGADA",
        PACIENTE: "ANA KLAPP",
        RUT: "17879423-9",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:00",
        ESPECIALISTA: "ALEJANDRO BADILLA",
        PACIENTE: "FELIPE MARDONES",
        RUT: "1547423-6",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:30",
        ESPECIALISTA: "CECILIA BUDNIK",
        PACIENTE: "DIEGO MARRE",
        RUT: "16554741-K",
        PREVISION: "FONASA"
    },
    {
        HORA: "12:00",
        ESPECIALISTA: "ARTURO CAVAGNARO",
        PACIENTE: "CECILIA MENDEZ",
        RUT: "9747535-8",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "12:30",
        ESPECIALISTA: "ANDRES KANACRI",
        PACIENTE: "MARCIAL SUAZO",
        RUT: "11254785-5",
        PREVISION: "ISAPRE"
    }            
]

let dental = [
    {
        HORA: "8:30",
        ESPECIALISTA: "ANDREA ZUÑIGA",
        PACIENTE: "MARCELA RETAMAL",
        RUT: "11123425-6",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:00",
        ESPECIALISTA: "MARIA PIA ZAÑARTU",
        PACIENTE: "ANGEL MUÑOZ",
        RUT: "9878789-2",
        PREVISION: "ISAPRE"
    },
    {
        HORA: "11:30",
        ESPECIALISTA: "SCARLETT WITTING",
        PACIENTE: "MARIO KAST",
        RUT: "7998789-5",
        PREVISION: "FONASA"
    },
    {
        HORA: "13:00",
        ESPECIALISTA: "FRANCISCO VON TEUBER",
        PACIENTE: "KARIN FERNANDEZ",
        RUT: "18887662-K",
        PREVISION: "FONASA"
    },
    {
        HORA: "13:30",
        ESPECIALISTA: "EDUARDO VIÑUELA",
        PACIENTE: "HUGO SANCHEZ",
        RUT: "17665461-4",
        PREVISION: "FONASA"
    },
    {
        HORA: "14:00",
        ESPECIALISTA: "RAQUEL VILLASECA",
        PACIENTE: "ANA SEPULVEDA",
        RUT: "14441281-0",
        PREVISION: "ISAPRE"
    }
]


var texto = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

// for (let i = 0; i < radiologia.length; i++){
//     texto += `<tr>
//                 <td>${radiologia[i].HORA}</td>
//                 <td>${radiologia[i].ESPECIALISTA}</td>
//                 <td>${radiologia[i].PACIENTE}</td>
//                 <td>${radiologia[i].RUT}</td>
//                 <td>${radiologia[i].PREVISION}</td>
//             </tr>`
// }




radiologia.forEach(visita => {
    texto += `<tr>
                <td>${visita.HORA}</td>
                <td>${visita.ESPECIALISTA}</td>
                <td>${visita.PACIENTE}</td>
                <td>${visita.RUT}</td>
                <td>${visita.PREVISION}</td>
            </tr>`
});

document.getElementById("cuerpo_tabla").innerHTML = texto


//Primera y ultima atención paciente Radiologia
let primeroRadiologia = radiologia[0].PACIENTE +"-"+ radiologia[0].PREVISION
let ultimoRadiologia = radiologia[radiologia.length-1].PACIENTE +"-"+ radiologia[radiologia.length-1].PREVISION

document.getElementById("parrafo").innerHTML += `<h2> - RADIOLOGÍA</h2><p>Primera atención: ${primeroRadiologia} </p><p>Última atención: ${ultimoRadiologia}</p> <hr/>`  


//Primera y ultima atención paciente Radiologia
let primero_traumatologia = traumatologia[0].PACIENTE +"-"+ traumatologia[0].PREVISION
let ultimo_traumatologia = traumatologia[traumatologia.length-1].PACIENTE +"-"+ traumatologia[traumatologia.length-1].PREVISION

document.getElementById("parrafo").innerHTML += `<h2> - TRAUMATOLOGÍA</h2><p>Primera atenvión: ${primero_traumatologia}</p><p>Última atención: ${ultimo_traumatologia}</p><hr/>`

// Primera y última atención paciente Dental
let primero_dental = dental[0].PACIENTE +"-"+ dental[0].PREVISION
let ultima_dental = dental[dental.length-1].PACIENTE +"-"+ dental[dental.length-1].PREVISION

document.getElementById("parrafo").innerHTML += `<h2> - DENTAL</h2><p>Primera atención: ${primero_dental}<p/><p>Última atención: ${ultima_dental}</p><hr/>` 