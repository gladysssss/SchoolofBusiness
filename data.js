var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.0803881277822285,
        "pitch": 0.02509870711472928,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": -1.960113160533684,
          "pitch": -0.3434160855174859,
          "rotation": 0.7853981633974483,
          "target": "1-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.921376149557517,
          "pitch": -0.08201030464195824,
          "title": "School of Business&nbsp;",
          "text": "Welcome to the School of Business! This is one of the two business buildings on campus. There is a cafe where students can grab a bite."
        }
      ]
    },
    {
      "id": "1-level-2",
      "name": "Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.8451301035350376,
        "pitch": 0.10630088478366417,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": 2.7329596841326937,
          "pitch": -0.0548326410522435,
          "rotation": 0,
          "target": "2-level-3"
        },
        {
          "yaw": 1.167628909653354,
          "pitch": 0.2323287196440713,
          "rotation": 3.9269908169872414,
          "target": "0-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4330044972670954,
          "pitch": -0.07495570719575007,
          "title": "Level 2",
          "text": "On this level, there are many seminar rooms where students attend their sectionals or tutorials. There are also study pods for students to have a productive time to do their readings or projects."
        }
      ]
    },
    {
      "id": "2-level-3",
      "name": "Level 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.39816862999660607,
        "pitch": 0.1540196297443437,
        "fov": 1.5119593653236838
      },
      "linkHotspots": [
        {
          "yaw": 3.060939479241334,
          "pitch": -0.04852700543827737,
          "rotation": 3.141592653589793,
          "target": "1-level-2"
        },
        {
          "yaw": 0.4507343294240602,
          "pitch": 0.04736856318670135,
          "rotation": 2.356194490192345,
          "target": "0-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.27917302811195555,
          "pitch": -0.23230551642992125,
          "title": "Level 3",
          "text": "There are additional rooms on this level for students to attend their lessons as well."
        }
      ]
    }
  ],
  "name": "School of Business",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
