import termsEN from './termsEN'

export default {
    "nav": {
        "home": "Home",
        "map": "Map",
        "team": "Team",
        "contact": "Contact",
        "about": "About",
        "login": "Sign In",
        "profile": "My Profile",
        "dashboard": "Dashboard",
        "logout": "Logout",
        "msgLogout": "bye bye see you!"
    },
    "dashboard": {
        "nav": {
            "home": "Home",
            "infos": "Information",
            "newLayer": "New Layer",
            "keywords": "keywords",
            "layer": "Layers"
        },
        "home":{
            "dashboard": "Dashboard",
            "notifications": "Notifications",
            "myLayers": "My Layers",
            "sharedLayers": "Shared Layers"
        },
        "newLayer": {
            "name": "Name",
            "keywords": "Keywords",
            "collaborators": "Collaborators",
            "description": "Description",
            "reference": "Reference",
            "addedReferences": "Addes References",
            "add": "Add Reference",
            "submit": "Submit",
            "fileInput": "File Input",
            "zipFile": "ZIP File",
            "nameD": "Layer name. It is unique in the system.",
            "keywordsD": "Keyword is a tag/label related to the layer, which indicates what type it belongs, such as streets, addresses, crimes and so on.",
            "collaboratorsD": "Collaborators are the people who can add, edit or remove the vectors from the layer. Vectors are the geometries from the layer, such as a point, line, or polygon.",
            "descriptionD": "Description is a description/information about the layer.",
            "referenceD": "Reference is the source of that data, whether it is from a book, article, dissertation or so on. It should be in the ABNT format.",
            "epsgD": "It is the projection of the Shapefile, a integer number, for example 4326",
            "fileInputD": "The file that will be inserted is a ZIP compressed file that contains the Shapefile to be sent. Inside this ZIP file should contains all the files of a Shapefile, such as “.shp“, “.prj“, “.dbf“ and so on.",
            "chooseFile": "Choose file",
            "temporalColumns": "Temporal Columns",
            "lblStartDate": "Start date",
            "lblEndDate": "End date",
            "lblStartDateColumn": "Start date column",
            "lblEndDateColumn": "End date column",
            "lblStartDateMask": "Start date mask",
            "lblEndDateMask": "End date mask",
            "startDate": "Start date of the temporal bounding box of the layer. This is the start date of the period that covers the layer data. For example: the layer has the period from 01-01-1900 to 31-12-1930. Hence the start date is 01-01-1900.",
            "endDate": "End date of the temporal bounding box of the layer. This is the end date of the period that covers the layer data. For example: the layer has the period from 01-01-1900 to 31-12-1930. Therefore the end date is 31-12-1930.",
            "startDateColumn": "It indicates which column contains the start date of the layer.",
            "endDateColumn": "It indicates which column contains the end date of the layer.",
            "startDateMask": "It indicates which mask is used by the start date of the layer.",
            "endDateMask": "It indicates which mask is used by the end date of the layer.",
            "mountLayer": {
                "btnRadio": {
                    "import": "IMPORT FILE",
                    "create": "CREATE EMPTY LAYER"
                },
                "lblAttr": "Attributes",
                "lblAttrD": "Add the attributes of the new layer. It can NOT: start with numbers, have accents, special characters, whitespaces and be reserved name.",
                "boxAttr": {
                    "lblColumnName": "Column Name",
                    "lblColumnType": "Column Type",
                    "msgAlertRemove": "Are you sure you want to delete the column?",
                    "btnAlert": {
                        "no": "no",
                        "yes": "YES"
                    }
                }
            }
        },
        "editLayer": {
            "delete": "Delete",
            "layer": "Layer Edit",
            "editLayer": "Edit Layer"
        },
        "keywords":{
            "keywords": "Keywords",
            "newKeyword": "New Keyword",
            "myKeywords": "My Keywords",
            "nameD": "Name of the new keyword. It is unique in the system.",
            "name": "Name"
        }
    },
    "login": {
        "inputEmail": "Email address",
        "inputPassword": "Password",
        "register": "Register now",
        "btnText": "Login",
        "terms": "If you sign in with the social network, you automatically agree to the terms of the project.",
        "lbReadme": "read the terms here",
        "msg": {
            "success": "WELCOME",
            "err404": "<strong>Email</strong> or <strong>password</strong> incorrect!",
            "err409": "You have <strong>not yet confirmed your email</strong>, access your email box and confirm it by following instructions!"
        }
    },
    "home":{
      "title1": "Which is?",
      "title2": "How?",
      "title3": "When will it be ready?",
      "title4": "How to cite?",
      "column1": "Pauliceia 2.0 is a platform that aims to make the collaborative mapping of the history of São Paulo in the period from  1870 to 1940.",
      "column2": `Through the interface of the platform, researchers and scholars of the city can share their spatial data sets, as long as they are spatially localizable.<br>
                   In this way, a historical cartographic base of the city will be enriched at each feeding, making this data also available to all.<br>
                   On the other hand, the user that collaborates will thus have a map or a view of his own research.`,
      "column3": "A beta is currently available for testing. The final version is scheduled for january 2019.",

    },
    "contact":{
      "title1": "Collaborative mapping of the history of São Paulo (1870-1940).",
      "contact": "Contact us:",
      "links": "USEFUL LINKS",
      "institutional": "Institutional",
      "platforms": "Platforms / Free Softwares",
      "base": "Cartographic base",
    },
  "about":{
    "title1": "Who developed it?",
    "title2": "Who finaced it?",
    "title3": "What technology is used?",
    "title4": "Realization:",
    "title5": "Support:",
    "title6": "Financing:",
    "title7": "Who are we?",
    "text1": `The project is a partnership between UNIFESP (Campus of Guarulhos and São José dos Campos), the State Archive of SP, INPE (National Institute for Space Research) and Emory University (United States). <br>
              But the concept of "open science" that guides the project makes it a friendly initiative to involve all stakeholders in various stages of its implementation.`,
    "text2": "The project was one of the four contemplated by the call eScience 2016 of FAPESP (Foundation for Research Support of the State of São Paulo), which stimulates collaboration between computer science and other areas of knowledge.",
    "text3": `The Pauliceia 2.0 platform is open source, web-based and service-oriented. It is implemented using the GIS library TerraLib and the web geoportal framework TerraBrasilis developed by INPE. The team also uses the gvSIG software, free alternative to open GIS.<br>
              The platform is implemented based on the Single Page Application (SPA) concept using the framework Vue.js developed in JavaScript language and the tools jQuery and OpenLayers.`,
    "name1": "Luís Ferla - coordinator",
    "desc1": "Luis Ferla is professor of contemporary history at Unifesp. In this University, he coordinates the research group Himaco (History, maps and computers) and lab.hum (Laboratory of Digital Humanities). Together with Karine Reis Ferreira, he is one of the coordinators of the project",
    "name2": "Karine Reis Ferreira - coordinator",
    "desc2": "Karine Reis is PhD in Applied Computer by the National Institute For Space Research (INPE), she works since 2003 on researching in geoinformatics and on geographic information systems development such as TerraLib TerraView and TerraBrasilis. She is professor of the Applied Computer Graduate Course at INPE and her main research topic is representation, processing and analysis of big spatiotemporal data and temporal GIS development.",
    "name3": "Andrew Graham Britt",
    "desc3": "Andrew G. Britt is a historian of Latin America (Brazil) and a digital scholarship developer. He is currently a Postdoctoral Fellow at Northwestern University and a member of the project team.",
    "name4": "Ana Maria Alves Barbour",
    "desc4": "Ana Maria Barbour is a journalist, historian and currently pursuing her master's degree in History at Unifesp. She is a collaborator in the Pauliceia 2.0 project.",
    "name5": "Cíntia Rodrigues de Almeida",
    "desc5": "Cintia Rodrigues de Almeida is majoring History at UNIFESP and has a research scholarship given by FAPESP.",
    "name6": "Carlos Alberto Noronha",
    "desc6": "Carlos Noronha, is a IC student at INPE and software developer with emphasis on web systems.",
    "name7": "Cristiane Regina Myiasaka",
    "desc7": "Cristiane Miyasaka, Ph.D, is a member of Hímaco (Unifesp). Coordinates the historical address database team.",
    "name8": "Daniela Leal Musa",
    "desc8": "Daniela Musa is professor at the Institute of Science and Tecnology of the Federal University of São Paulo (UNIFESP), Brazil. Her research interests include Databases, Semantic Web and spatial-temporal data.",
    "name9": "Ester Dantas Reis Nunes",
    "desc9": "Ester Reis, is a history student at EFLCH/UNIFESP, FAPESP scholarship about the use of the Geographic Information System (GIS) in historical research.",
    "name10": "Denis Taveira de Lima",
    "desc10": "Denis Taveira is a student of Computer Engineering at UNIFESP and a fellowship of Scientific Initiation at INPE by FAPESP. He is one of the responsible to development of the web platform of Pauliceia 2.0.",
    "name11": "Fernando Atique",
    "desc11": "Fernando Atique is Architect and Town Planner. Professor of History, Space and Built Heritage at EFLCH/UNIFESP. He contributed with spatial and historical data with the project.",
    "name12": "Eduardo de Souza Goiabeira",
    "desc12": "Eduardo Goiabeira holds a degree in History from EFLCH /UNIFESP.  FAPESP is one of the tools for creating a project database.",
    "name13": "Jeffrey Lesser",
    "desc13": "Jeffrey Lesser is a historian of Brazil and the Director of the Halle Institute for Global Research at Emory University, the international partner for the Project supported by FAPESP.",
    "name14": "Gabriel Sansigolo",
    "desc14": "Gabriel Sansigolo is taking master's degree in Applied Computation by the National Institute of Space Research. Technologist in Analysis and Development of Systems. Has IT Technician for Internet.",
    "name15": "Luanna M. do Nascimento",
    "desc15": "Luanna Nascimento is majoring History at UNIFESP and has a research scholarship given by FAPESP to the Project Pauliceia 2.0.",
    "name16": "Gilberto Ribeiro de Queiroz",
    "desc16": "Gilberto is an Associate Professor of Geoinformatics at INPE with a PhD in Applied Computing. In the Pauliceia 2.0 project he is involved with the conceptual design of the computational platform.",
    "name17": "Monaliza Caetano",
    "desc17": "Monaliza Caetano, is a historian, graduated in Federal University of São Paulo. She is one of the scholarship of the Project supported by FAPESP.",
    "name18": "Nandamudi Vijaykumar",
    "desc18": "N. L. Vijaykumar (Vijay) has experience in Software Engineering, Model Based Testing and Performance Evaluation. He is retired and Voluntary Collaborator at the Laboratory of Computing and Applied Mathematics (LAC) of the National Institute for Space Research (INPE).",
    "name19": "Orlando Guarnier Farias",
    "desc19": "Orlando Guarnier is an history student from EFLCH/UNIFESP and member of Hímaco group.",
    "name20": "Rodrigo Monteiro Mariano",
    "desc20": "Rodrigo Mariano is Systems Analyst and Developer, a Master's student at INPE in the area of Geocomputing. Its main activity in the project is the development of the data of the platform, since the control of users, layers, manipulation of spatiotemporal data, until the control of notifications and denunciations.",
    "name21": "Priscila Machado Meireles",
    "desc21": "Priscila Meireles is Architect and Urbanist, Specialist in Graphic Design. As a collaborator of the project she developed the Visual Identity elements, which include the creation of the \"Pauliceia 2.0\" brand, as well as web design: website and platform.",
    "name22": "Thomas Rogers",
    "desc22": "Thomas Rogers is Associate Professor of History at Emory University. He was co-coordinator of the FAPESP SPRINT grant that connected Emory to UNIFESP for Pauliceia 2.0.",
    "name23": "Vitória Martins Fontes da Silva",
    "desc23": "Vitoria Martins Fontes is a graduate student in History at EFLCH/UNIFESP. She is a scientific initiation scholarship student (PIBIC), by the group Hímaco. Participates in the composition of the Paulicea 2.0 database.",
    "name24": "Wania Mazzarello",
    "desc24": "Wania has a degree in history. She acts as a researcher, consultant and teacher. Has a research interest in urban history, identity, memory and technology. In the Project, he acts in the team that makes possible the introduction of the Pari area in the scope of the platform.",
  },
    "register": {
        "title": "Register",
        "lbName": "Name",
        "lbEmail": "Email address",
        "lbUsername": "Username",
        "lbPassword": "Password",
        "lbCheckNotification": "Receive notification by email",
        "lbCheckAgree": "I agree to the terms of use.",
        "lbReadme": "read the terms here",
        "btnTitle": "Register",
        "lbToLogin": "Are you already registered?",
        "lbToLoginLink": "CLICK HERE",
        "msg": {
            "success": "your registration is almost ready. Just access your email and follow the instructions.",
            "emptyField": "ERROR: complete all fields!",
            "err500": "Error internal server - contact your administrator",
            "err409": "<strong>email</strong> or <strong>username</strong> already exists in our system."
        }
    },
    "validEmail": {
        "msgSuccess": "Hello, your email was <strong>successfully</strong> validated! Now just <i>log in</i> to access the system.",
        "msgErr": "Error while validating your Email. Invalid link!"
    },
    "validSocial": {
        "msgSuccess": "WELCOME",
        "msgErr": "Error logging in. Invalid link!"
    },
    "map":{
        "geocoding": {
            "label":  {
                "search": "Search address",
                "geocoding": "Search for an address via CSV"
            },
            "placeholder": "street name, number, year",
            "btnText": "Search",
            "popupInfo": {
                "search": `
                    To search for an address, write it in the following structure street name, number (just a number), year (just a number). <br><strong>Ex: rua da consolaçao, 42, 1931</strong>
                `,
                "geocoding": `
                    <b>1st Step:</b> Verify if the CSV file are following the rules.<br>
                    <b>Rules:</b> First header line, written addresses in first column, one per line, following structure street name , number, year<br>
                    <b>2nd Step:</b> Through the Browse button, selecting your CSV file, display the addresses found on the map.<br>
                    <b>3nd Step:</b> Through the Download button, it's possible to download the found data in Shapefile format.
                `              
            }
        },
        "sidebarLayer": {
            "title": "Layers",
            "btnAdd": "Add and remove layers",
            "options": {
                "zoom": "Zoom",
                "infosLayer": "Layer information",
                "infosVector": "Information about objects",
                "editColor": "Edit color",
                "download": "Download"
            },
            "msgEmpty": "Add layers to the view on the map!"
        },
        "sidebarEdit": {
            "title": "Edit"      
        },
        "addLayer": {
            "title": "Add and remove layers",
            "input": "Search by theme, layer or author:",
            "close": "Close",
            "box": {
                "lbTitle": "TITLE",
                "lbAuthors": "AUTHORS",
                "lbTags": "TAGS"
            },
            "btns": {
                "active": "Active",
                "disable": "Disable"
            },
            "msg": {
                "errTitle": "Internal Error",
                "errMsg": "Service not available, try again later or report our support!"
            }
        },
        "viewInfo": {
            "btnFollow": "Follow Layer",
            "btnUnFollow": "Unfollow Layer",
            "lbDescription": "DESCRIPTION",
            "lbTags": "TAGS",
            "lbAuthors": "AUTHORS",
            "lbDate": "CREATION DATE",
            "lbReferences": "REFERENCES",
            "lbNotifications": "Notifications"
        },
        "viewInfoVector": {
            "title": "Select Information",
            "btnFeature": "By location",
            "btnBox": "By region",
            "btnClean": "Clean"
        }
    },
    "terms": {
        "title": "USE TERMS",
        "text": termsEN
    }
}
